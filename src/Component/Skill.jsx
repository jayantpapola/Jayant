import React from "react";

const Skill = ({ img, skill }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="realtive z-[2] bg-[rgba(0,0,0,0.8)] shadow-xl cursor-pointer group-hover:scale-125  duration-200 m-2 mb-0  size-[80px] rounded-md flex items-center justify-center">
        <img
          src={img}
          alt={skill}
          className=" w-[80%] object-contain   group-hover:shadow-xl duration-200   drop-shadow"
        />
      </div>
      <div className="text-white text-center text-[10px] w-[70px] bg-[#111] p-1 rounded-[0_0_8px_8px] opacity-0 group-hover:translate-y-2 group-hover:opacity-100  duration-200 -translate-y-7 shadow-lg">
        {skill}
      </div>
    </div>
  );
};

export default Skill;
