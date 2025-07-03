import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./App.css";
import "./galaxy.js";
import Introduction from "./sections/Introduction";
import TwoBody from "./sections/twoBody/TwoBody";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import { startThree } from "./galaxy.js";

function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  useEffect(() => {
    function waitForCanvas() {
      const canvas = document.querySelector("canvas.webgl");

      if (canvas) {
        startThree();
      } else {
        setTimeout(waitForCanvas, 100);
      }
    }

    waitForCanvas();
  }, []);
  return (
    <div className="w-full overflow-y-clip overflow-x-hidden bg-black h-[440vh]">
      {/* scroll-container*/}

      <canvas className="webgl w-full no-scrollbar"></canvas>
      <div className="heading max-w-[90%] p-5 mx-auto">
        <h1 className="text-white uppercase">N-body problem</h1>
        <h4>By: Neel Bansal</h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        {showPopup ? (
          <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        ) : null}

        <div id="ui" className="z-10 ">
          <Introduction />
          <TwoBody />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
