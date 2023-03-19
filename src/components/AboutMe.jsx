import React from "react";

const AboutMe = () => {
  const pStyle = "md:text-xl text-sm md:mb-4";

  return (
    <div className="flex flex-col justify-center items-center px-10 py-6 w-full h-auto">
      <div className="text-center mb-6 ">
        <h1 className="mb-4 sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#12232E]">
          ABOUT ME
        </h1>
        <p className={pStyle}>
          Here you will find more information about me, what I do, and my
          current skills in terms of programming and technology.
        </p>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[50%] w-full md:pr-8">
          <h3 className="mb-4 sm:text-xl md:text-3xl font-bold text-[#12232E]">
            Get to know me!
          </h3>
          <p className={pStyle}>
            I'm a <span className="font-semibold">Frontend Developer</span> with
            a passion for building up beautiful and responsive websites. I have
            worked on a few projects that demonstrates my ability to make use of
            the concepts I've learned. You can check them out in the{" "}
            <span className="font-semibold">Projects</span> section.
          </p>
          <p className={pStyle}>
            I enjoy sharing and interacting with people in the Web Dev world. I
            believe that this helps me to grow and learn in this field. You can
            connect with me on{" "}
            <span className="font-semibold text-blue-500">
              <a href="https://www.linkedin.com/in/raviteja-c" target="blank">
                {" "}
                LinkedIn
              </a>
            </span>{" "}
            and <span className="font-semibold"> Twitter</span> where I share my
            experiences and thoughts on various topics related to Web
            Development.
          </p>
          <p className={pStyle}>
            I'm open to <span className="font-semibold">Job</span> opportunities
            where I can learn, share ideas and work with like-minded peole. If
            you have any good opportunities that matches my skills and
            experience, please don't hesitate to{" "}
            <span className="font-semibold">contact</span>
            me.
          </p>
        </div>
        <div className="w-full md:w-[50%] md:text-xl text-sm md:mb-4">
          <h3 className="mb-4 sm:text-xl md:text-3xl font-bold text-[#12232E]">
            My Skills
          </h3>
          <div>
            <div className="flex flex-wrap text-center gap-2">
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>HTML</span>
              </div>
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>CSS</span>
              </div>
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>Tailwind CSS</span>
              </div>
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>Responsive Design</span>
              </div>
            </div>
            <div className="flex flex-wrap text-center gap-2">
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>JavaScript</span>
              </div>
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>React JS</span>
              </div>
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>Redux</span>
              </div>
              <div className="mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>Jest</span>
              </div>
            </div>
            <div className="flex flex-wrap text-center gap-2">
              <div className=" mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>Git</span>
              </div>
              <div className=" mb-2 bg-[#e4e4e7] px-8 py-3 grow">
                <span>Jira</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
