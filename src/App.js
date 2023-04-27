import NavMenu from "./pages/NavMenu";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
