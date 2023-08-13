import { useEffect, useState } from "react";
import Projects from "./Projects";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      data.reverse();
      setProjects(data);
    };
    loadData();
  }, []);
  return (
    <>
      <section
        className="my-16 lg:my-20 px-4 md:px-8 lg:px-0 pt-10 overflow-x-hidden lg:overflow-x-visible my-container"
        id="projects"
      >
        <h1 className="text-3xl text-center font-bold text-primary uppercase mb-12 lg:mb-20">
          Best Projects
        </h1>
        {projects.map((project) => (
          <Projects key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default ProjectsContainer;
