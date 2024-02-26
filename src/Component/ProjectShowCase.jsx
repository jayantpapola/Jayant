import React from "react";
import Carousel from "./Carousel";

const ProjectShowCase = () => {
  return (
    <div className="text-white p-5 mb-[50px]">
      <div className="text-[40px] font-black mb-5 bg-[#222] p-3 rounded-md  px-5 shadow-xl">
        Projects
      </div>
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-5">
          <h2 className="text-2xl mb-5 font-bold">
            1. LokSabha Real Time Analytics
          </h2>
          <div className="flex gap-1 flex-wrap">
            <b>Tech Stack -</b>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">React.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Tailwind Css
            </span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">Node.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Express.js
            </span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md"> MongoDB</span>{" "}
          </div>
          <ul className="list-disc p-5">
            <li>Team - 3 members</li>
            <li>Designing, Architecting, and Developing the Frontend Alone</li>
            <li>Dynamic Ui with real time pointers in map with animations.</li>
          </ul>
          <span className="text-[#999] p-2 rounded-md text-[12px] bg-[#222]">
            I can't share more screenshots and info due to company policies.
          </span>
        </div>
        <div className="w-full md:w-1/2  ">
          <Carousel
            items={[
              "project1.png",
              "project1-2.png",
              "project1-3.png",
              "project1-4.png",
            ]}
            speed={2000}
          />
        </div>
      </section>
      <section className="flex mt-5 flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-5">
          <h2 className="text-2xl mb-5 font-bold">
            2. Screeno Player (Media Player)
          </h2>
          <div className="flex gap-1 flex-wrap">
            <b>Tech Stack -</b>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">React.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Tailwind Css
            </span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Electron.js
            </span>{" "}
          </div>
          <ul className="list-disc p-5">
            <li>Team - Alone</li>
            <li>
              Developed a Media Player Software Which can run offline too.
            </li>
            <li>Inplement Socket To control player through our dashboard. </li>
            <li>Used Indexed DB to store logs in large amount. </li>
            <li>Implement Feature to integrate with other applications.</li>
          </ul>
          <span className="text-[#999] p-2 rounded-md text-[12px] bg-[#222]">
            I can't share more screenshots and info due to company policies.
          </span>
        </div>
        <div className="w-full md:w-1/2 ">
          <Carousel items={["project2.png", "project2-2.png"]} speed={3000} />
        </div>
      </section>
      <section className="flex mt-5 flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-5">
          <h2 className="text-2xl mb-5 font-bold">3. LocAudit Admin Panel</h2>
          <div className="flex gap-1 flex-wrap">
            <b>Tech Stack -</b>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">React.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Tailwind Css
            </span>
            <span className="bg-[#333] p-[3px_10px] rounded-md">Node.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Express.js
            </span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">MongoDB</span>{" "}
          </div>
          <ul className="list-disc p-5">
            <li>Team - 2 members</li>
            <li>Developed a Super Admin Panel for one of companies product.</li>
            <li>Designed, and Architect Frontend.</li>
          </ul>
          <span className="text-[#999] p-2 rounded-md text-[12px] bg-[#222]">
            I can't share more screenshots and info due to company policies.
          </span>
        </div>
        <div className="w-full md:w-1/2 ">
          <Carousel
            items={["project3-1.png", "project3-2.png", "project3-3.png"]}
            speed={2000}
          />
        </div>
      </section>
      <section className="flex mt-5 flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-5">
          <h2 className="text-2xl mb-5 font-bold">
            4. Locaudit Pro (Android Application)
          </h2>
          <div className="flex gap-1 flex-wrap">
            <b>Tech Stack -</b>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">React.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              React Native
            </span>
            <span className="bg-[#333] p-[3px_10px] rounded-md">Node.js</span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">
              Express.js
            </span>{" "}
            <span className="bg-[#333] p-[3px_10px] rounded-md">MongoDB</span>{" "}
          </div>
          <ul className="list-disc p-5">
            <li>
              Team - 3 members
              <span className="p-1 text-sm bg-[#333] rounded-md mx-2 px-2">
                ( 60% contribution )
              </span>
            </li>

            <li>
              Developed and Deployed an Android Application on PlayStore{" "}
              <div className="inline-block w-max p-1 text-sm bg-[#333] rounded-md mx-2 px-2 hover:scale-110 hover:bg-green-600 duration-150 cursor-pointer">
                <a
                  href="https://play.google.com/store/apps/details?id=com.locad.locauditpro&hl=en_IN&gl=US"
                  target="_blank"
                >
                  Locaudit Pro
                </a>
              </div>
            </li>
            <li>Integrate sms, QR scan, wallet and many more features.</li>
          </ul>
          <span className="text-[#999] p-2 rounded-md text-[12px] bg-[#222]">
            I can't share more screenshots and info due to company policies.
          </span>
        </div>
        <div className="w-full md:w-1/2 ">
          <Carousel
            items={[
              "project4-1.jpg",
              "project4-2.jpg",
              "project4-3.jpg",
              "project4-4.jpg",
            ]}
            speed={3000}
            slidesToShow={2}
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectShowCase;
