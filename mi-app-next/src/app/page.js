import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FilterSidebar from './components/FilterSidebar';
import ProductList from './components/ProductList';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner />

      <div className="flex flex-1 p-4">
        <div className="w-72 hidden lg:block">
          <FilterSidebar />
        </div>
        <div className="flex-1 ml-0 lg:ml-6">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
