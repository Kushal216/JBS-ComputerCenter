import React, { useState } from "react";
import "@fontsource/poppins";

function JoinButton() {
  return (
    <button className="border-2 rounded-2xl px-4 py-1 bg-[#0011FF] text-white hover:bg-blue-800 transition">
      Join Us
    </button>
  );
}

function NavBar() {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("Products"); // Default active

  const navItems = ["Home", "Products", "Courses", "Forms", "About", "Contact"];

  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-[#EAE9FF]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
        <h1 className="text-2xl font-bold font-poppins text-blue-600">
          JBS & Computer Center
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 w-full max-w-md mt-3 md:mt-0 md:mx-10">
        <input
          type="text"
          placeholder="stationery, courses, etc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none flex-grow bg-transparent"
        />
        <img src="/images/search.png" alt="Search Icon" className="h-4 ml-2" />
      </div>

      {/* Navigation + Button */}
      <div className="flex items-center gap-6 mt-3 md:mt-0">
        <ul className="flex gap-4 text-sm font-medium list-none">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveLink(item)}
              className={`cursor-pointer ${
                activeLink === item
                  ? "text-blue-600 underline font-semibold"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <JoinButton />
      </div>
    </nav>
  );
}

export default NavBar;
