
import { Routes, Route } from "react-router-dom";

import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
