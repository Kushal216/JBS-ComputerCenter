import React from "react";
import { Link } from "react-router-dom";
import {
  FiEye,
  FiTarget,
  FiBookOpen,
  FiPrinter,
  FiCpu,
  FiCode,
  FiPenTool,
  FiPackage,
} from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="bg-[#f2ebfe] text-gray-900 py-16 px-6 md:px-20">
      {/* Header Section with Hero Image */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-600 text-base mb-6">
          At{" "}
          <span className="font-semibold text-blue-700">
            JBS & Computer Center
          </span>
          , we are committed to providing top-quality stationery and printing
          services alongside structured computer education—from beginner
          essentials to advanced technical skills.
        </p>
        {/* <img
          src="/public/images/computer-class.png"
          alt="Educational Center"
          className="w-full rounded-md shadow-md"
          loading="lazy"
        /> */}
      </div>

      {/* Vision and Mission with Icons */}
      <div className="grid md:grid-cols-2 gap-10 mb-16 max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-md p-8 flex flex-col items-center text-center">
          <FiEye className="text-blue-700 mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Our Vision
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            To become a leading educational hub by offering a seamless
            combination of academic materials and digital skills that empower
            students, professionals, and lifelong learners.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-md p-8 flex flex-col items-center text-center">
          <FiTarget className="text-blue-700 mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our mission is to enhance learning and creativity by offering
            accessible stationery products and high-quality computer education,
            building a smarter and more capable community.
          </p>
        </div>
      </div>

      {/* Services Offered with React Icons */}
      <div className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white p-6 shadow-md rounded-md text-center font-medium text-gray-700 flex flex-col items-center space-y-4">
            <FiBookOpen className="w-10 h-10 text-blue-700" />
            Stationery & Office Supplies
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center font-medium text-gray-700 flex flex-col items-center space-y-4">
            <FiPrinter className="w-10 h-10 text-blue-700" />
            Printing & Binding Services
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center font-medium text-gray-700 flex flex-col items-center space-y-4">
            <FiCpu className="w-10 h-10 text-blue-700" />
            Computer Basics Training
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center font-medium text-gray-700 flex flex-col items-center space-y-4">
            <FiCode className="w-10 h-10 text-blue-700" />
            Programming & Web Development
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center font-medium text-gray-700 flex flex-col items-center space-y-4">
            <FiPenTool className="w-10 h-10 text-blue-700" />
            Graphic Design Courses
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center font-medium text-gray-700 flex flex-col items-center space-y-4">
            <FiPackage className="w-10 h-10 text-blue-700" />
            Microsoft Office Package Classes
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="max-w-4xl mx-auto text-center text-gray-700 text-sm leading-relaxed">
        <p>
          Founded with a vision to bridge academic needs and digital literacy,
          JBooks & Computer Center stands as a multi-functional learning space.
          Whether you're buying a notebook, printing a project, or learning how
          to code, our goal is to support your journey with quality and care.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
