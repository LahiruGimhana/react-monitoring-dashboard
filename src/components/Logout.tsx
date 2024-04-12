import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../utils/auth"; // Replace with your logout hook

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useLogout(); // Replace with your logout hook

  const handleLogout = async () => {
    await logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
