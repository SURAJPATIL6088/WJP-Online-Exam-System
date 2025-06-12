import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../Component/Service/AdminService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.authorities?.[0]);
        setEmail(decoded.sub);
        setIsAuthenticated(true);
        console.log("authenticated..", role, isAuthenticated);
      } catch (error) {
        console.error("Token decoding failed", error);
        setIsAuthenticated(false);
        setRole(null);
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      setIsAuthenticated,
      role,
      setRole,
      email,
      setEmail,
      attempts,
      setAttempts,
      loading,
      setLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
