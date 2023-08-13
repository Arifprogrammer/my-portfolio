import { useParams } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import ErrorPage from "../../Errorpage/Errorpage";

const Home = () => {
  const { sectionId } = useParams();
  useEffect(() => {
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      } else {
        return <ErrorPage />;
      }
    }
  }, [sectionId]);
  return (
    <>
      {/* ----------------- Banner start ----------------------- */}
      <Banner />
      {/* ----------------- Banner end ----------------------- */}
      {/* ----------------- About start ----------------------- */}
      <About />
      {/* ----------------- About end ----------------------- */}
      {/* ----------------- Projects start ----------------------- */}
      <ProjectsContainer />
      {/* ----------------- Projects end ----------------------- */}
      {/* ----------------- Contact start ----------------------- */}
      <Contact />
      {/* ----------------- Contact end ----------------------- */}
    </>
  );
};

export default Home;
