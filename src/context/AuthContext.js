import React from "react";
import HttpClient from "../lib/api/HttpClient";
import Cookies from "js-cookie";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(Cookies.get("token") || "");

  React.useEffect(() => {
    if (Cookies.get("token")) {
      fetchUser();
    }
  }, [ Cookies.get("token") ]);

  const fetchUser = async () => {
    try {
      const response = await HttpClient.get("/me", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("Gagal mengambil data user", error);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await HttpClient.post("/login", credentials);
      Cookies.set("token", response.data.token, { expires: 7 });
      setToken(response.data.token);
      fetchUser();
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
  };

  console.log("usersrrr", user);
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
