import React, { useState, useEffect } from "react";
import { ProductCard } from "../index"; 

import productsData from "../../Data/products.json";
import booksData from "../../Data/books.json";

const ROWS_TO_SHOW = 2; // Number of rows to show when collapsed
const ITEMS_PER_ROW = 6; // matches your grid lg:grid-cols-6

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [books, setBooks] = useState([]);

  // State to toggle show all or limited for each section
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllBooks, setShowAllBooks] = useState(false);

  useEffect(() => {
    setProducts(productsData);
    setBooks(booksData);
  }, []);

  // Calculate how many items to show when collapsed (rows * items per row)
  const limitedProducts = products.slice(0, ROWS_TO_SHOW * ITEMS_PER_ROW);
  const limitedBooks = books.slice(0, ROWS_TO_SHOW * ITEMS_PER_ROW);

  return (
    <div className="bg-[#f2ebfe] py-10 px-4">
      {/* Section 1: Stationery Items */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Stationery Items
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {(showAllProducts ? products : limitedProducts).map(
            (product, index) => (
              <ProductCard key={`stationery-${index}`} product={product} />
            )
          )}
        </div>
        <p className="text-center text-sm font-medium mt-4 text-gray-800 cursor-pointer select-none">
          <span
            className="hover:underline"
            onClick={() => setShowAllProducts(!showAllProducts)}
          >
            {showAllProducts ? "See Less ←" : "See More →"}
          </span>
        </p>
      </div>

      {/* Section 2: Books */}
      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {(showAllBooks ? books : limitedBooks).map((book, index) => (
            <ProductCard key={`book-${index}`} product={book} />
          ))}
        </div>
        <p className="text-center text-sm font-medium mt-4 text-gray-800 cursor-pointer select-none">
          <span
            className="hover:underline"
            onClick={() => setShowAllBooks(!showAllBooks)}
          >
            {showAllBooks ? "See Less ←" : "See More →"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductsSection;
