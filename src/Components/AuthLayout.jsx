import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthLayout({ children }) {
  const authStatus = useSelector((state) => state.auth.status);

  // If already logged in, redirect to home (or dashboard)
  if (authStatus) {
    return <Navigate to="/" replace />;
  }

  // Else show login/signup page
  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
