import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { login, logout } from "../utils/auth"; // Import logout function from auth.js

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

//   const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call login function from auth.js to authenticate the user
      await login(formData);
      // Redirect to home page after successful login
    //   history.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

//   const handleLogout = async () => {
//     try {
//       // Call logout function from auth.js to log the user out
//       await logout();
//     //   Redirect to login page after successful logout
//     //   history.push("/login");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
     
      </form>
    </div>
  );
}

export default LoginPage;

