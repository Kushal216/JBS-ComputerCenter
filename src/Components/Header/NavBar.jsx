import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "../Container/Conta";
import LogOutBtn from "./LogOutBtn";
import { useSelector } from "react-redux";

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
  const authStatus = useSelector((state) => state.auth.status);
  //const navigate = useNavigate();
 
  const navItems = [
    { name: "Home", path: "/", active: true },
    { name: "Products", path: "/products", active: true },
    { name: "Courses", path: "/courses", active: true },
    { name: "Forms", path: "/forms", active: true },
    { name: "About", path: "/about", active: true },
    { name: "Contact", path: "/contact", active: true },
    { name: "Login", path: "/login", active: !authStatus },
    { name: "Signup", path: "/signup", active: !authStatus },
  ];

  return (
    <header>
      <Container>
        <nav className="flex flex-wrap items-center justify-between p-5 bg-[#EAE9FF]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Logo" className="h-10" />
              <h1 className="text-2xl font-bold font-poppins text-blue-600 pl-2">
                JBS & Computer Center
              </h1>
            </Link>
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
            <img
              src="/images/search.png"
              alt="Search Icon"
              className="h-4 ml-2"
            />
          </div>

          {/* Navigation + Button */}
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <ul className="flex gap-4 text-sm font-medium list-none">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `cursor-pointer ${
                          isActive
                            ? "text-blue-600 underline font-semibold"
                            : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogOutBtn />
                </li>
              )}
            </ul>
            <JoinButton />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
