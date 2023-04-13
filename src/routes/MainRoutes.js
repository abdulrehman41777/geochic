import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import Footer from "../component/Layout/Footer";
// import Header from "../component/Layout/Header";
import HomePage from "../pages/HomePage";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopBtn from "../component/ScrollToTop";
import MagazinePage from "../pages/MagazinePage";
import TravelPage from "../pages/TravelPage";
import ContactPage from "../pages/ContactPage";


const MainRoutes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      {/* <Header /> */}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
      <ScrollToTopBtn />
    </Router>
  );
};

export default MainRoutes;
