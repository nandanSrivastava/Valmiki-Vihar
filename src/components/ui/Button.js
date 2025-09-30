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
    "inline-flex items-center justify-center gap-3 select-none rounded-full font-medium transition transform duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-md hover:shadow-lg focus-visible:ring-emerald-400",
    secondary:
      "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 shadow-sm focus-visible:ring-emerald-300",
    outline:
      "bg-transparent text-white border border-white hover:bg-white/10 focus-visible:ring-white",
    ghost:
      "bg-transparent text-emerald-600 hover:bg-emerald-50 focus-visible:ring-emerald-300",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm md:text-base",
    lg: "w-full md:w-auto px-8 md:px-10 py-3 text-lg",
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || ""} ${
    sizes[size] || ""
  } ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      className={combinedClasses}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight
          className={children ? "ml-1" : ""}
          size={children ? 18 : 20}
          aria-hidden="true"
        />
      )}
    </motion.button>
  );
};

export default Button;
