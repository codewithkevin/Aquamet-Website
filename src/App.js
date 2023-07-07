import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

import CustomToastContainer from "./components/Essentials/CustomToastContainer";
import LoadingScreen from "./components/Essentials/LoadingScreen";
import NavMenu from "./pages/NavMenu";

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Products = lazy(() => import("./pages/Products"));
const Solution = lazy(() => import("./pages/Solution"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgotPassword = lazy(() => import("./pages/reset/ForgotPassword"));
const ConfirmPage = lazy(() => import("./pages/reset/ConfirmPage"));
const VerifiedPage = lazy(() => import("./pages/reset/VerifiedPage"));
const Footer = lazy(() => import("./components/Home/Footer"));

const App = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [location]);

  useEffect(() => {
    AOS.init({
      // Global settings...
    });
  }, []);

  return (
    <div>
      <NavMenu />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
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
        <Footer />
      </Suspense>

      <CustomToastContainer />
    </div>
  );
};

export default App;
