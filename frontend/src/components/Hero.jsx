import { motion } from "framer-motion";
import homeImage from "../assets/home.png";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigator = useNavigate();
  return (
    <section className="h-screen flex items-center justify-between max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Premium Quality <span className="text-blue-600">Iron</span> for Every
          Need
        </h2>
        <p className="mt-4 text-lg text-gray-600">
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

      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src={homeImage}
        alt="Iron Product"
        className="w-[400px] drop-shadow-xl rounded-xl "
      />
    </section>
  );
}
