/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
const ProjectTwo = () => {
  const [details, setDetails] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-4 relative mb-12">
        {details && (
          <div className="absolute top-2/4 -right-44 hidden lg:block font-semibold">
            <Link
              className="text-primary hover:text-white transition duration-300 flex items-center gap-x-2"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="3000"
              data-aos-once="true"
              to="/projects/2"
            >
              View Full Details <HiArrowNarrowRight className="text-2xl" />
            </Link>
          </div>
        )}
        <div
          className="border-2 border-primary rounded-lg h-[30rem] overflow-hidden flex flex-col projects order-3"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="h-[26rem] overflow-hidden">
            <img
              src={"https://i.ibb.co/0Y3VgvK/kiddu-min.jpg"}
              alt=""
              className="project-img"
            />
          </div>
          <div className="grow flex flex-wrap items-center gap-x-2 justify-around bg-black text-primary font-semibold">
            <a
              href="https://kiddu-com.web.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Live
            </a>
            <a
              href="https://github.com/Arifprogrammer/kiddu.com-client"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Client Code
            </a>
            <a
              href="https://github.com/Arifprogrammer/kiddu.com-server-public"
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
              <Link>Details</Link>
            </button>
          </div>
        </div>
        {!details && (
          <>
            <div className="order-2"></div>
            <div className="order-1"></div>
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
            <Fade delay={500} duration={2500}>
              <div className="h-[27.2rem] overflow-hidden">
                <p className="mb-1 text-primary">
                  Kiddu.com (A Toy Marketplace for Kids)
                </p>
                <p>
                  The project's aim is to provide a platform where kids and
                  parents alike can discover and explore a wide range of toys,
                  creating a haven for play and imagination. We understand the
                  importance of toys in a child's development, as they foster
                  creativity, enhance cognitive skills, and encourage social
                  interaction. The project's mission is to curate a diverse
                  collection of toys from trusted brands, ensuring that every
                  product meets high-quality standards for safety and
                  durability. Whether it's educational toys that spark
                  curiosity, interactive games that promote teamwork, or cuddly
                  companions that offer comfort, our goal is to offer a
                  comprehensive selection that caters to the unique interests
                  and needs of children.
                </p>
              </div>
            </Fade>
          </div>
        )}
        {details && (
          <div
            className="border-2 border-primary rounded-lg h-[30rem] p-4 font-semibold text-center space-y-3 hidden lg:grid order-1"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="h-[27.2rem] overflow-hidden">
              <Fade delay={1000} duration={2500}>
                <p className="font-bold">Key Features:</p>
                <ul className="space-y-3 mt-4">
                  <li>
                    ✓ Used two user roles buyer and seller. Buyer and Seller are
                    controlled with a private route.
                  </li>
                  <li>
                    ✓ Seller can add their products, see all products, see their
                    own products, update their products and delete their
                    products. On the other hand buyers can just view toy details
                    from anywhere.
                  </li>
                  <li>
                    ✓ The website is responsive for mobile and larger devices
                    like laptops and desktops.
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectTwo;
