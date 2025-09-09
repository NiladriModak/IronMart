import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 min-h-screen py-16 mt-20 px-4 sm:px-8 lg:px-16">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-blue-600">Shiv Dev Enterprise</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Building trust and strengthening infrastructure for generations.
          </p>
        </motion.div>

        {/* Company Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
        >
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            Shiv Dev Enterprise, founded in{" "}
            <span className="font-semibold">2023</span>, may seem like a young
            corporation. That’s true—I am pretty young to be here. But as a{" "}
            <span className="font-semibold">family business</span>, we have been
            strengthening infrastructure for more than{" "}
            <span className="font-semibold">5 decades</span>.
          </p>
        </motion.div>

        {/* What We Do */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
              What We Do
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
              Primarily, we are <span className="font-semibold">traders</span>{" "}
              of iron and steel products including:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg space-y-2">
              <li>Angles, Channels, Joist, Beams</li>
              <li>TMT, Plate, Sheet, Hollow Section</li>
              <li>GI Items</li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg">
              Apart from trading, we also provide{" "}
              <span className="font-semibold">fabrication services</span>.
            </p>
          </motion.div>

          {/* Brands We Trade In */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
              Brands We Trade In
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg space-y-2">
              <li>Tata Steel</li>
              <li>SAIL</li>
              <li>NEZON</li>
              <li>Shyam Sel</li>
              <li>Gagan Gold</li>
              <li>Hoogly Alloy And Steel Co. (HASCO)</li>
              <li>Manbhum Ispat</li>
              <li>RINL</li>
            </ul>
          </motion.div>
        </div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 bg-blue-50 p-6 sm:p-10 rounded-2xl shadow-md text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="font-semibold">Fast dispatch</span>, a{" "}
            <span className="font-semibold">wide inventory</span>, and{" "}
            <span className="font-semibold">personal involvement</span> in every
            transaction ensure that our clients always get the best experience.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
