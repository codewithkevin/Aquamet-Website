import NavMenu from "./pages/NavMenu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Home/Footer";
import Products from "./pages/Products";
import Solution from "./pages/Solution";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Aboutus from "./pages/AboutUs";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
