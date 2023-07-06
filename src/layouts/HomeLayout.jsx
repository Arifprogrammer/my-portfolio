import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../pages/shared/Footer/Footer";

const HomeLayout = () => {
  //* hooks
  const { pathname } = useLocation();

  //* effects
  useEffect(() => {
    const path = pathname.split("/");
    if (path.length > 2) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
