import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Contact Info
const contactInfo = {
  name: "JBS & Computer Center",
  address: "Panga Dobato, Way to Vajangal Oralo",
  mapLink: "https://maps.google.com/?q=Panga+Dobato+Vajangal+Oralo",
  phone: [
    { label: "+9842288894 (WhatsApp/Viber)", link: "tel:+9842288894" },
    { label: "+9862305882", link: "tel:+9862305882" },
  ],
  email: { label: "jbooks2024@gmail.com", link: "mailto:jbooks2024@gmail.com" },
  logo: "/images/logo.png",
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔁 Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 📤 Placeholder for database submission
  const submitFormToDatabase = async (data) => {
    try {
      //Example: Send to your backend here
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("Form sent to DB:", data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending form:", error);
      alert("Something went wrong!");
    }
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFormToDatabase(formData);
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

        {/* 📞 Contact Details */}
        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
            <a
              href={contactInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-gray-600 hover:underline"
            >
              {contactInfo.address}
            </a>
          </div>

          <div className="flex flex-col items-center space-y-2">
            {contactInfo.phone.map((number, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FaPhoneAlt className="w-6 h-6 text-blue-600" />
                <a
                  href={number.link}
                  className="text-md text-gray-600 hover:underline"
                >
                  {number.label}
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="w-6 h-6 text-blue-600" />
            <a
              href={contactInfo.email.link}
              className="text-md text-gray-600 hover:underline"
            >
              {contactInfo.email.label}
            </a>
          </div>
        </div>

        {/* 📧 Contact Form */}
        <div className="max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            />
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white text-md font-semibold rounded-full px-6 py-2 hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-center text-sm font-medium mt-10 text-gray-700">
          <a href="/about" className="hover:underline text-blue-600">
            Learn More About Us →
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
