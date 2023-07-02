import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    </>
  );
};

export default HomeLayout;
