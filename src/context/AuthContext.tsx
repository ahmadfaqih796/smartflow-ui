import AuthService from "@/lib/services/AuthService";
import React from "react";
import Cookies from "js-cookie";

export const AuthContext = React.createContext({
  user: null,
  token: null,
  login: (_: any) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const service = new AuthService();
  const [user, setUser] = React.useState<any>(null);
  const [token, setToken] = React.useState<any>(null);

  React.useEffect(() => {
    if (Cookies.get("token")) {
      fetchUser();
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await service.getMe();
      setUser((response.data as any)[0]);
      console.log("mmmmmeee", (response.data as any)[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const login = async (credentials: any) => {
    try {
      const response = await service.login(credentials);
      console.log("mmmamamamam", response.data.Token);
      const { Token } = response.data;
      Cookies.set("token", Token, { expires: 7 });
      setToken(Token);
      fetchUser();
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    // await HttpClient.post("/logout");
    Cookies.remove("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
