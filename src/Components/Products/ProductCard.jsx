import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const title =
    product.title || product.ProductName || product.Title || "No Title";
  const description = product.description || "No description";
  const price = product.price ? `Rs. ${product.price}` : "Price N/A";
  const image = product.image || "https://via.placeholder.com/150";

  return (
    <div
      className="bg-white rounded-lg shadow-md p-3 text-center hover:scale-[1.02] transition-transform
                 flex flex-col justify-between"
      style={{ height: "320px" }} // fixed height to align buttons
    >
      <div>
        <img
          src={image}
          alt="Image loading..."
          className="w-full h-28 object-contain mb-2"
        />

        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
        <p className="text-sm font-semibold text-red-600 mt-1">{price}</p>
      </div>

      <Link
        to="/login"
        className="bg-black text-white text-sm font-semibold rounded-full px-4 py-1 mt-0.5 hover:bg-gray-800 transition"
      >
        Order Now
      </Link>
    </div>
  );
};

export default ProductCard;
