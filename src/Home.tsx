import React, { useEffect, useRef } from "react";
import { TweenMax, Power1 } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import "./galaxy.js";
import Introduction from "./sections/Introduction";
import TwoBody from "./sections/twoBody/TwoBody";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="w-full overflow-y-clip overflow-x-hidden bg-black h-[440vh]">
      {/* scroll-container*/}

      <canvas className="webgl w-full h-[440vh] no-scrollbar"> </canvas>
      <div className="heading p-10">
        <h1 className="text-white uppercase">N-body problem</h1>
        <h4>By: Neel Bansal</h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="ui">
          <Introduction />
          <TwoBody />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
