import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ProjectOne = () => {
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
              to="/projects/1"
            >
              View Full Details <HiArrowNarrowRight className="text-2xl" />
            </Link>
          </div>
        )}
        <div
          className="border-2 border-primary rounded-lg h-[30rem] overflow-hidden flex flex-col projects"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="h-[26rem] overflow-hidden">
            <img
              src={"https://i.ibb.co/MCFQGfs/athlete-X-min.jpg"}
              alt=""
              className="project-img"
            />
          </div>
          <div className="grow flex flex-wrap items-center gap-x-2 justify-around bg-black text-primary font-semibold px-2 lg:px-0">
            <a
              href="https://athletex-com.web.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Live
            </a>
            <a
              href="https://github.com/Arifprogrammer/athelteX-client"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Client Code
            </a>
            <a
              href="https://github.com/Arifprogrammer/athelteX-server"
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
              <Link to="/projects/1">Details</Link>
            </button>
          </div>
        </div>
        {details && (
          <div
            className="border-2 border-primary rounded-lg h-[30rem] p-4 font-semibold text-center hidden lg:grid"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Fade delay={500} duration={2500}>
              <div className="h-[27.2rem] overflow-hidden">
                <p className="mb-1 text-primary">
                  AthelteX.com (A Course Enrollment Platform)
                </p>
                <p>
                  This project is designed to simplify the process of booking
                  athlete classes for students during their summer vacations. It
                  also allows instructors to effortlessly add and manage their
                  classes. The system includes a secure payment integration,
                  enabling students to conveniently pay for their chosen
                  classes. Additionally, an admin panel is available for
                  effective user and class management. Experience a streamlined
                  platform that connects athletes with their desired classes.
                </p>
                <p className="mt-6 text-neutral">
                  Credentials: <br /> Admin - khalu@gmail.com | Seco&1 <br />{" "}
                  Instructor - john@example.com | Seco&1 <br /> Student -
                  khali@gmail.com | Seco&1
                </p>
              </div>
            </Fade>
          </div>
        )}
        {details && (
          <div
            className="border-2 border-primary rounded-lg h-[30rem] p-4 font-semibold text-center space-y-3 hidden lg:grid"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="h-[27.2rem] overflow-hidden">
              <Fade delay={1000} duration={2500}>
                <p className="font-bold">Key Features:</p>
                <p>
                  <span className="font-bold text-neutral">
                    ✓ Student Dashboard:
                  </span>{" "}
                  Students have access to a personalized dashboard where they
                  can browse and book athlete classes for their summer
                  vacations. They can also view their enrolled classes and
                  payment history, providing a comprehensive overview of their
                  athletic journey.
                </p>
                <p>
                  <span className="font-bold text-neutral">
                    ✓ Instructor Management:
                  </span>{" "}
                  Instructors have dedicated tools to add and manage their
                  classes. They can create detailed class listings, including
                  class descriptions, schedules, and requirements. Additionally,
                  instructors can view the status of their classes, such as
                  approved, denied, or pending, allowing them to track their
                  offerings effectively.
                </p>
                <p>
                  <span className="font-bold text-neutral">
                    ✓ Admin Control Panel:
                  </span>{" "}
                  The admin role has access to a control panel that grants them
                  complete control over user management and class organization.
                  Admins can manage user roles, including assigning student and
                  instructor privileges, and have the authority to approve or
                  deny class requests.
                </p>
              </Fade>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectOne;
