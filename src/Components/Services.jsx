import React from "react";
import {
  FaBookOpen,
  FaPrint,
  FaLaptopCode,
  FaPaintBrush,
  FaMicrosoft,
  FaGlobe,
  FaCamera,
  FaTools,
  FaChalkboardTeacher,
  FaCode,
  FaNetworkWired,
  FaPhotoVideo,
} from "react-icons/fa";

const services = [
  {
    title: "Stationery & Office Supplies",
    description:
      "All essential school, college, and office items at affordable prices.",
    icon: <FaBookOpen size={30} className="text-indigo-600" />,
  },
  {
    title: "Printing & Binding",
    description:
      "High-quality printing, spiral binding, lamination, and project printing.",
    icon: <FaPrint size={30} className="text-indigo-600" />,
  },
  {
    title: "Computer Basics Training",
    description:
      "Learn Windows, MS Office, file handling, and internet usage from scratch.",
    icon: <FaLaptopCode size={30} className="text-indigo-600" />,
  },
  {
    title: "Web Development",
    description:
      "Front-end and back-end development using HTML, CSS, JavaScript, React, and more.",
    icon: <FaCode size={30} className="text-indigo-600" />,
  },
  {
    title: "Graphic Design",
    description:
      "Learn Photoshop, Illustrator, Canva, and create eye-catching designs.",
    icon: <FaPaintBrush size={30} className="text-indigo-600" />,
  },
  {
    title: "Microsoft Office Package",
    description: "Become proficient in MS Word, Excel, PowerPoint, and Access.",
    icon: <FaMicrosoft size={30} className="text-indigo-600" />,
  },
  {
    title: "Internet & Scanning Services",
    description:
      "Fast internet browsing, document scanning, and email support.",
    icon: <FaGlobe size={30} className="text-indigo-600" />,
  },
  {
    title: "Photo & Document Printing",
    description: "Instant passport photos, certificates, and document prints.",
    icon: <FaCamera size={30} className="text-indigo-600" />,
  },
  {
    title: "Hardware Troubleshooting",
    description:
      "PC and printer repair, maintenance, and basic hardware services.",
    icon: <FaTools size={30} className="text-indigo-600" />,
  },
  {
    title: "IT & Computer Classes",
    description:
      "Learn computer skills from certified instructors in a classroom setting.",
    icon: <FaChalkboardTeacher size={30} className="text-indigo-600" />,
  },
  {
    title: "Networking Basics",
    description: "Get introduced to computer networking and LAN setup.",
    icon: <FaNetworkWired size={30} className="text-indigo-600" />,
  },
  {
    title: "Photo & Video Editing",
    description:
      "Edit pictures and videos for events, documents, or social media.",
    icon: <FaPhotoVideo size={30} className="text-indigo-600" />,
  },
];

const Services = () => {
  return (
    <div className="bg-[#f2ebfe] text-gray-800 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          We provide a wide range of educational and technical services designed
          to support both students and professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="mb-4 ">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-700">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
