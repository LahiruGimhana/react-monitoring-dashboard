import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserProfileModal from "./UserProfileModal";

const Navbar = () => {
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

  const handleUserProfileClick = () => {
    setShowUserProfileModal(true);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Project Name
      </Link>
      <div className="profile-dropdown">
        <button onClick={handleUserProfileClick}>User Profile</button>
        {showUserProfileModal && (
          <UserProfileModal onClose={() => setShowUserProfileModal(false)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
