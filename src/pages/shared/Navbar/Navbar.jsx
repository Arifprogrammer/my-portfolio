import { AiFillHome } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { AiFillProject } from "react-icons/ai";
import { MdDownloadForOffline } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PdfFile from "../../../assets/Arif_React_Resume.pdf";
import ToggleTheme from "../../../components/ToggleTheme";

const Navbar = () => {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = PdfFile;
    link.download = "Arif_React_Resume.pdf";
    link.click();
  };

  return (
    <>
      <nav className="fixed left-2 top-4 lg:left-16 lg:top-20 space-y-5 uppercase z-10">
        <Link to="/home" className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <AiFillHome />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            Home
          </p>
        </Link>
        <Link to="/about" className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <TiInfoLarge />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            About
          </p>
        </Link>
        <Link className="flex gap-x-4 items-center" to="projects">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <AiFillProject />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            Projects
          </p>
        </Link>
        <Link className="flex gap-x-4 items-center">
          <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
            <RiContactsBook2Fill />
          </button>
          <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
            Contact
          </p>
        </Link>
        <div className="lg:pt-20">
          <Link
            className="flex gap-x-4 items-center"
            to="#"
            onClick={downloadPdf}
          >
            <button className="bg-primary p-2 rounded-full text-accent lg:text-2xl lg:hover:bg-white lg:hover:transition lg:duration-300">
              <MdDownloadForOffline />
            </button>
            <p className="text-primary lg:text-lg font-semibold cursor-pointer lg:hover:text-white lg:hover:transition lg:duration-300">
              Resume
            </p>
          </Link>
        </div>
        <ToggleTheme />
      </nav>
    </>
  );
};

export default Navbar;
