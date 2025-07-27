import React from "react";

function Card({ favIcon: FavIcon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {FavIcon && <FavIcon className="text-3xl text-white" />}
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-300 max-w-xs text-center">
        {description}
      </p>
      <button className="mt-4 px-4 py-1 border rounded-full border-white text-white hover:bg-white hover:text-black transition">
        Learn More
      </button>
    </div>
  );
}

export default Card;
