import React from "react";

const sampleProducts = new Array(6).fill({
  title: "DOMS ultra black Pencil Box",
  description: "12 HB dark 5 mm",
  price: "Nrs. 120/-",
  rating: 5,
  image: "/images/pencilbox.png", // Replace with your actual image path
});

const ProductsSection = () => {
  return (
    <div className="bg-[#f2ebfe] py-10 px-4">
      {/* Section 1: Offers */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Offers 🔥</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sampleProducts.map((product, index) => (
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
          {sampleProducts.map((product, index) => (
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

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 text-center hover:scale-[1.02] transition-transform">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-28 object-contain mb-2"
      />
      <div className="flex justify-center text-orange-500 text-sm mb-1">
        {Array.from({ length: product.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{product.title}</h3>
      <p className="text-xs text-gray-600">{product.description}</p>
      <p className="text-sm font-semibold text-red-600 mt-1">{product.price}</p>
      <button className="bg-black text-white text-sm font-semibold rounded-full px-4 py-1 mt-2 hover:bg-gray-800 transition">
        Order Now
      </button>
    </div>
  );
};

export default ProductsSection;
