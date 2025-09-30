import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    // Main Attractions - Key VTR Images
    {
      id: 1,
      src: "/images/vtr images/Himalaya's view.jpg",
      alt: "Majestic Himalayan Views from Valmiki National Park",
      category: "Landscape",
    },
    {
      id: 2,
      src: "/images/vtr images/vtr sunset.jpg",
      alt: "Breathtaking Sunset Over Valmiki National Park",
      category: "Landscape",
    },
    {
      id: 3,
      src: "/images/vtr images/valmikinagar sunset.jpg",
      alt: "Beautiful Sunset at Valmikinagar",
      category: "Landscape",
    },
    {
      id: 4,
      src: "/images/vtr images/jungle safari.jpg",
      alt: "Exciting Jungle Safari Experience",
      category: "Safari",
    },
    {
      id: 5,
      src: "/images/vtr images/jungle animals.jpg",
      alt: "Wild Animals in Natural Habitat",
      category: "Wildlife",
    },
    {
      id: 6,
      src: "/images/vtr images/tiger.jpg",
      alt: "Royal Bengal Tiger in Valmiki National Park",
      category: "Wildlife",
    },
    {
      id: 7,
      src: "/images/vtr images/hiking.jpg",
      alt: "Hiking and Trekking Adventures",
      category: "Adventure",
    },

    // VTR Documentation & Information
    {
      id: 8,
      src: "/images/vtr images/png2pdf (1)_merged-02.jpg",
      alt: "Valmiki Tiger Reserve Information",
      category: "Information",
    },
    {
      id: 9,
      src: "/images/vtr images/png2pdf (1)_merged-03.jpg",
      alt: "Wildlife Conservation Guidelines",
      category: "Information",
    },
    {
      id: 10,
      src: "/images/vtr images/png2pdf (1)_merged-04.jpg",
      alt: "Safari Booking Information",
      category: "Information",
    },
    {
      id: 11,
      src: "/images/vtr images/png2pdf (1)_merged-05.jpg",
      alt: "Park Rules and Regulations",
      category: "Information",
    },
    {
      id: 12,
      src: "/images/vtr images/png2pdf (1)_merged-06.jpg",
      alt: "River Safari Details",
      category: "Information",
    },
    {
      id: 13,
      src: "/images/vtr images/png2pdf (1)_merged-08.jpg",
      alt: "Tourist Facilities Information",
      category: "Information",
    },
    {
      id: 14,
      src: "/images/vtr images/png2pdf (1)_merged-10.jpg",
      alt: "Wildlife Spotting Guide",
      category: "Information",
    },
    {
      id: 15,
      src: "/images/vtr images/png2pdf (1)_merged-11.jpg",
      alt: "Border Area Tourism Info",
      category: "Information",
    },
    {
      id: 16,
      src: "/images/vtr images/png2pdf (1)_merged-12.jpg",
      alt: "Cultural Heritage Sites",
      category: "Culture",
    },
    {
      id: 17,
      src: "/images/vtr images/png2pdf (1)_merged-13.jpg",
      alt: "Local Communities and Culture",
      category: "Culture",
    },
    {
      id: 18,
      src: "/images/vtr images/png2pdf (1)_merged-14.jpg",
      alt: "Traditional Practices",
      category: "Culture",
    },
    {
      id: 19,
      src: "/images/vtr images/png2pdf (1)_merged-15.jpg",
      alt: "Nature Conservation Efforts",
      category: "Nature",
    },
    {
      id: 20,
      src: "/images/vtr images/png2pdf (1)_merged-16.jpg",
      alt: "Hill Station Views",
      category: "Landscape",
    },
    {
      id: 21,
      src: "/images/vtr images/png2pdf (1)_merged-17.jpg",
      alt: "Archaeological Sites",
      category: "Culture",
    },
    {
      id: 22,
      src: "/images/vtr images/png2pdf (1)_merged-18.jpg",
      alt: "River Ecosystem",
      category: "Nature",
    },
    {
      id: 23,
      src: "/images/vtr images/png2pdf (1)_merged-19.jpg",
      alt: "Forest Biodiversity",
      category: "Nature",
    },
    {
      id: 24,
      src: "/images/vtr images/png2pdf (1)_merged-20.jpg",
      alt: "Cultural Heritage Monuments",
      category: "Culture",
    },
    {
      id: 25,
      src: "/images/vtr images/png2pdf (1)_merged-21.jpg",
      alt: "Traditional Architecture",
      category: "Culture",
    },
    {
      id: 26,
      src: "/images/vtr images/png2pdf (1)_merged-22.jpg",
      alt: "Local Festivals and Events",
      category: "Culture",
    },
    {
      id: 27,
      src: "/images/vtr images/png2pdf (1)_merged-23.jpg",
      alt: "Handicrafts and Local Art",
      category: "Culture",
    },
    {
      id: 28,
      src: "/images/vtr images/png2pdf (1)_merged-24.jpg",
      alt: "Mountain Trekking Routes",
      category: "Adventure",
    },
    {
      id: 29,
      src: "/images/vtr images/png2pdf (1)_merged-25.jpg",
      alt: "Wildlife Photography Tips",
      category: "Safari",
    },
    {
      id: 30,
      src: "/images/vtr images/png2pdf (1)_merged-26.jpg",
      alt: "Bird Watching Opportunities",
      category: "Wildlife",
    },

    // Additional VTR Information and Experiences
    {
      id: 31,
      src: "/images/vtr images/png2pdf (1)_merged-27.jpg",
      alt: "Eco-Tourism Initiatives",
      category: "Nature",
    },
    {
      id: 32,
      src: "/images/vtr images/png2pdf (1)_merged-28.jpg",
      alt: "Community Tourism Programs",
      category: "Culture",
    },
    {
      id: 33,
      src: "/images/vtr images/png2pdf (1)_merged-29.jpg",
      alt: "Accommodation Options",
      category: "Information",
    },
    {
      id: 34,
      src: "/images/vtr images/png2pdf (1)_merged-30.jpg",
      alt: "Transportation and Access",
      category: "Information",
    },
    {
      id: 35,
      src: "/images/vtr images/png2pdf (1)_merged-31.jpg",
      alt: "Seasonal Wildlife Patterns",
      category: "Wildlife",
    },
    {
      id: 36,
      src: "/images/vtr images/png2pdf (1)_merged-32.jpg",
      alt: "Border Tourism Development",
      category: "Information",
    },
    {
      id: 37,
      src: "/images/vtr images/png2pdf (1)_merged-33.jpg",
      alt: "Local Cuisine and Food",
      category: "Culture",
    },
    {
      id: 38,
      src: "/images/vtr images/png2pdf (1)_merged-34.jpg",
      alt: "Forest Research Activities",
      category: "Nature",
    },
    {
      id: 39,
      src: "/images/vtr images/png2pdf (1)_merged-35.jpg",
      alt: "Riverside Activities",
      category: "Adventure",
    },
    {
      id: 40,
      src: "/images/vtr images/png2pdf (1)_merged-36.jpg",
      alt: "Conservation Success Stories",
      category: "Nature",
    },
  ];

  const categories = ["All", ...new Set(images.map((img) => img.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Show 12 images per page

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // Reset to first page when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Photo
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              {" "}
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the breathtaking beauty of Valmiki National Park
            through our curated collection of photographs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(image, startIndex + index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">{image.alt}</p>
                <span className="text-xs bg-emerald-600 px-2 py-1 rounded-full mt-1 inline-block">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center mt-12 gap-2"
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;

                // Show first page, last page, current page, and pages around current
                const showPage =
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  Math.abs(pageNumber - currentPage) <= 1;

                if (!showPage) {
                  // Show ellipsis for gaps
                  if (pageNumber === 2 && currentPage > 4) {
                    return (
                      <span
                        key={pageNumber}
                        className="px-3 py-2 text-gray-400"
                      >
                        ...
                      </span>
                    );
                  }
                  if (
                    pageNumber === totalPages - 1 &&
                    currentPage < totalPages - 3
                  ) {
                    return (
                      <span
                        key={pageNumber}
                        className="px-3 py-2 text-gray-400"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Gallery Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 text-gray-600"
        >
          <p>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredImages.length)}{" "}
            of {filteredImages.length} images
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
                  <h3 className="font-medium">{selectedImage.alt}</h3>
                  <span className="text-sm text-emerald-300">
                    {selectedImage.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
