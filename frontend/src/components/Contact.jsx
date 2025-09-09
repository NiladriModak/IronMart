import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

          {/* Embed Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/1-W6cl9Xq0ugiA4OVf4okARKLfvdcDFq3a_Q0mydCMgs/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-xl shadow-lg bg-white"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
