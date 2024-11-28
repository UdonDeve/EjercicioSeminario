import React from 'react';

const ProductCard = ({ name, price, brand, imageUrl, isNew, stock }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">

      {isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          New Arrival
        </span>
      )}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-lg font-bold text-gray-900 mt-2">SAR {price}</p>
        {stock <= 12 && (
          <p className="text-sm text-red-500 mt-1">
            {stock} {stock === 1 ? 'item' : 'items'} left!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
