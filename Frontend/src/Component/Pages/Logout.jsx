import React from "react";
import { removeToken } from "../Service/AdminService";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setRole(null);
    navigate("/login");
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
