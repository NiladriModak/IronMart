import logo from "../assets/image.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h2 className="text-xl flex gap-2 justify-center items-center font-bold text-white">
          <img className="w-16" src={logo} alt="Logo" />
          <h1>Shiv Enterprise</h1>
        </h2>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
