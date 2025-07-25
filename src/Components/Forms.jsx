import React, { useState } from "react";
import { Eye, Download, ExternalLink } from "lucide-react";

const HorizontalCoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Basic Computer Course",
      duration: "3 Months",
      price: "Nrs. 3000/-",
      highlights: [
        "Typesala (Nepali, English)",
        "Microsoft Office Suite",
        "Email and Internet"
      ],
      totalTopics: 8,
      imageColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Office Package (Diploma)",
      duration: "5 Months",
      price: "Nrs. 4500/-",
      highlights: [
        "Complete Office Suite",
        "Adobe Pagemaker & Photoshop",
        "Professional Printing Skills"
      ],
      totalTopics: 10,
      imageColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Advance Office Package",
      duration: "6.5 Months",
      price: "Nrs. 6500/-",
      highlights: [
        "Advanced Office Applications",
        "Tally Accounting Software",
        "HTML Web Development"  
      ],
      totalTopics: 11,
      imageColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Loksewa Computer Skill Examination",
      duration: "Varies",
      price: "Contact for details",
      highlights: [
        "Windows Basic Operations",
        "File Management",
        "MS Word Advanced"
      ],
      totalTopics: 4,
      imageColor: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  return (
    <div className="bg-gradient-to-r from-gray-50 to-purple-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Our Professional Courses
        </h2>
        
        <div className="space-y-6">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onLearnMore={() => openModal(course)}
            />
          ))}
        </div>

        <p className="text-center text-sm font-medium mt-12 text-gray-700">
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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/4 p-6 flex items-center justify-center bg-gray-50">
          <div className={`w-full h-32 md:h-40 ${course.imageColor} rounded-md flex items-center justify-center`}>
            <span className={`${course.textColor} text-sm`}>Course Image</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {course.title}
          </h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Duration: {course.duration}
            </span>
            <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
              {course.price}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            <p className="font-medium mb-2">Course Highlights:</p>
            <ul className="space-y-1">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {highlight}
                </li>
              ))}
              <li className="text-blue-600 font-medium cursor-pointer hover:underline" onClick={onLearnMore}>
                +{course.totalTopics - course.highlights.length} more topics...
              </li>
            </ul>
          </div>
        </div>
        
        {/* Actions Section */}
        <div className="md:w-1/4 p-6 flex flex-col justify-center bg-gray-50 border-l border-gray-200">
          <div className="space-y-3">
            <button 
              className="w-full bg-blue-600 text-white text-sm font-semibold rounded-lg px-4 py-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              onClick={onLearnMore}
            >
              <Eye className="w-4 h-4" />
              Learn More
            </button>
            
            <button className="w-full bg-green-600 text-white text-sm font-semibold rounded-lg px-4 py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Syllabus
            </button>
            
            <button className="w-full bg-purple-600 text-white text-sm font-semibold rounded-lg px-4 py-3 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </button>
            
            <button className="w-full bg-black text-white text-sm font-semibold rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseModal = ({ course, onClose }) => {
  const fullCourseContent = {
    1: [
      "Typesala (Nepali, English)",
      "Microsoft Paint (MS Paint)",
      "Typing Nepali, English",
      "Microsoft Office Word",
      "Microsoft Office Excel",
      "Microsoft Office Powerpoint",
      "Email and Internet",
      "Printing, Photocopy and Scanning"
    ],
    2: [
      "Typesala (Nepali, English)",
      "Microsoft Paint (MS Paint)",
      "Typing Nepali, English",
      "Microsoft Office Word",
      "Microsoft Office Excel",
      "Microsoft Office Powerpoint",
      "Adobe Pagemaker",
      "Adobe Photoshop",
      "Email and Internet",
      "Printing, Photocopy and Scanning"
    ],
    3: [
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
      "Printing, Photocopy and Scanning"
    ],
    4: [
      "Windows Basic: Introduction to GUI, Desktop, Taskbar, My Computer, Recycle Bin",
      "File and Folder Management, Searching Files",
      "MS Word: Creating, Saving, Formatting Documents, Header/Footer, Page Settings",
      "Practical Examination Preparation"
    ]
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className={`w-full h-48 ${course.imageColor} rounded-md flex items-center justify-center mb-4`}>
              <span className={`${course.textColor}`}>Course Image</span>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white text-sm font-semibold rounded-lg px-4 py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Syllabus
              </button>
              
              <button className="w-full bg-purple-600 text-white text-sm font-semibold rounded-lg px-4 py-3 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </button>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {course.title}
            </h2>
            
            <div className="flex gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Duration: {course.duration}
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
                {course.price}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Complete Course Content
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              {fullCourseContent[course.id]?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-600 text-white text-sm font-semibold rounded-lg px-6 py-2 hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                Close
              </button>
              <button className="bg-black text-white text-sm font-semibold rounded-lg px-6 py-2 hover:bg-gray-800 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCoursesSection;
