import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import responsiveDesign from "../assets/responsiveDesign.svg";
import tailwind from "../assets/tailwind.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import gitIcon from "../assets/gitIcon.svg";
import jira from "../assets/jira.svg";
import jest from "../assets/jest.svg";

const AboutMe = () => {
  const pStyling = "mb-3 md:text-xl text-sm md:mb-4";
  const skillsStyling =
    "mb-2 bg-[#e4e4e7] px-8 py-3 grow flex justify-center items-center space-x-1";

  return (
    <div className="flex flex-col justify-center items-center px-10 py-6 w-full h-auto">
      <div className="text-center mb-6 ">
        <h1 className="mb-4 sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#12232E]">
          ABOUT ME
        </h1>
        <p className={pStyling}>
          Here you will find more information about me, what I do, and my
          current skills in terms of programming and technology.
        </p>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[50%] w-full md:pr-8">
          <h3 className="mb-4 sm:text-xl md:text-3xl font-bold text-[#12232E]">
            Get to know me!
          </h3>
          <p className={pStyling}>
            I'm a <span className="font-semibold">Frontend Developer</span> with
            a passion for building up beautiful and responsive websites. I have
            worked on a few projects that demonstrates my ability to make use of
            the concepts I've learned. You can check them out in the{" "}
            <span className="font-semibold">Projects</span> section.
          </p>
          <p className={pStyling}>
            I enjoy sharing and interacting with people in the Web Dev world. I
            believe that this helps me to grow and learn in this field. You can
            connect with me on{" "}
            <span className="font-semibold text-blue-500">
              <a href="https://www.linkedin.com/in/raviteja-c" target="blank">
                {" "}
                LinkedIn
              </a>
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-500">
              <a href="https://twitter.com/" target="blank">
                {" "}
                Twitter{" "}
              </a>
            </span>{" "}
            where I share my experiences and thoughts on various topics related
            to Web Development.
          </p>
          <p className={pStyling}>
            I'm open to <span className="font-semibold">Job</span> opportunities
            where I can learn, share ideas and work with like-minded peole. If
            you have any good opportunities that matches my skills and
            experience, please don't hesitate to{" "}
            <span className="font-semibold">contact </span>
            me.
          </p>
          <div className="py-3">
            <button
              className="bg-[#12232E] text-white p-3 rounded-full"
              onClick={() =>
                (window.location = "mailto:chilakaraviteja@yahoo.com")
              }
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] md:text-xl text-sm md:mb-4">
          <h3 className="mb-4 sm:text-xl md:text-3xl font-bold text-[#12232E]">
            My Skills
          </h3>
          <div>
            <div className="flex flex-wrap text-center gap-2">
              <div className={skillsStyling}>
                <img src={html} alt="" className="w-[30px]" />
                <span>HTML</span>
              </div>
              <div className={skillsStyling}>
                <img src={css} alt="" className="w-[30px]" />
                <span>CSS</span>
              </div>
              <div className={skillsStyling}>
                <img src={tailwind} alt="" className="w-[30px]" />
                <span>Tailwind CSS</span>
              </div>
              <div className={skillsStyling}>
                <img src={responsiveDesign} alt="" className="w-[30px]" />

                <span>Responsive Design</span>
              </div>
            </div>
            <div className="flex flex-wrap text-center gap-2">
              <div className={skillsStyling}>
                <img src={javascript} alt="" className="w-[30px]" />
                <span>JavaScript</span>
              </div>
              <div className={skillsStyling}>
                <img src={react} alt="" className="w-[30px]" />
                <span>React JS</span>
              </div>
              <div className={skillsStyling}>
                <img src={redux} alt="" className="w-[30px]" />
                <span>Redux</span>
              </div>
              <div className={skillsStyling}>
                <img src={jest} alt="" className="w-[30px]" />
                <span>Jest</span>
              </div>
            </div>
            <div className="flex flex-wrap text-center gap-2">
              <div className={skillsStyling}>
                <img src={gitIcon} alt="" className="w-[30px]" />
                <span>Git</span>
              </div>
              <div className={skillsStyling}>
                <img src={jira} alt="" className="w-[30px]" />
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
