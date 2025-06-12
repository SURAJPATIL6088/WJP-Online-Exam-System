import React, { useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginAdmin, storeToken } from "../Service/AdminService";
import { Link } from "react-router-dom";
import "../Styling/Sign.css";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { setIsAuthenticated, setRole } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginAdmin(formData);
      if (response.status === 201 && response.data.jwt) {
        const token = response.data.jwt;
        storeToken(token);

        const decoded = jwtDecode(token);
        const userRole = decoded.authorities?.[0] || null;

        setIsAuthenticated(true);
        setRole(userRole);

        if (userRole === "ROLE_ADMIN") {
          navigate("/");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-center">Sign In</h2>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Enter Password:</label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your Password"
          required
        />
        <button type="submit" disabled={loading} className="login-button">
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/signup" className="register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
