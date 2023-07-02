import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";

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
      <Projects />
      {/* ----------------- Projects end ----------------------- */}
    </>
  );
};

export default Home;
