import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import angle from "../assets/angle.png";
import productsData from "../MasterData/TopSellingProduct";


export default function TopSelling() {
  const [sortBy, setSortBy] = useState("default");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 🌀 Filtering by category
  const filteredByCategory =
    category === "all"
      ? productsData
      : productsData.filter((p) => p.category === category);

  // 🔎 Filtering by search
  const filteredBySearch = filteredByCategory.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔄 Sorting
  const sortedProducts = [...filteredBySearch].sort((a, b) => {
    if (sortBy === "priceLowHigh") return a.price - b.price;
    if (sortBy === "priceHighLow") return b.price - a.price;
    if (sortBy === "nameAZ") return a.name.localeCompare(b.name);
    if (sortBy === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800"
        >
          Our Top Selling Iron & Steel Products
        </motion.h1>
        <p className="mt-4 text-gray-600">
          Explore our wide range of high-quality iron and steel products trusted
          by industries.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        >
          <option value="all">All Categories</option>
          <option value="Angles">MS Angles</option>
          <option value="Channels">MS Channels</option>
          <option value="Joists">MS Joists</option>
          <option value="Sheets">Sheets</option>
          <option value="Plates">Plates</option>
          <option value="TMT">TMT</option>
          <option value="Pipes">Pipes</option>
        </select>

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        >
          <option value="default">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="nameAZ">Name: A-Z</option>
          <option value="nameZA">Name: Z-A</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((p) => <ProductCard key={p.id} {...p} />)
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No products found matching your search.
          </p>
        )}
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
