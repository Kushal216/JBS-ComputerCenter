import React from "react";

const ProductCard = ({ product }) => {
  const { title, description, price, rating, image } = product;

  return (
    <div className="bg-white rounded-lg shadow-md p-3 text-center hover:scale-[1.02] transition-transform">
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-contain mb-2"
      />
      <div className="flex justify-center text-orange-500 text-sm mb-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
      <p className="text-sm font-semibold text-red-600 mt-1">{price}</p>
      <button className="bg-black text-white text-sm font-semibold rounded-full px-4 py-1 mt-2 hover:bg-gray-800 transition">
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
