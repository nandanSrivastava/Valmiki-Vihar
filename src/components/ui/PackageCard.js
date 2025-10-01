import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Button from "./Button";

const PackageCard = ({ package: pkg, index = 0, featured = false }) => {
  // Render a single image per package card. Prefer explicit pkg.image,
  // otherwise fall back to the first item in pkg.gallery if present.
  const image = pkg.image || (pkg.gallery && pkg.gallery[0]) || "";

  const handleBookClick = () => {
    try {
      const whatsappNumber = "917004734909"; // without +

      const pricing = pkg.perPerson
        ? "Per person"
        : pkg.groupSize
        ? `Group: ${pkg.groupSize}`
        : "";

      const messagePlain = `Hi,\n\nI am interested in the following package:\n\nPackage: ${
        pkg.name
      }\nPrice: ${pkg.price}${
        pkg.originalPrice ? ` (Original: ${pkg.originalPrice})` : ""
      }\nDuration: ${pkg.duration}\nDestinations: ${
        Array.isArray(pkg.destinations)
          ? pkg.destinations.join(", ")
          : pkg.destinations
      }\n${
        pricing ? `Pricing: ${pricing}\n` : ""
      }\nPlease get in touch with me to proceed.\n\nThank you.`;

      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        messagePlain
      )}`;
      window.open(waUrl, "_blank");
    } catch (err) {
      // fallback: open generic wa.me with package name only
      const whatsappNumber = "917004734909";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Interested in package: " + pkg.name
      )}`;
      window.open(waUrl, "_blank");
    }
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
          src={image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
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
            {/* Render per-person or group size information if provided */}
            {pkg.perPerson && (
              <div className="text-xs text-emerald-600 font-medium">
                Per person
              </div>
            )}
            {pkg.groupSize && (
              <div className="text-xs text-emerald-600 font-medium">
                Group: {pkg.groupSize}
              </div>
            )}

            <Button size="sm" variant="primary" icon onClick={handleBookClick}>
              Book
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PackageCard;
