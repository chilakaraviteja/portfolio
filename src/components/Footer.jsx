import React from "react";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="bg-[#5caada] w-full h-auto px-10">
      <div className="flex flex-col-reverse md:flex-row py-8 bg-[#5caada] w-full h-auto">
        <div className="md:w-[80%] w-full">
          <h3 className="mb-3 font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Ravi Teja Chilaka
          </h3>
          <p className="md:text-xl text-sm md:mb-2">
            A Frontend Web Developer focused on building the frontend of
            websites that leads to the success of the overall product
          </p>
        </div>
        <div className="md:px-3">
          <h2 className="mb-3 font-semibold text-2xl">Social</h2>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/raviteja-c" target="blank">
              <img src={linkedin} alt="" className="w-[25px] h-auto" />
            </a>
            <a href="https://twitter.com/" target="blank">
              <img src={twitter} alt="" className="w-[25px] h-auto" />
            </a>
            <a href="https://github.com/" target="blank">
              <img src={github} alt="" className="w-[25px] h-auto" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <hr />
        <p className="text-sm py-2">
          © Copyright 2023. Made by{" "}
          <span className="font-semibold">
            <a
              href="https://www.linkedin.com/in/raviteja-c"
              className="underline"
            >
              Ravi Teja Chilaka
            </a>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
