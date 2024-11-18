import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-purple-500 text-white py-2 px-4 md:px-20 lg:px-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo & Description */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-black text-xl sm:text-2xl font-bold font-serif">
            Cloudy&nbsp;<span className="text-rose-400 text-xl sm:text-2xl font-bold font-serif">Cones</span>
          </h2>
          <p className="text-center md:text-left mt-2">
          Enjoy the finest ice cream with delightful flavors made just for you! Treat yourself to a scoop today.
          </p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t mt-6 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cloudy Cones All rights reserved.
        </p>
      </div>
    </footer>
  );
}
