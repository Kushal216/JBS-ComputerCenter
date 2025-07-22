import React from "react";
import { FaPrint, FaBoxOpen, FaClipboardList } from "react-icons/fa";

function HomePage() {
  return (
    <div className="mb-0">
      {/* Hero Section */}
      <section className="bg-[#EAE9FF] px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create, <br /> learn and Grow
            </h1>
            <p className="text-gray-600 mb-6">
              Explore our premium stationery, helpful services,{" "}
              <br className="hidden md:block" />
              and engaging courses.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Explore our services →
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-md">
            <img
              src="/images/library-girl.png"
              alt="Girl with books"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#060540] text-white py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-3">
            <FaPrint className="text-3xl text-white" />
            <h4 className="font-semibold text-lg">Printing</h4>
            <p className="text-sm text-gray-300 max-w-xs">
              Browse among our best quality stationery items.
            </p>
            <button className="mt-4 px-4 py-1 border rounded-full border-white text-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-3">
            <FaBoxOpen className="text-3xl text-white" />
            <h4 className="font-semibold text-lg">Our Products</h4>
            <p className="text-sm text-gray-300 max-w-xs">
              Browse among our best quality stationery items.
            </p>
            <button className="mt-4 px-4 py-1 border rounded-full border-white text-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-3">
            <FaClipboardList className="text-3xl text-white" />
            <h4 className="font-semibold text-lg">Our Services</h4>
            <p className="text-sm text-gray-300 max-w-xs">
              Browse among our best quality stationery items.
            </p>
            <button className="mt-4 px-4 py-1 border rounded-full border-white text-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
