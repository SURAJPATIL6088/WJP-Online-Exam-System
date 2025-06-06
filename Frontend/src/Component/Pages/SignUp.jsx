import React, { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ROLE_STUDENT");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

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
        setRole("");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register as Student</h2>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <div className="input-group">
          <label>firstname:</label>
          <input
            type="text"
            value={firstName}
            required
            className="input-field"
            minLength={3}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>last Name:</label>
          <input
            type="text"
            value={lastName}
            required
            className="input-field"
            minLength={3}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>email:</label>
          <input
            type="text"
            value={email}
            required
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>password:</label>
          <input
            type="text"
            value={password}
            required
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
        <p className="login-link">
          Already have an account? <span className="link">Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
