import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { logOut as logout } from "../../Store/authSlice";
import "@fontsource/poppins";

function NavBar() {
  const [search, setSearch] = useState("");
  const authStatus = useSelector((state) => state.auth.status);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const handleJoinClick = () => {
    navigate("/signup");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const navItems = [
    { name: "Home", path: "/", active: true },
    { name: "Products", path: "/products", active: true },
    { name: "Courses", path: "/courses", active: true },
    { name: "Forms", path: "/forms", active: true },
    { name: "About", path: "/about", active: true },
    { name: "Contact", path: "/contact", active: true },
  ];

  return (
    <header>
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
          <ul className="flex gap-4 text-sm font-medium list-none items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `cursor-pointer ${
                        isActive
                          ? "text-blue-600 underline font-semibold"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}

            {/* Conditional Button */}
            <li>
              {!authStatus ? (
                <button
                  onClick={handleJoinClick}
                  className="border-2 rounded-2xl px-4 py-1 bg-[#0011FF] text-white hover:bg-blue-800 transition"
                >
                  Join Now
                </button>
              ) : (
                <button
                  onClick={handleProfileClick}
                  className="border-2 rounded-2xl px-4 py-1 bg-green-600 text-white hover:bg-green-800 transition"
                >
                  Profile
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
