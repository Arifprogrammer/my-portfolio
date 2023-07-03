import { useParams } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ProjectsContainer from "../Projects/ProjectsContainer";
import { useEffect } from "react";

const Home = () => {
  const { sectionId } = useParams();
  useEffect(() => {
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
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
    </>
  );
};

export default Home;
