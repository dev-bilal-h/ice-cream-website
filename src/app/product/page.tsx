import React from "react";
import Image from "next/image";
import iceOne from "@/assets/iceOne.png";
import iceTwo from "@/assets/iceTwo.png";
import iceThree from "@/assets/iceThree.png";
import iceFour from "@/assets/iceFour.png";
import iceFive from "@/assets/iceFive.png";
import iceSix from "@/assets/iceSix.png";
import iceSeven from "@/assets/iceSeven.png";
import iceEight from "@/assets/iceEight.png";

const ProductCard = () => {
  const classicProducts = [
    {
      id: 1,
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie.",
      price: "$5.49",
      image: iceOne,
    },
    {
      id: 2,
      name: "Strawberry Shortcake",
      description: "Strawberry ice cream layered with shortcake.",
      price: "$5.29",
      image: iceTwo,
    },
    {
      id: 3,
      name: "Mint Chocolate Chip Cone",
      description: "Refreshing mint ice cream with chocolate chips.",
      price: "$3.99",
      image: iceThree,
    },
    {
      id: 4,
      name: "Classic Vanilla Ice Cream",
      description: "Creamy vanilla ice cream topped with cherry.",
      price: "$4.99",
      image: iceFour,
    },
  ];

  const bestSellers = [
    {
      id: 5,
      name: "Chocolate Chip Cookie Cone",
      description: "Chocolate chip cookie dough ice cream in a cone.",
      price: "$5.79",
      image: iceFive,
    },
    {
      id: 6,
      name: "Rocky Road Sundae",
      description: "Marshmallow and nutty rocky road ice cream",
      price: "$5.99",
      image: iceSix,
    },
    {
      id: 7,
      name: "Peach Melba Sundae",
      description: "Peach ice cream topped with raspberry sauce",
      price: "$4.89",
      image: iceSeven,
    },
    {
      id: 8,
      name: "Strawberry Sundae",
      description: "Strawberry ice cream with fresh strawberries",
      price: "$6.49",
      image: iceEight,
    },
  ];

  return (
    <div className="py-10 px-4 text-center bg-gray-50">
      {/* Header Section */}
      <h1 className="text-3xl font-bold">
        Our <span className="text-pink-500">Classic</span> Favorites
      </h1>
      <p className="text-gray-600 mt-2">Check out our top products that our customers love.</p>

      {/* Classic Favorites Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {classicProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            {/* Product Image */}
            <div className="relative w-64 h-64 bg-pink-100 rounded-lg mx-auto mt-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <p className="text-pink-500 font-bold text-xl mt-3">{product.price}</p>

              {/* Add to Cart Button */}
              <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-10"></div>

      {/* Best Sellers Section */}
      <h1 className="text-3xl font-bold">
        Our <span className="text-pink-500">Best</span> Seller
      </h1>
      <p className="text-gray-600 mt-2">Discover the favorites that keep our customers coming back for more.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            {/* Product Image */}
            <div className="relative w-64 h-64 bg-red-100 rounded-lg mx-auto mt-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <p className="text-pink-500 font-bold text-xl mt-3">{product.price}</p>

              {/* Add to Cart Button */}
              <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
