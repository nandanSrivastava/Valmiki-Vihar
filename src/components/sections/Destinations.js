import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { destinations } from "../../data/destinations";
import Button from "../ui/Button";
import { CAROUSEL_SETTINGS, SECTION_VARIANTS } from "../../config/constants";

const Destinations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="destinations" className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mt-6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-8 md:pt-12 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Amazing{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
            From pristine wilderness to cultural heritage sites, discover the
            hidden gems of Bihar that offer unforgettable experiences for every
            type of traveler.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Carousel items={destinations} />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

const Carousel = ({
  items = [],
  autoPlay = CAROUSEL_SETTINGS.autoPlay,
  interval = CAROUSEL_SETTINGS.carouselInterval,
}) => {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const timerRef = useRef(null);
  const imageTimerRef = useRef(null);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, items.length]);

  // Auto-cycle through images within each destination
  useEffect(() => {
    if (
      !items[index] ||
      !items[index].gallery ||
      items[index].gallery.length <= 1
    )
      return;
    imageTimerRef.current = setInterval(() => {
      setImageIndex((i) => (i + 1) % items[index].gallery.length);
    }, CAROUSEL_SETTINGS.imageSwitchInterval); // Change image every configured ms
    return () => clearInterval(imageTimerRef.current);
  }, [index, items]);

  const prev = () => {
    clearInterval(timerRef.current);
    clearInterval(imageTimerRef.current);
    setIndex((i) => (i - 1 + items.length) % items.length);
    setImageIndex(0); // Reset to first image of new destination
  };

  const next = () => {
    clearInterval(timerRef.current);
    clearInterval(imageTimerRef.current);
    setIndex((i) => (i + 1) % items.length);
    setImageIndex(0); // Reset to first image of new destination
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full">
      <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
        <div className="w-full max-w-full h-64 md:h-96 bg-gray-200 overflow-hidden relative">
          {(() => {
            const currentDestination = items[index];
            const displayImages =
              currentDestination.gallery &&
              currentDestination.gallery.length > 0
                ? currentDestination.gallery
                : [
                    {
                      image: currentDestination.image,
                      title: currentDestination.name,
                      description: currentDestination.description,
                    },
                  ];
            const currentImageData =
              displayImages[imageIndex % displayImages.length];
            const currentImage = currentImageData.image || currentImageData;

            return (
              <>
                <img
                  src={currentImage}
                  alt={`${
                    currentImageData.title || currentDestination.name
                  } - Image ${imageIndex + 1}`}
                  className="w-full h-full object-cover block transition-opacity duration-500"
                />

                {/* Image counter for galleries */}
                {displayImages.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    {imageIndex + 1} / {displayImages.length}
                  </div>
                )}
              </>
            );
          })()}

          {/* bottom overlay for current image title */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
            <div className="bg-black/60 text-white px-4 py-2 rounded-full text-lg md:text-xl font-semibold pointer-events-auto">
              {(() => {
                const currentDestination = items[index];
                const displayImages =
                  currentDestination.gallery &&
                  currentDestination.gallery.length > 0
                    ? currentDestination.gallery
                    : [
                        {
                          image: currentDestination.image,
                          title: currentDestination.name,
                          description: currentDestination.description,
                        },
                      ];
                const currentImageData =
                  displayImages[imageIndex % displayImages.length];
                return currentImageData.title || currentDestination.name;
              })()}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 max-w-full">
          <p className="text-gray-700 text-center leading-relaxed mb-4 max-w-4xl mx-auto">
            {(() => {
              const currentDestination = items[index];
              const displayImages =
                currentDestination.gallery &&
                currentDestination.gallery.length > 0
                  ? currentDestination.gallery
                  : [
                      {
                        image: currentDestination.image,
                        title: currentDestination.name,
                        description: currentDestination.description,
                      },
                    ];
              const currentImageData =
                displayImages[imageIndex % displayImages.length];
              return (
                currentImageData.description || currentDestination.description
              );
            })()}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                aria-label="Previous"
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 flex items-center justify-center transition-transform active:scale-95"
              >
                ‹
              </button>

              <button
                aria-label="Next"
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 flex items-center justify-center transition-transform active:scale-95"
              >
                ›
              </button>
            </div>
          </div>

          {/* dots */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            {items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${it.name}`}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
