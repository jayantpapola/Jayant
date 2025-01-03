import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-[60px] justify-between px-[20px] items-center text-white sticky top-0 z-[9] bg-[#111] shadow-xl">
      <img src="Jayant.png" alt="Logo" className="h-full" />
      <div className="space-x-5">
        <a href="#projects">projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
