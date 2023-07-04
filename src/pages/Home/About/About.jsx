import about_pic from "../../../assets/about_me.jpg";

const about = [
  {
    id: 1,
    text: `I am a passionate MERN stack developer based in Chattogram,
    Bangladesh, with extensive experience in front-end development.`,
  },
  {
    id: 2,
    text: `Specializing in React, Node.js, MongoDB, and Express.js, I am
    dedicated to transforming ideas into powerful web applications.`,
  },
  {
    id: 3,
    text: `My expertise in the MERN stack enables me to build next-generation
    web solutions that empower businesses to thrive in the digital
    landscape. Combining artistry and technology, I create stunning
    web applications that not only meet but exceed client
    expectations.`,
  },
  {
    id: 4,
    text: `I am driven by the pursuit of excellence and leverage the power of
    MERN stack to develop scalable, robust, and high-performance web
    solutions.`,
  },
  {
    id: 5,
    text: `If you have a vision for a web project, I am ready to bring it to
    life with my skills and dedication to delivering exceptional
    results.`,
  },
];

const About = () => {
  return (
    <>
      <section
        className="my-16 lg:my-20 min-h-[80vh] px-4 md:px-8 lg:px-0 pt-10"
        id="about"
      >
        <h1 className="text-3xl text-center font-bold text-primary uppercase mb-20">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2">
          <div className="w-4/5 mx-auto lg:w-2/3 bg-neutral rounded-lg bg-opacity-20">
            <img
              src={about_pic}
              alt=""
              className="h-full w-full mx-auto object-cover object-top rounded-lg translate-x-7 translate-y-7"
            />
          </div>
          <div className="text-neutral text-lg font-semibold space-y-3 lg:flex lg:flex-col lg:justify-center text-center lg:text-left mt-16 lg:mt-0">
            {about.map((text) => (
              <p key={text.id}>{text.text}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
