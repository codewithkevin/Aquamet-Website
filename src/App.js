import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ForgotPassword from "./pages/reset/ForgotPassword";
import ConfirmPage from "./pages/reset/ConfirmPage";
import VerifiedPage from "./pages/reset/VerifiedPage";
import CustomToastContainer from "./components/Essentials/CustomToastContainer";
import LoadingScreen from "./components/Essentials/LoadingScreen";

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

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div>
      <NavMenu />
      <Suspense fallback={<LoadingScreen />}>
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

      <CustomToastContainer />
    </div>
  );
};

export default App;
