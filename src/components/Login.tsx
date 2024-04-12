import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../utils/auth"; // Replace with your login hook

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { login, isLoading, error } = useLogin(); // Replace with your login hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/"); // Redirect to dashboard on successful login
    } catch (error) {
      setErrorMessage(error.message || "Login failed."); // Handle errors
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
