import { Link } from "react-router-dom";
import recipe from "../../../assets/healthyRecipe.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ProjectThree = () => {
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
            >
              View Full Details <HiArrowNarrowRight className="text-2xl" />
            </Link>
          </div>
        )}
        <div
          className="border-2 border-primary rounded-lg h-[30rem] overflow-hidden flex flex-col projects"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="1200"
        >
          <div className="h-[26rem] overflow-hidden">
            <img src={recipe} alt="" className="project-img" />
          </div>
          <div className="grow flex flex-wrap items-center gap-x-2 justify-around bg-black text-primary font-semibold">
            <a
              href="https://healthy-recipe-a4d57.web.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Live
            </a>
            <a
              href="https://github.com/Arifprogrammer/healthy-recipe.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300"
            >
              Client Code
            </a>
            <a
              href="https://github.com/Arifprogrammer/healthy-recipe.com-server"
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
        {details && (
          <div
            className="border-2 border-primary rounded-lg h-[30rem] p-4 font-semibold text-center hidden lg:grid"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <Fade delay={500} duration={2500}>
              <div className="h-[27.2rem] overflow-hidden">
                <p className="mb-1 text-primary">
                  Healthy Recipe.com (A Food Order Platform)
                </p>
                <p>
                  This food recipe website is a platform where users can find
                  and share their favorite recipes. It provides a wide range of
                  recipes, from appetizers to desserts, and everything in
                  between. The website is user-friendly and easy to navigate,
                  with a clean and modern design. Each recipe includes a list of
                  ingredients, step-by-step instructions, and photos to help
                  users visualize the cooking process. In addition to browsing
                  recipes, users can create their own profile and save their
                  favorite recipes for easy access later on. Overall, this food
                  recipe website provides a comprehensive platform for recipe
                  sharing and discovery, catering to a wide range of tastes and
                  dietary needs. It is a great resource for home cooks and food
                  enthusiasts alike.
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
          >
            <div className="h-[27.2rem] overflow-hidden">
              <Fade delay={1000} duration={2500}>
                <p className="font-bold">Key Features:</p>
                <ul className="space-y-3 mt-4">
                  <li>
                    ✓ Successfully integrated Firebase authentication, enabling
                    seamless login options for users via Google, GitHub, or
                    Email/Password, with no sensitive data stored in the
                    database.
                  </li>
                  <li>
                    ✓ Implemented a robust private route system, granting access
                    to authorized users while restricting access to the private
                    route upon logout.
                  </li>
                  <li>
                    ✓ Introduced user-friendly features, such as the ability to
                    mark favorite recipes and conveniently print the blog page
                    for enhanced user experience.
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

export default ProjectThree;
