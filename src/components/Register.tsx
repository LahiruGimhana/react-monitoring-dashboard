import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../utils/auth"; // Replace with your register hook

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { register, isLoading, error } = useRegister(); // Replace with your register hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords DO NOT MATCH");
      return;
    }
    try {
      await register(username, email, password);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      setErrorMessage(error.message || "Registration failed."); // Handle errors
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
