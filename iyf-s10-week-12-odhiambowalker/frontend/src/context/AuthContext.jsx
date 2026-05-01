import { createContext, useContext, useState } from "react";
import { authAPI } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    const res = await authAPI.login(data);
    localStorage.setItem("token", res.token);
    setUser(res.user);
  };

  const register = async (data) => {
    const res = await authAPI.register(data);
    localStorage.setItem("token", res.token);
    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);