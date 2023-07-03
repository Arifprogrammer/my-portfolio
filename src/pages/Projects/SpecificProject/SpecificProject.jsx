import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      const specificData = data.find((project) => project.id == id);
      setProject(specificData);
    };
    loadData();
  }, []);
  return (
    <>
      <section className="min-h-screen flex justify-center items-center pt-20 pb-8 lg:pb-0 px-4 lg:px-0">
        {project && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-y-6 lg:gap-y-0 lg:gap-x-8">
            <div>
              <img
                src={project.image}
                alt=""
                className="rounded-2xl shadow-lg shadow-primary"
              />
            </div>
            <div className="divide-y-4 space-y-4">
              <p className="text-2xl text-primary font-bold">{project.name}</p>
              <p className="pt-4">{project.about}</p>

              {project?.credentials && (
                <div className="pt-4 text-neutral font-semibold">
                  {project.credentials?.map((c, i) => (
                    <p key={i}>{c}</p>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <p className="text-xl font-semibold pb-2">Key Features:</p>
                {project?.features?.map((f, i) => (
                  <p key={i}>{f}</p>
                ))}
              </div>
              <div className="pt-2 flex gap-x-4 text-primary font-semibold">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  Live
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  Client Code
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  Server Code
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SpecificProject;
