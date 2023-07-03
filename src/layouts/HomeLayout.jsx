import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../pages/shared/Footer/Footer";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="lg:w-3/5 lg:mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
