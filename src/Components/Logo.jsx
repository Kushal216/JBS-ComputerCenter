import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold font-poppins text-blue-600 pl-2">
            JBS & Computer Center
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
