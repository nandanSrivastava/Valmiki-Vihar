import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import Button from "../ui/Button";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Background Image (Valmiki Tiger Reserve) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media2.thrillophilia.com/images/photos/000/373/536/original/1622526611_shutterstock_1594833985.jpg?w=753&h=450&dpr=1.0"
          alt="Valmiki Tiger Reserve"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, -100, 900],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Explore
            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Valmiki Tiger Reserve
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Embark on an extraordinary journey through the tiger-inhabited
            forests of Valmiki Tiger Reserve. Experience wildlife safaris,
            birding, riverside adventures, and authentic cultural encounters.
          </motion.p>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-2 sm:space-x-6"
        >
          <Button
            size="lg"
            icon
            className="text-lg px-12 py-6 sm:px-16 sm:py-6 md:px-20 md:py-8"
          >
            Explore Destinations
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20"
        >
          {[
            { number: "5000+", label: "Happy Travelers" },
            { number: "15+", label: "Destinations" },
            { number: "10+", label: "Years Experience" },
            { number: "99%", label: "Customer Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-200">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToSection}
          className="text-white hover:text-emerald-400 transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
