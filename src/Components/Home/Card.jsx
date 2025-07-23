import {useState} from "react";
import { FaPrint, FaBoxOpen, FaClipboardList } from "react-icons/fa";
const services = [
  {
    title: "Printing",
    image: "public/images/printer.png",
    icon: { FaPrint },
    description: [
      "Colour Printing",
      "Black and White Printing",
      "Printing, Photocopy and Scanning",
    ],
    Whatsapp: "9842288894",
    Contact: "9862305882",
    Email: "jbooks2024@gmail.com",
  },
  {
    title: "Products",
    image: "public/images/library-girl.png",
    icon: { FaBoxOpen },
    description: [
      "Note Books",
      "Text Books",
      "Loksewa Books",
      "Language Books",
      "Stationary items",
      "All Stationary Items",
    ],
    Whatsapp: "9842288894",
    Contact: "9862305882",
    Email: "jbooks2024@gmail.com",
  },
  {
    title: "Other Services",
    image: "public/images/library-girl.png",
    icon: { FaClipboardList },
    description: [
      "Limations",
      "Binding",
      "Computer Classes",
      "Form filling",
      "Designing",
      "All Stationary Items",
    ],
    Whatsapp: "9842288894",
    Contact: "9862305882",
    Email: "jbooks2024@gmail.com",
  },
];
const servicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-[#f2ebfe] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServicesCard
              key={`service-${index}`}
              service={service}
              onLearnMore={() => openModal(service)}
            />
          ))}
        </div>
        <p className="text-center text-sm font-medium mt-8 text-gray-700">
          <a href="#" className="hover:underline text-blue-600">
            Explore More services →
          </a>
        </p>
      </div>
      {selectedService && (
        <serviceModal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
};

const ServicesCard = ({ service, onLearnMore }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition-shadow duration-300">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-32 object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">Duration: {service.duration}</p>
      <p className="text-md font-bold text-red-600 mb-4">{service.price}</p>
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

const serviceModal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {service.title}
        </h2>
        <div className="flex items-center mb-4">
          <img
            src={service.image}
            alt={service.title}
            className="w-24 h-24 object-contain rounded-md mr-4"
          />
          <div>
            <p className="text-sm font-medium text-gray-600">
              Duration: <span className="text-gray-800">{service.duration}</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Price:{" "}
              <span className="text-red-600 font-bold">{service.price}</span>
            </p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          service Content
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          {service.description.map((item, index) => (
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

export default servicesSection;
