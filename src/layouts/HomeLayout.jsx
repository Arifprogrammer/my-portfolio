import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const HomeLayout = () => {
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
