import React from "react";

interface UserProfile {
  // Add properties for user details (name, email, etc.)
}

interface UserProfileModalProps {
  user: UserProfile;
  onClose: () => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  user,
  onClose,
}) => {
  // Display user details here
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>User Profile</h3>
        {/* Display user details retrieved from props or API */}
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Add other user details */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserProfileModal;
