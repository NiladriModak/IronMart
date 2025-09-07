import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopSelling from "./components/TopSelling";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-selling-product" element={<TopSelling />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
