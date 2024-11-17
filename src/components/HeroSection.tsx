import React from 'react';
import HeroImage from "@/assets/HeroImage.png";
import MilkHero from "@/assets/MilkHero.png";
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-6 md:space-y-0">
        
        {/* Left Section: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Welcome to <br />
            <span className="text-pink-600">ICE CREAM SHOP</span>
          </h1>
          <p className="text-lg text-gray-600">
          Indulge in a world of delightful flavors and savor the creamy bliss of ice 
          cream made just for you. Every scoop is a perfect blend of freshness, sweetness, and joy.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md font-semibold text-lg">
              Order Now
            </button>
            <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100">
              More Flavors
            </button>
          </div>
        </div>

        {/* Right Section: Images */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          {/* Milk Image in the background */}
          <div className="absolute w-[130%] md:w-[110%] -top-32 -right-24">
            <Image
              src={MilkHero}
              alt="Milk Splash"
              className="object-contain"
              priority
            />
          </div>
          {/* Ice Cream Image */}
          <div className="relative z-10 w-3/4 sm:w-2/3 md:w-3/5 translate-x-32 scale-125 ">
            <Image
              src={HeroImage}
              alt="Ice Cream Cone"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
