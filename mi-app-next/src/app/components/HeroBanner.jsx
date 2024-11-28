import React from 'react';

const HeroBanner = () => {
  return (
    <div>
      <section className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Banner_1.jpg")' }}>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white px-4">
             <p className="sm:text-6xl md:text-7xl font-semibold drop-shadow-lg mb-4">
                Simple
             </p>
             <p className="sm:text-6xl md:text-7xl font-semibold drop-shadow-lg ml-16">
               is More
             </p>
          </div>
      </section>
      <section className="bg-gray-200 py-8 pb-2">
          <div className="min-w-full mx-auto px-6">
            <div className="flex flex-row space-x-2">
              <button className="text-lg font-semibold mb-2 text-blue-700">Home</button>
              <img src="/flecha-correcta.png" alt="" className="w-6 h-8 object-contain" />
              <button className="text-lg font-semibold mb-2 text-gray-800">Clothers</button>
            </div>
            <p className="text-3xl text-black font-bold text-start mb-12">
              64 result for clothes
            </p>
          </div>
      </section>

    </div>
  );
};

export default HeroBanner;


