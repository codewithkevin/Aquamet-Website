import NavMenu from "./pages/NavMenu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
