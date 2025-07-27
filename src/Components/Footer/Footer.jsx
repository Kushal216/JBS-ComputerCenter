import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Thank you for subscribing!");
        setEmail("");
      } else {
        alert("❌ Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const items = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Courses", path: "/courses" },
    { name: "Forms", path: "/forms" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#EAE9FF] text-sm text-gray-700 mt-0 pt-10 pb-6 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Brand and Description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Logo" className="h-8" />
              <h2 className="text-xl font-bold text-blue-700 pl-2">
                JBS & Computer Center
              </h2>
            </Link>
          </div>
          <p className="max-w-sm text-gray-600">
            Your one-stop solution for stationery, educational courses, and
            resources.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2 text-xl text-blue-700">
            <a
              href="https://www.facebook.com/profile.php?id=61574893107735"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-500 transition" />
            </a>
            <a
              href="https://wa.me/9779842288894"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>
            <a
              href="https://instagram.com/jbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="mailto:jbooks2024@gmail.com">
              <FaEnvelope className="hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        {/* Middle: Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2 text-blue-700">Quick Links</h3>
          <ul className="gap-5 font-medium list-none grid grid-cols-2 gap-y-1 gap-x-6 text-sm">
            {items.map((item) => (
              <li
                key={item.name}
                className="hover:underline hover:font-semibold hover:text-blue-600 cursor-pointer"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Newsletter */}
        <div className="max-w-xs">
          <h3 className="font-semibold mb-2 text-blue-700">
            Join Our Newsletter
          </h3>
          <p className="text-gray-600 mb-2">
            Get updates on new products and offers.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center border border-gray-400 rounded-full px-3 py-1 bg-white"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow outline-none bg-transparent text-sm px-2"
              required
            />
            <button
              type="submit"
              className="text-white bg-[#0011FF] px-3 py-1.5 rounded-full text-xs hover:bg-blue-800 transition"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} JBS & Computer Center. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
