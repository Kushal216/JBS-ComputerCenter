import React from "react";
import { useNavigate } from "react-router-dom";

function AuthToggleButton({ authStatus, onLogout }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (authStatus) {
      // If logged in, trigger logout
      onLogout(); // This should clear your auth state
    } else {
      // If logged out, navigate to login page
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`border-2 rounded-2xl px-4 py-1 transition ${
        authStatus
          ? "bg-red-600 text-white hover:bg-red-800"
          : "bg-blue-600 text-white hover:bg-blue-800"
      }`}
    >
      {authStatus ? "Logout" : "Join Now"}
    </button>
  );
}

export default AuthToggleButton;
