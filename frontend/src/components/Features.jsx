import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Truck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Durable & Rust Resistant",
    desc: "Built to last with premium quality material.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    desc: "Get the best deals without compromising quality.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "We ensure safe and timely delivery across regions.",
  },
];

export default function Features() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Iron?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >
            <f.icon className="w-12 h-12 mx-auto text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
