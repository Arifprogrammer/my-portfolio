import { AiFillHome } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { AiFillProject } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-2 top-4 lg:left-16 lg:top-20 space-y-5 uppercase z-10">
        <div className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <AiFillHome />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            Home
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <TiInfoLarge />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            About
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <AiFillProject />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            Projects
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <RiContactsBook2Fill />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            Contact
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
