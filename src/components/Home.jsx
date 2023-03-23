import React from "react";
import PassportSizePhoto from "../assets/PassportSizePhoto.jpg";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full md:h-[75%] h-[75%] bg-[#5caada]">
      <div className="py-4 mt-10 md:mt-0 md:pr-10">
        <img
          src={PassportSizePhoto}
          alt="display pic"
          className="md:w-[250px] w-[125px]"
        />
      </div>
      <div className="text-center px-12  font-[Merienda] sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        <h1 className="md:mb-6 mb-3 text-white">
          Hi, I'm
          <span className="text-[#12232E] uppercase font-bold">
            {" "}
            Ravi Teja Chilaka
          </span>
        </h1>
        <p className="text-sm ">
          Based in the UK, I'm a frontend developer passionate about building
          accessible web apps that users love.
        </p>
      </div>
    </div>
  );
};

export default Home;
