import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center my-16 lg:my-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-8 lg:gap-y-0 lg:gap-x-4 px-4 lg:px-0">
        <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left lg:py-32">
          <h3 className="text-xl lg:text-3xl">Hi, I am</h3>
          <h1 className=" text-4xl lg:text-6xl text-primary font-bold my-5">
            Md. Ariful Haque
          </h1>
          <div className="i-title mx-auto lg:ml-0 mb-6">
            <div className="i-title-wrapper">
              <h3 className="i-title-item text-xl lg:text-3xl lg:justify-start">
                MERN Stack Developer
              </h3>
              <h3 className="i-title-item text-xl lg:text-3xl lg:justify-start">
                Front-End Developer
              </h3>
              <h3 className="i-title-item text-xl lg:text-3xl lg:justify-start">
                Back-End Developer
              </h3>
              <h3 className="i-title-item text-xl lg:text-3xl lg:justify-start">
                Full Stack Developer
              </h3>
            </div>
          </div>
          <p>
            Experienced Front-End Developer specializing in React, Node.js,
            MongoDB, and Express.js. Based in Chattogram, Bangladesh.
          </p>
          <div className="flex gap-x-6 text-3xl text-primary mt-8 mx-auto lg:ml-0">
            <BsFacebook />
            <BsLinkedin className="rounded-full" />
            <BsGithub />
          </div>
        </div>
        <div className="banner-img min-h-[20rem] md:min-h-[50rem] lg:min-h-fit order-1 lg:order-2">
          <div className="inset-2 absolute overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/Sd6R6W7/Me.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
