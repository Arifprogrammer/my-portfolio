import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";

const ProjectsContainer = () => {
  return (
    <>
      <section
        className="my-16 lg:my-20 px-4 lg:px-0 pt-10 overflow-x-hidden lg:overflow-x-visible"
        id="projects"
      >
        <h1 className="text-3xl text-center font-bold text-primary uppercase mb-20">
          Best Projects
        </h1>
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </section>
    </>
  );
};

export default ProjectsContainer;
