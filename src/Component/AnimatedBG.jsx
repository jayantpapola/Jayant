import React, { useEffect, useState } from "react";

const AnimatedBG = ({ children }) => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    let animationInterval = setInterval(() => {
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
      clearInterval(animationInterval);
    };
  }, [active]);
  return (
    <div>
      <div className=" relative px-[40px]  rounded-xl flex flex-col items-center justify-center mt-[30px]">
        <div
          className={`${
            active == 1 ? "scale-100 " : "scale-0 opacity-0"
          } duration-[2s] inset-[5px] absolute opacity-8 rounded z-0 blur-[100px] bg-gradient-to-r from-[#013f9b] to-[#42a2ec]`}
        ></div>
        <div
          className={`${
            active == 2 ? "scale-100" : "scale-0 opacity-0"
          } duration-[2s] inset-[5px] absolute opacity-8 rounded z-0 blur-[100px] bg-gradient-to-r from-purple-400 to-pink-600`}
        ></div>
        <div
          className={`${
            active == 3 ? "scale-100" : "scale-0 opacity-0"
          } duration-[2s] inset-[5px] absolute opacity-8 rounded z-0 blur-[100px] bg-gradient-to-r from-pink-500 to-yellow-500`}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBG;
