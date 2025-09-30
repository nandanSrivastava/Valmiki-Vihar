import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

const PackageCard = ({ package: pkg, index = 0, featured = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use gallery array if available, otherwise fallback to single image
  const images =
    pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  };

  return (
    <motion.article
      className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative w-full h-48 overflow-hidden group">
        <img
          src={images[currentImageIndex]}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Carousel Navigation - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            >
              <ChevronRight size={16} />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{pkg.name}</h3>

        <div className="text-sm text-gray-500 flex items-center mb-2">
          <MapPin size={14} className="mr-2" />
          <span className="truncate">{pkg.destinations.join(", ")}</span>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          {pkg.inclusions.slice(0, 2).join(", ")}
          {pkg.inclusions.length > 2 ? "..." : ""}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-emerald-600 font-bold">{pkg.price}</div>
            {pkg.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                {pkg.originalPrice}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500 flex items-center">
              <Users size={14} className="mr-1" />
              Min 2
            </div>
            <Button size="sm" variant="primary" icon>
              Book
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PackageCard;
