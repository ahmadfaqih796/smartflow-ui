import Cookies from "js-cookie";
import React from "react";
import AuthService from "../lib/services/AuthService";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const authService = new AuthService();
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(Cookies.get("token") || "");

  React.useEffect(() => {
    if (Cookies.get("token")) {
      fetchUser();
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      // const response = await HttpClient.get("/me", {
      //   headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      // });
      // setUser(response.data);
    } catch (error) {
      console.log("Gagal mengambil data user", error);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log("mmmamamamam", response)
      Cookies.set("token", response.data.Token, { expires: 7 });
      setToken(response.data.Token);
      fetchUser();
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  const logout = async () => {
    // await HttpClient.post("/logout");
    Cookies.remove("token");
    setToken(null);
    setUser(null);
  };

  console.log("usersrrr", user);
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
