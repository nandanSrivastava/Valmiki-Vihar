import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon = false,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg focus:ring-emerald-500 border-0",
    secondary:
      "bg-white hover:bg-gray-50 text-emerald-600 hover:text-emerald-700 border border-emerald-200 hover:border-emerald-300 shadow-sm focus:ring-emerald-500",
    outline:
      "bg-transparent hover:bg-white/10 text-white hover:text-white border-2 border-white hover:border-white shadow-sm focus:ring-white",
    ghost:
      "bg-transparent hover:bg-emerald-50 text-emerald-600 hover:text-emerald-700 border-0 focus:ring-emerald-500",
  };

  const sizes = {
    sm: "p-4 px-6 py-4 text-sm rounded gap-1.5",
    md: "p-4 px-8 py-4 text-base rounded gap-2",
    lg: "p-4 px-10 py-4 text-lg rounded gap-2.5",
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || ""} ${
    sizes[size] || ""
  } ${className}`;

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      <span className="flex items-center justify-center gap-inherit">
        {children}
        {icon && (
          <ArrowRight
            size={size === "sm" ? 14 : size === "lg" ? 18 : 16}
            className="flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </span>
    </motion.button>
  );
};

export default Button;
