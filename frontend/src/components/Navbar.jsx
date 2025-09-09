import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import logo from "../assets/image.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl flex gap-2 justify-center items-center  font-bold text-gray-800">
          <img className="w-16" src={logo} alt="Logo" />
          <h1>Shiv Enterprise</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            Home
          </Link>
          <Link
            to="/top-selling-product"
            className="hover:text-blue-600 cursor-pointer"
          >
            Top Selling
          </Link>
          <Link to="/about" className="hover:text-blue-600 cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer">
            Contact
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"
        >
          <Link
            to="/"
            className="block text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/top-selling-product"
            className="block text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Top Selling
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
