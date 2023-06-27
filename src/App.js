import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import NavMenu from "./pages/NavMenu";
import Footer from "./components/Home/Footer";
const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/AboutUs"));
const Products = lazy(() => import("./pages/Products"));
const Solution = lazy(() => import("./pages/Solution"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

const App = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <NavMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
