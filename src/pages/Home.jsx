import React from "react";
import Banner from "../Component/Banner";
import Page from "../Component/Page";
import About from "../Component/About";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Banner />
      {/* <About /> */}
      <Page />
    </div>
  );
};

export default Home;
