import { motion } from "framer-motion";
import { packages } from "../../data/destinations";
import PackageCard from "../ui/PackageCard";
import Button from "../ui/Button";
import { PACKAGE_FEATURES, SECTION_VARIANTS } from "../../config/constants";

const Packages = () => {
  const containerVariants = SECTION_VARIANTS.packagesContainer;

  return (
    <section
      id="packages"
      className="relative pt-24 pb-20 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from a variety of thoughtfully designed packages to suit your
            interests and budget.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12"
        >
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              index={index}
              featured={index === 1} // Make middle package featured
            />
          ))}
        </motion.div>

        {/* Why Choose Our Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PACKAGE_FEATURES.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
