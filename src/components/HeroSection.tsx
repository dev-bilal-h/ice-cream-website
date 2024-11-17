import React from 'react';
import HeroImage from "@/assets/HeroImage.png";
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-12 lg:px-24 space-y-6 md:space-y-0">
        
        {/* Image Section: Properly Positioned */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="relative w-3/4 sm:w-2/3 md:w-3/5 scale-110">
            <Image
              src={HeroImage}
              alt="Ice Cream Cone"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Welcome to <br />
            <span className="text-pink-600">ICE CREAM SHOP</span>
          </h1>
          <p className="text-lg text-gray-600">
            Indulge in a world of delightful flavors and savor the creamy bliss of ice 
            cream made just for you. Every scoop is a perfect blend of freshness, sweetness, and joy.
          </p>

          {/* Buttons: Stack Vertically on Small Screens */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 justify-center md:justify-start">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md font-semibold text-lg">
              Order Now
            </button>
            <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100">
              More Flavors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
