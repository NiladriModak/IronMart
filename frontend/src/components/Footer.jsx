export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">IronMart</h2>
        <p>© {new Date().getFullYear()} IronMart. All rights reserved.</p>
      </div>
    </footer>
  );
}
