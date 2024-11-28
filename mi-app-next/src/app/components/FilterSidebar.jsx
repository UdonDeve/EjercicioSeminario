import React from 'react';

const FilterSidebar = () => {
  return (
    <div className='space-y-6'>
    <aside className="w-72 p-4 bg-white shadow-lg rounded-lg">
      <div className='flex filter-section mb-6 justify-between'>
        <p className='text-xl font-medium'>Filter</p>
        <p className='text-xl font-medium text-cyan-500'>Advanced</p>
      </div>
      <div className="">
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        <input
          type="text"
          placeholder="Search brand..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"/>
        <ul className="space-y-2">
          <li><label><input type="checkbox" className="mr-2" /> Nike</label></li>
          <li><label><input type="checkbox" className="mr-2" /> Adidas</label></li>
          <li><label><input type="checkbox" className="mr-2" /> Apple</label></li>
          <li><label><input type="checkbox" className="mr-2" /> New Balance</label></li>
          <li><label><input type="checkbox" className="mr-2" /> Puma</label></li>
        </ul>
      </div>
    </aside>
    <div>
    <aside className="w-72 p-4 bg-white shadow-lg rounded-lg">
      <div className="filter-section mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          className="w-full"/>
      </div>
      <div className="filter-section">
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">XXS</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">XS</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">S</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">M</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">L</button>
        </div>
      </div>
      <div>
</div>
    </aside>
    </div>
    <div>
    <aside className="w-72 p-4 bg-white shadow-lg rounded-lg">
      <div>
  <h3 className="text-lg font-semibold mb-2">Color</h3>
  <div className="flex space-x-2">
    <button className="w-10 h-10 bg-red-500 rounded-full"></button>
    <button className="w-10 h-10 bg-blue-500 rounded-full"></button>
    <button className="w-10 h-10 bg-green-500 rounded-full"></button>
    <button className="w-10 h-10 bg-yellow-500 rounded-full"></button>
    <button className="w-10 h-10 bg-gray-500 rounded-full"></button>
  </div>
</div>
  <div>
</div>
    </aside>
    </div>
    </div>
  );
};


export default FilterSidebar;
