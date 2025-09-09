import { motion } from "framer-motion";
import testimonials from "../MasterData/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <p className="text-gray-700 italic text-sm sm:text-base md:text-lg">
              “{t.text}”
            </p>
            <h4 className="mt-4 font-semibold text-blue-600 text-sm sm:text-base md:text-lg">
              {t.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
