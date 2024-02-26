import React from "react";
import Cube from "./Cube/Cube";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-screen  bg-gradient-to-br border-t-4 border-black from-black to-[#222]"
      id="contact"
    >
      <div className="py-10 flex items-center gap-5 flex-col">
        <Cube />
      </div>
      <div className=" flex items-center  flex-col gap-3">
        <div className="group hover:ring text-white px-[30px] h-[50px] flex items-center gap-2  rounded-md cursor-pointer bg-[#222] duration-200">
          <img src="gmail.png" className="h-[20px]" /> jpapola21@gmail.com
        </div>
        <div className="hover:ring text-white px-[30px] h-[50px] flex items-center gap-2  rounded-md cursor-pointer bg-[#222] duration-200">
          <img src="call.png" className="h-[20px]" /> +91 9810291401
        </div>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          className="hover:ring text-white px-[30px] h-[50px] flex items-center gap-2  rounded-md cursor-pointer bg-[#222] duration-200"
        >
          <img src="linkedin.png" className="h-[20px]" /> linkedin
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          className="hover:ring text-white p-[20px]  flex items-center gap-2  rounded-full cursor-pointer bg-[#222] duration-200"
        >
          <img src="resume.png" className="h-[40px]" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
