import React, { useState } from "react";

const NavBar = () => {
  const [isToggleBar, setIsToggleBar] = useState(false);
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT ME", link: "/about-me" },
  ];
  return (
    <div className="w-full fixed top-0 left-0 bg-[#12232E] text-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="text-xl cursor-pointer flex items-center font-[Merienda]">
          Ravi Teja Chilaka
        </div>
        <div
          onClick={() => setIsToggleBar(!isToggleBar)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <ion-icon
            name={isToggleBar ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center pb-0 absolute md:static bg-[#12232E] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7  ${
            isToggleBar ? "top-10 text-white" : "top-[-400px]"
          }`}
        >
          {Links.map(({ name, link }, index) => (
            <li key={index} className="text-xs md:ml-8  md:my-0 my-5 ">
              {" "}
              <a href={link} className="font-[Merienda]">
                {name}{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
