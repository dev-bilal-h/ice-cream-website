import Image from 'next/image';
import AboutIceImg from "@/assets/AboutIceImg.png";

export default function About() {
  return (
    <section className="bg-gray-50  py-16 px-8 md:px-20 lg:px-40 flex flex-col md:flex-row items-center ">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={AboutIceImg}
          alt="Ice cream"
          width={500} 
          height={500} 
          className="rounded-lg "
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
        <h2 className="text-3xl font-bold mb-4 text-pink-500">About Us</h2>
        <p className="leading-relaxed mb-4">
          At The Ice Cream Shop, we believe in the joy of indulging in the finest ice cream. Each scoop is crafted with love and care, using the best ingredients to create rich, creamy flavors that will delight your taste buds. Our mission is to bring smiles to every customer with our wide variety of unique and classic ice cream flavors.
        </p>
        <p className="leading-relaxed">
          With over 20 years of experience, we continue to innovate, offering both traditional and exciting new flavors that create unforgettable experiences for every ice cream lover.
        </p>
      </div>
    </section>
  );
}
