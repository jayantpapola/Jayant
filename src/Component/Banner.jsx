import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTop } from "../redux/reducer/global";
import AnimatedBG from "./AnimatedBG";
import Skill from "./Skill";

const Banner = () => {
  const [active, setActive] = useState(1);
  const top = useSelector((state) => state.global.top);
  const dispatch = useDispatch();
  useEffect(() => {
    let intervalId = setInterval(() => {
      try {
        if (active == 3) {
          setActive(1);
        } else {
          setActive(active + 1);
        }
      } catch (err) {
        setActive(1);
      }
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [active]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div
        className={`h-full w-full bg-[#030303] flex items-center flex-col justify-center`}
      >
        <div className="text-white px-[200px] text-[3.5rem] leading-[70px] md:text-[7rem] font-extrabold mx-auto justify-center flex w-[100%] flex-wrap md:leading-[130px]">
          <div
            className={`${
              active == 1 ? "text-transparent" : "text-white"
            } duration-[2s] bg-clip-text bg-gradient-to-r from-[#013f9b] to-[#42a2ec]`}
          >
            Front-
          </div>
          <div
            className={`${
              active == 2 ? "text-transparent" : "text-white"
            } duration-[2s] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}
          >
            End.{" "}
          </div>
        </div>
        <div
          className={`${
            active == 3 ? "text-transparent" : "text-white"
          } duration-[2s] bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 text-[2.5rem] md:text-[5rem] font-extrabold`}
        >
          {"<Developer/>"}
        </div>

        <div
          className={`text-[#999] md:text-[20px] px-[100px] flex flex-col items-center mt-[20px] text-center md:px-[280px]`}
        >
          <h1 className="font-extrabold md:text-[28px] ">Jayant Papola</h1>
          Experienced in crafting dynamic user interfaces with a diverse skill
          set encompassing full-stack development.
        </div>

        <AnimatedBG
          key={"Top Page"}
          children={
            <div className="flex flex-wrap justify-center my-10">
              <Skill img={"react.png"} skill={"React js"} />
              <Skill img={"redux.png"} skill={"Redux"} />
              <Skill img={"tailwind.png"} skill={"Tailwind Css"} />
              <Skill img={"nodejs.png"} skill={"Node Js"} />
              <Skill img={"expressjs.png"} skill={"Express Js"} />
              <Skill img={"electron.png"} skill={"Electron Js"} />
              <Skill img={"git.png"} skill={"Git"} />
              <Skill img={"aws.png"} skill={"AWS"} />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Banner;
