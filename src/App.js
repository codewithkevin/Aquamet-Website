import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ForgotPassword from "./pages/reset/ForgotPassword";
import ConfirmPage from "./pages/reset/ConfirmPage";
import VerifiedPage from "./pages/reset/VerifiedPage";

const NavMenu = lazy(() => import("./pages/NavMenu"));
const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/AboutUs"));
const Products = lazy(() => import("./pages/Products"));
const Solution = lazy(() => import("./pages/Solution"));
const News = lazy(() => import("./pages/News"));
const Terms = lazy(() => import("./pages/Terms"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Footer = lazy(() => import("./components/Home/Footer"));

const App = () => {
  const { user } = useAuthContext();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [location]);

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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-code" element={<ConfirmPage />} />
          <Route path="/verify-message" element={<VerifiedPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
