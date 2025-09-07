import React from "react";
import Footer from "./Footer";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20">
        <Hero />
      </div>

      {/* Features Section */}
      <Features />

      {/* Top Selling Products Preview */}
      {/* <TopSellingPreview /> */}

      {/* Testimonials */}
      <Testimonials />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
