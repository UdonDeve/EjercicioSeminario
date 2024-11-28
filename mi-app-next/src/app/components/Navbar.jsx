import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-3xl font-extrabold text-cyan-500">Stella</div>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Welcome Back!</span>
        <img
          src="/Banner_1.jpg"
          alt=""
          className="w-8 h-8 rounded-full border border-gray-300"
        />
      </div>
    </nav>
  );
};  

export default Navbar;
