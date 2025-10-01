import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../data/content";
import { TESTIMONIAL_STATS } from "../../config/constants";

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Travelers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read genuine reviews from our happy travelers who experienced the
            magic of Valmiki Vihar.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-emerald-200">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                &quot;{testimonial.comment}&quot;
              </p>

              {/* User Info (image removed as requested) */}
              <div className="flex flex-col">
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">
                  {testimonial.package}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {TESTIMONIAL_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-emerald-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied travelers and discover the beauty of
            Valmiki Vihar.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
          >
            Book Your Adventure Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
