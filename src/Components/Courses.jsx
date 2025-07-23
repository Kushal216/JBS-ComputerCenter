import React, { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Basic Computer Course",
    description: [
      "Typesala (Nepali, English)",
      "Microsoft Paint (MS Paint)",
      "Typing Nepali, English",
      "Microsoft Office Word",
      "Microsoft Office Excel",
      "Microsoft Office Powerpoint",
      "Email and Internet",
      "Printing, Photocopy and Scanning",
    ],
    duration: "3 Months",
    price: "Nrs. 3000/-",
    image: "/images/computer-course.png", // Placeholder image
  },
  {
    title: "Office Package (Diploma)",
    description: [
      "Typesala (Nepali, English)",
      "Microsoft Paint (MS Paint)",
      "Typing Nepali, English",
      "Microsoft Office Word",
      "Microsoft Office Excel",
      "Microsoft Office Powerpoint",
      "Adobe Pagemaker",
      "Adobe Photoshop",
      "Email and Internet",
      "Printing, Photocopy and Scanning",
    ],
    duration: "5 Months",
    price: "Nrs. 4500/-",
    image: "/images/office-package.png", // Placeholder image
  },
  {
    title: "Advance Office Package",
    description: [
      "Typesala (Nepali, English)",
      "Microsoft Paint (MS Paint)",
      "Microsoft Office Word",
      "Microsoft Office Excel",
      "Microsoft Office Powerpoint",
      "Adobe Pagemaker",
      "Adobe Photoshop",
      "Tally",
      "HTML",
      "Email and Internet",
      "Printing, Photocopy and Scanning",
    ],
    duration: "6.5 Months",
    price: "Nrs. 6500/-",
    image: "/images/advance-office.png", // Placeholder image
  },
  {
    title: "Loksewa Computer Skill Examination",
    description: [
      "Windows Basic: Introduction to GUI, Desktop, Taskbar, My Computer, Recycle Bin",
      "File and Folder Management, Searching Files",
      "MS Word: Creating, Saving, Formatting Documents, Header/Footer, Page Settings",
      "Practical Examination Preparation",
    ],
    duration: "Varies",
    price: "Contact for details",
    image: "/images/loksewa-course.png", // Placeholder image
  },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-[#f2ebfe] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Our Professional Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={`course-${index}`}
              course={course}
              onLearnMore={() => openModal(course)}
            />
          ))}
        </div>
        <p className="text-center text-sm font-medium mt-8 text-gray-700">
          <a href="#" className="hover:underline text-blue-600">
            Explore More Courses →
          </a>
        </p>
      </div>
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={closeModal} />
      )}
    </div>
  );
};

const CourseCard = ({ course, onLearnMore }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-shadow duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-32 object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {course.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">Duration: {course.duration}</p>
      <p className="text-md font-bold text-red-600 mb-4">{course.price}</p>
      <div className="flex justify-center gap-3">
        <button
          className="bg-blue-600 text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-blue-700 transition"
          onClick={onLearnMore}
        >
          Learn More
        </button>
        <button className="bg-black text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-gray-800 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

const CourseModal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {course.title}
        </h2>
        <div className="flex items-center mb-4">
          <img
            src={course.image}
            alt={course.title}
            className="w-24 h-24 object-contain rounded-md mr-4"
          />
          <div>
            <p className="text-sm font-medium text-gray-600">
              Duration: <span className="text-gray-800">{course.duration}</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Price:{" "}
              <span className="text-red-600 font-bold">{course.price}</span>
            </p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          Course Content
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          {course.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-600 text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-gray-700 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
