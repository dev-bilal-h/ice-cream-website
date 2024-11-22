import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-200 text-black py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Heading */}
        <h2 className="text-left text-2xl font-bold mb-8 font-serif">
          <span className="text-black">Cloudy</span>{" "}
          <span className="text-pink-500">Cones</span>
        </h2>

        {/* Top Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-pink-600 mb-3">Menu</h3>
            <ul>
              <li className="mb-2 hover:text-pink-600 cursor-pointer">Flavors</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Specials</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Custom Cones</li>
              <li className="hover:text-pink-600  cursor-pointer">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-600 mb-3">About Us</h3>
            <ul>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Our Story</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Locations</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Careers</li>
              <li className="hover:text-pink-600  cursor-pointer">Sustainability</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-600 mb-3">Customer Support</h3>
            <ul>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Contact Us</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">FAQs</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Order Tracking</li>
              <li className="hover:text-pink-600  cursor-pointer">Feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-600 mb-3">Offers & Deals</h3>
            <ul>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Seasonal Offers</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Membership</li>
              <li className="mb-2 hover:text-pink-600  cursor-pointer">Discounts</li>
              <li className="hover:text-pink-600  cursor-pointer">Partner Programs</li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Social Media Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          <p>
          &copy; {new Date().getFullYear()} Cloudy Cones All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
