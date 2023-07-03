import About from "../About/About";
import Banner from "../Banner/Banner";
import ProjectsContainer from "../Projects/ProjectsContainer";

const Home = () => {
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
