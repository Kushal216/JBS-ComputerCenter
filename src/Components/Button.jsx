import React from "react";

function Button({
  children,
  type = "button",
  textcolor = "text-white",
  bgcolor = "bg-blue-600",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${textcolor} ${bgcolor}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
