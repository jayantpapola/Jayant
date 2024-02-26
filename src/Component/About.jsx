import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white p-5 pt-[100px] border-t-4 border-black  space-y-2">
      <h2 className="underline underline-offset-4 text-[40px] font-bold">
        About Me
      </h2>
      <p className="text-lg">
        <b>Name:</b> Jayant Papola
      </p>
      <p className="text-lg">
        <b>Age:</b> 22 yrs
      </p>
      <div>
        <h3 className="text-xl underline underline-offset-4">Experience</h3>
        <ul className="list-decimal pl-5">
          <li>
            <div className="p-3 space-y-2">
              <p className="flex justify-between bg-[#222] rounded-md">
                <span className="p-1 px-[10px] bg-[royalblue] font-semibold rounded-md">
                  Software Developer
                </span>
                <span className="p-1 px-[10px] font-semibold flex gap-3 items-center">
                  <img src="locad.png" className="h-[20px]" alt="" />
                  Locad Pvt. Ltd
                </span>
              </p>
              <p>
                <span className="p-1 px-[10px] bg-[#222] font-semibold rounded-md flex justify-between items-center">
                  Jan 2023 - Present
                  <img src="timeline.png" className="h-[20px]" alt="" />
                </span>{" "}
              </p>
            </div>
          </li>
          {/* <li>Designing, Architecting, and Developing the Frontend Alone</li>
          <li>Dynamic Ui with real time pointers in map with animations.</li> */}
        </ul>
      </div>
    </div>
  );
};

export default About;
