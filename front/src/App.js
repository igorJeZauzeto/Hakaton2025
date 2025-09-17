import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LijekDetalji from "./pages/LijekDetalji";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lijek/:id" element={<LijekDetalji />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;


//koriscenje api=ja OpenFDA
// import React from 'react';
// import './App.css'; // ili putanja do vašeg CSS fajla
// import DrugSearch from './components/DrugSearch';

// function App() {
//   return (
//     <div className="App">
//       <DrugSearch />
//     </div>
//   );
// }

// export default App;