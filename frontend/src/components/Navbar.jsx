import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">IronMart</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            Home
          </Link>
          <Link
            to={"/top-selling-product"}
            className="hover:text-blue-600 cursor-pointer"
          >
            Top Selling
          </Link>

          <Link to={"/contact"} className="hover:text-blue-600 cursor-pointer">
            Contact
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
}
