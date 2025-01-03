import React from "react";
import Header from "./Header";
import ProjectShowCase from "./ProjectShowCase";
import Contact from "./Contact";
import About from "./About";

const Page = () => {
  return (
    <div
      className="bg-[#000] bg-gradient-to-tr from-black to-[#222]"
      id="projects"
    >
      <Header />
      <ProjectShowCase />
      <Contact />
    </div>
  );
};

export default Page;
