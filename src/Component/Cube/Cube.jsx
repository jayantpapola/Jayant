import React from "react";
import "./Cube.css";

const Cube = () => {
  //  transform: rotateX(90deg) translateZ(50px);
  return (
    <div>
      <div className="scene cursor-pointer  duration-200">
        <div className="cube group flex items-center justify-center  ">
          <img
            src="hire_me.png"
            className="cubeIcon text-white duration-500 scale-50 group-hover:[transform:translateY(-90px)rotateY(-10deg)scale(2)translateZ(10px)]"
            alt=""
          />
          <div className="cube-face front flex items-center justify-center">
            <img
              src="Jayant.png"
              className="h-1/2 rounded-full group-hover:h-3/4 duration-200"
              alt=""
            />
          </div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top group-hover:[transform:translateY(-160px)rotateX(90deg)scale(1.2)] duration-500"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
