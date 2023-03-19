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
      <div className="text-white text-center px-12">
        <h1 className="md:mb-6 mb-3 font-bold font-[Merienda] sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Hi, I'm
          <span className="text-[#12232E] uppercase"> Ravi Teja Chilaka</span>
        </h1>
        <p className="text-sm font-[Merienda] text-slate-600">
          A Frontend Web Developer focused on building the frontend of websites
          that leads to the success of the overall product
        </p>
      </div>
    </div>
  );
};

export default Home;
