import { motion } from "framer-motion";
import homeImage from "../assets/home.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigator = useNavigate();

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-7xl mx-auto px-6 pt-24">
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Premium Quality <span className="text-blue-600">Iron</span> for Every
          Need
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Durable, reliable, and affordable iron products trusted by industries
          worldwide.
        </p>
        <button
          onClick={() => navigator("/top-selling-product")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 cursor-pointer"
        >
          Explore Products
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src={homeImage}
        alt="Iron Product"
        className="w-64 sm:w-80 md:w-[400px] drop-shadow-xl rounded-xl mb-8 md:mb-0"
      />
    </section>
  );
}
