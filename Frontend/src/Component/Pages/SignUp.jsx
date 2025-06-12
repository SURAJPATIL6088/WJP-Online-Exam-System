import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styling/Sign.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ROLE_STUDENT");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8080/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password, role }),
      });

      const data = await response.json();
      console.log(response);

      if (!response.ok) {
        setError(data.error || "Registration Failed");
      } else {
        setSuccess("Student Registered Successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setRole("ROLE_STUDENT");

        setTimeout(() => navigate("/signin"), 1500);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleRegister} className="login-form">
        <h2 className="text-center">Register as Student</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            required
            className="input-field"
            minLength={3}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            required
            className="input-field"
            minLength={3}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            className="input-field"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            className="input-field"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading} className="register-button">
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="login-link">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/signin")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
