import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold">
          Get Premium Iron Delivered To Your Doorstep
        </h2>
        <p className="mt-4 text-lg">
          Trusted by thousands of businesses nationwide
        </p>
      </motion.div>
    </section>
  );
}
