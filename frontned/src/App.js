import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LijekDetalji from "./pages/LijekDetalji";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path="/lijek/:id" element={<LijekDetalji />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
