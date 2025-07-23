import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactInfo = {
  name: "JBS & Computer Center",
  address: "Panga Dobato, Way to Vajangal Oralo",
  phone: ["+9842288894 (WhatsApp/Viber)", "+9862305882"],
  email: "jbooks2024@gmail.com",
  logo: "/images/logo.png", // Placeholder logo path
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#f2ebfe] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <img
          src={contactInfo.logo}
          alt="JBS & Computer Center Logo"
          className="h-16 mx-auto mb-6 object-contain"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Get in Touch with Us
        </h2>
        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
            <p className="text-lg font-semibold text-gray-700">
              {contactInfo.name}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
            <p className="text-md text-gray-600">{contactInfo.address}</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            {contactInfo.phone.map((number, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FaPhoneAlt className="w-6 h-6 text-blue-600" />
                <p className="text-md text-gray-600">{number}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="w-6 h-6 text-blue-600" />
            <p className="text-md text-gray-600">{contactInfo.email}</p>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white text-md font-semibold rounded-full px-6 py-2 hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </div>
        </div>
        <p className="text-center text-sm font-medium mt-10 text-gray-700">
          <a href="#" className="hover:underline text-blue-600">
            Learn More About Us →
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
