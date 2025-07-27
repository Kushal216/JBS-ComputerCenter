import React from "react";
import { Link } from "react-router-dom";
import {
  FaPrint,
  FaBoxOpen,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";
import Card from "./Card";
import ProductCard from "../Products/ProductCard";
import products from "../../Data/products.json";

function HomePage() {
  // Slice to get only first 3 products
  const firstThreeProducts = products.slice(0, 3);

  return (
    <div className="mb-0">
      <section className="bg-[#EAE9FF] px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create, <br /> learn and Grow
            </h1>
            <p className="text-gray-600 mb-6">
              Explore our premium stationery, helpful services,{" "}
              <br className="hidden md:block" />
              and engaging courses.
            </p>
            <Link
              className="bg-black text-white text-2xl px-7 pb-2 pt-1 rounded-full hover:bg-gray-800 transition"
              to="/services"
            >
              Explore our services →
            </Link>
          </div>

          <div className="w-full max-w-md">
            <img
              src="/images/library-girl.png"
              alt="Girl with books"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <div>
        <h2 className="bg-[#EAE9FF] text-3xl md:text-4xl font-bold pl-6 pt-6 text-gray-900">
          <Link
            to="/services"
            className="hover:text-[#18176d] hover:underline transition"
          >
            Our Services
          </Link>
        </h2>
        <section className="bg-[#18176d] text-white py-12 px-6 md:px-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card
              favIcon={FaPrint}
              title="Printing"
              description="High-quality printing and scanning  solutions at affordable prices."
            />
            <Card
              favIcon={FaBoxOpen}
              title="Our Products"
              description="Explore top-notch stationery items curated just for you."
            />
            <Card
              favIcon={FaClipboardList}
              title="Our Services"
              description="Experience a range of helpful services tailored to your needs."
            />
          </div>

          <Link
            to="/services"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:block"
          >
            <FaArrowRight className="text-3xl text-white hover:text-gray-300 transition animate-pulse" />
          </Link>
        </section>
      </div>

      {/* Products */}
      <div>
        <h2 className="bg-[#EAE9FF] text-3xl md:text-4xl font-bold pl-6 pt-6 text-gray-900">
          <Link
            to="/products"
            className="hover:text-[#18176d] hover:underline transition"
          >
            Our Products
          </Link>
        </h2>

        <section className="bg-[#6d1717] text-white py-12 px-6 md:px-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstThreeProducts.map((product) => (
              <ProductCard key={product.ProductId} product={product} />
            ))}
          </div>

          <Link
            to="/products"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:block"
          >
            <FaArrowRight className="text-3xl text-white hover:text-gray-300 transition animate-pulse" />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
