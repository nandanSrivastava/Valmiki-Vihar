import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "md", color = "emerald" }) => {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colors = {
    emerald: "border-emerald-600",
    green: "border-green-600",
    white: "border-white",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} border-4 border-gray-200 ${colors[color]} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 rounded-2xl mx-auto w-fit mb-4">
            <div className="text-white font-bold text-3xl">VV</div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Valmiki Vihar
          </h1>
        </motion.div>

        <LoadingSpinner size="lg" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 mt-4"
        >
          Preparing your adventure...
        </motion.p>
      </div>
    </div>
  );
};

export { LoadingSpinner };
export default LoadingPage;
