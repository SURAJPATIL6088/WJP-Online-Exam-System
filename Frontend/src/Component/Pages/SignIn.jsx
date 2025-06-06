import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getToken, loginAdmin, storeToken } from "../Service/AdminService";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      //setLoading(true);
      console.log(formData);

      const response = await loginAdmin(formData);
      console.log("response : ", response);
      console.log("response : ", response.data);

      if (response.status === 201) {
        console.log(response.data.jwt);
        storeToken(response.data.jwt);
        //setLoading(false);

        /*
        const token = getToken();
        if (token) {
          const decode = jwtDecode(token);
          console.log(decode);
          console.log("Email : ", decode.sub);
          console.log("Role : ", decode.authorities[0]);
        }
          */
      }
    } catch (error) {
      console.log(error);
      if (error.response.status) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong...!");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          className="input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Do not have account<span>Registerr</span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
