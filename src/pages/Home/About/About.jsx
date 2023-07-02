import about_pic from "../../../assets/about_me.jpg";

const About = () => {
  return (
    <>
      <section className="my-16 lg:my-20 min-h-screen px-4 lg:px-0">
        <h1 className="text-3xl text-center font-bold text-primary uppercase mb-20">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
          <div className="flex relative">
            <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[30rem] w-4/5 mx-auto lg:w-2/3 bg-neutral rounded-lg"></div>
            <img
              src={about_pic}
              alt=""
              className="h-[20rem] md:min-h-[40rem] lg:min-h-[30rem] w-4/5 mx-auto lg:w-2/3 object-cover object-top rounded-lg absolute left-6 top-6 lg:left-32 lg:top-10"
            />
          </div>
          <div className="text-neutral text-lg font-semibold space-y-3 lg:flex lg:flex-col lg:justify-end text-center lg:text-left mt-16 lg:mt-0">
            <p>
              I am a passionate MERN stack developer based in Chattogram,
              Bangladesh, with extensive experience in front-end development.
            </p>
            <p>
              Specializing in React, Node.js, MongoDB, and Express.js, I am
              dedicated to transforming ideas into powerful web applications.
            </p>
            <p>
              My expertise in the MERN stack enables me to build next-generation
              web solutions that empower businesses to thrive in the digital
              landscape. Combining artistry and technology, I create stunning
              web applications that not only meet but exceed client
              expectations.
            </p>
            <p>
              I am driven by the pursuit of excellence and leverage the power of
              MERN stack to develop scalable, robust, and high-performance web
              solutions.
            </p>
            <p>
              If you have a vision for a web project, I am ready to bring it to
              life with my skills and dedication to delivering exceptional
              results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
