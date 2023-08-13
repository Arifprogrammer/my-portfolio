/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Projects = ({ project }) => {
  const [details, setDetails] = useState(false);
  const [direction, setDirection] = useState(false);
  const {
    id,
    image,
    name,
    about,
    features,
    credentials,
    live,
    client,
    server,
  } = project;
  useEffect(() => {
    if (id % 2 === 0) {
      setDirection(true);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4 relative mb-12 lg:mb-20">
        {details && (
          <div className="absolute top-2/4 -right-44 hidden lg:block font-semibold">
            <Link
              className="text-primary hover:text-white transition duration-300 flex items-center gap-x-2"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="3000"
              data-aos-once="true"
              to={`/projects/${id}`}
            >
              View Full Details <HiArrowNarrowRight className="text-2xl" />
            </Link>
          </div>
        )}
        <div
          className={`border-2 border-primary rounded-lg h-[30rem] overflow-hidden flex flex-col projects-middle ${
            direction ? "order-3" : "order-1"
          }`}
          data-aos={direction ? "fade-left" : "fade-right"}
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="h-[26rem] overflow-hidden">
            <img src={image} alt="" className="project-img" />
          </div>
          <div className="grow flex flex-wrap items-center gap-x-2 justify-around bg-black text-primary font-semibold px-2 lg:px-0">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Live
            </a>
            <a
              href={client}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Client Code
            </a>
            <a
              href={server}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Server Code
            </a>
            {/* ------------lg:show------------------ */}
            <button
              className="hover:text-white transition duration-300 hidden lg:flex"
              onClick={() => setDetails(true)}
            >
              Details
            </button>
            {/* ------------lg:hidden------------------ */}
            <button className="hover:text-white transition duration-300 lg:hidden">
              <Link to={`/projects/${id}`}>Details</Link>
            </button>
          </div>
        </div>
        {!details && (
          <>
            <div className="order-2"></div>
            <div className={direction ? "order-1" : "order-3"}></div>
          </>
        )}
        {details && (
          <div
            className="border-2 border-primary rounded-lg h-[30rem] p-4 font-semibold text-center hidden lg:grid order-2"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Fade delay={500} duration={2500} triggerOnce={true}>
              <div className="h-[27.2rem] overflow-hidden">
                <p className="mb-1 text-primary">{name}</p>
                <p>{about}</p>
                {credentials && (
                  <div className="mt-4 text-[#cadaeb] font-semibold">
                    <p className="text-xl font-semibold pb-2">Credentials:</p>
                    {project.credentials?.map((c, i) => (
                      <p key={i} className="text-sm">
                        {c}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </Fade>
          </div>
        )}
        {details && (
          <div
            className={`border-2 border-primary rounded-lg h-[30rem] p-4 font-semibold text-center space-y-3 hidden lg:grid ${
              direction ? "order-1" : "order-3"
            }`}
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="h-[27.2rem] overflow-hidden">
              <Fade delay={1000} duration={2000} triggerOnce={true}>
                <p className="font-bold">Key Features:</p>
                <ul className="space-y-3 mt-4">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Fade>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
