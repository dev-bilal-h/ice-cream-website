import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id="contact" className="bg-pink-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center">Contact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact K Form */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-pink-500 mb-6">Get in Touch                        </h3>
                        <form action="#" method="POST" className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" name="name" required 
                                    className="bg-pink-100 border border-pink-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none" 
                                    placeholder="Enter your name" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" name="email" required 
                                    className="bg-pink-100 border border-pink-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none" 
                                    placeholder="Enter your email" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows={4} required 
                                    className="bg-pink-100 border border-pink-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none" 
                                    placeholder="Write your message"></textarea>
                            </div>
                            <button type="submit" className="bg-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-pink-400 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact K Info. */}
                    <div className="bg-pink-100 shadow-lg rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-pink-600 mb-6">Contact Info</h3>
                        <p className="text-gray-700 mb-6">Feel free to reach out with any questions or to share your favorite ice cream moments!</p>
                        <ul>
                            <li className="mb-4">
                                <span className="font-bold text-pink-500">Address:</span>
                                <p className="text-gray-700">123 Sweet Lane, Dessert Town, 12345</p>
                            </li>
                            <li className="mb-4">
                                <span className="font-bold text-pink-500">Phone:</span>
                                <p className="text-gray-700">+123 456 789</p>
                            </li>
                            <li className="mb-4">
                                <span className="font-bold text-pink-500">Email:</span>
                                <p className="text-gray-700">hello@icecreamdelight.com</p>
                            </li>
                        </ul>

                        {/* Social Media K Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-bold text-pink-600 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-pink-500 hover:text-pink-400">
                                    <FaFacebook size={28} />
                                </a>
                                <a href="#" className="text-pink-500 hover:text-pink-400">
                                    <FaInstagram size={28} />
                                </a>
                                <a href="#" className="text-pink-500 hover:text-pink-400">
                                    <FaTwitter size={28} />
                                </a>
                                <a href="#" className="text-pink-500 hover:text-pink-400">
                                    <FaYoutube size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
