import { motion } from "framer-motion";

export default function ProductCard({ name, price, img }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md min-h-56"
    >
      <img
        src={img}
        alt={name}
        className="rounded-xl h-64 w-11/12 object-cover"
      />
      <h3 className="mt-3 p-4  font-semibold text-lg text-gray-800">{name}</h3>

      {/* <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Buy Now
      </button> */}
    </motion.div>
  );
}
