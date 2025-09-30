import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              It looks like you've wandered off the beaten path. The page you're
              looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </button>
          </motion.div>

          {/* Suggested Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">
              Or explore these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Destinations", href: "/#destinations" },
                { name: "Tour Packages", href: "/#packages" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
