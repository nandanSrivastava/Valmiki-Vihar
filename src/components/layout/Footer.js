import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Tour Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const destinations = [
    "Valmiki National Park",
    "Gandak River Safari",
    "Someshwar Hills",
    "Bagaha Heritage",
    "Ramnagar Forest",
    "Bhikhna Thori Border",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new destinations, exclusive offers, and
              travel tips delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button className="bg-emerald-800 hover:bg-emerald-900 px-6 py-3 rounded-r-lg transition-colors duration-200">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-2 rounded-xl">
                  <div className="text-white font-bold text-xl">VV</div>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Valmiki Vihar</h3>
                  <p className="text-gray-400 text-sm">Travel & Tourism</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover the pristine wilderness and rich cultural heritage of
                Bihar with Valmiki Vihar. We create unforgettable experiences in
                nature's lap.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Popular Destinations
              </h3>
              <ul className="space-y-2">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <Link
                      href="#destinations"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {destination}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={16}
                    className="text-emerald-400 mt-1 flex-shrink-0"
                  />
                  <div className="text-gray-300 text-sm">
                    <p>Valmiki National Park Road,</p>
                    <p>West Champaran, Bihar - 845302</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-emerald-400" />
                  <span className="text-gray-300 text-sm">+91 70047 34909</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-emerald-400" />
                  <span className="text-gray-300 text-sm">
                    info@valmikivihar.com
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6">
                <h4 className="font-medium text-white mb-2">Business Hours</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Valmiki Vihar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
