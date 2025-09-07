import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Verma",
    text: "Amazing quality! The iron rods we bought were top-notch.",
  },
  {
    name: "Ananya Sharma",
    text: "Fast delivery and great pricing. Highly recommended!",
  },
  {
    name: "Vikram Singh",
    text: "Durable and affordable – exactly what we needed.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-700 italic">“{t.text}”</p>
            <h4 className="mt-4 font-semibold text-blue-600">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
