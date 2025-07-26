import React, { useState, useEffect } from "react";
import { ProductCard } from "../index"; // Adjust path if needed
import appwriteService from "../../Firebase/configuration"; // Make sure this points to the right service

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    appwriteService.getAllProducts().then((fetchedProducts) => {
      if (fetchedProducts && Array.isArray(fetchedProducts.documents)) {
        setProducts(fetchedProducts.documents);
      } else {
        setProducts([]); // fallback if data is not valid
      }
    });
  }, []);

  return (
    <div className="bg-[#f2ebfe] py-10 px-4">
      {/* Section 1: Offers */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Offers 🔥</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <ProductCard key={`offer-${index}`} product={product} />
          ))}
        </div>
        <p className="text-center text-sm font-medium mt-4 text-gray-800">
          <a href="#" className="hover:underline">
            See More →
          </a>
        </p>
      </div>

      {/* Section 2: Stationery Items */}
      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Stationery Items
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <ProductCard key={`stationery-${index}`} product={product} />
          ))}
        </div>
        <p className="text-center text-sm font-medium mt-4 text-gray-800">
          <a href="#" className="hover:underline">
            See More →
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProductsSection;
