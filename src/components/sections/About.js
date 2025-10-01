import { motion } from "framer-motion";
import { Award, Users, Leaf, Heart } from "lucide-react";
import { VTR_IMAGES } from "../../config/images";
import { ABOUT_FEATURES } from "../../config/constants";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "10+ Years Experience",
      description:
        "Over a decade of expertise in showcasing Bihar's natural and cultural treasures.",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Expert Local Guides",
      description:
        "Our passionate guides bring stories and landscapes to life with their deep local knowledge.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Eco-Friendly Tourism",
      description:
        "Committed to sustainable practices that preserve nature for future generations.",
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Community Support",
      description:
        "Supporting local communities through responsible tourism and cultural preservation.",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                Valmiki Vihar
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Born from a passion for Bihar's untold natural beauty, Valmiki
              Vihar has been the premier gateway to discovering the pristine
              wilderness and rich cultural heritage of West Champaran for over a
              decade.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that travel should be transformative - not just for our
              guests, but for the communities and ecosystems we visit. Every
              journey with us contributes to conservation efforts and local
              community development.
            </p>

            <div className="space-y-4">
              {ABOUT_FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={VTR_IMAGES.tiger || "/images/vtr images/tiger.jpg"}
                alt="Valmiki National Park Wildlife"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 left-4 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-4 right-4 bg-emerald-600 text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-emerald-100">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            To showcase the incredible biodiversity and cultural richness of
            Bihar while promoting sustainable tourism that benefits local
            communities and preserves our natural heritage for generations to
            come.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
