import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut as logout } from "../Store/authSlice"; // adjust path if needed

function Profile() {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // redirect after logout
  };

  if (!user) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
        User Profile
      </h2>
      <div className="space-y-3 text-gray-800">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Joined At:</span>{" "}
          {user.joinedAt || "N/A"}
        </p>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
