///////////////////////////////
// IMPORTING MODULES
///////////////////////////////

import React, { useEffect, useState } from "react";
import "./galaxy.js";
import Introduction from "./sections/Introduction";
import TwoBody from "./sections/TwoBody";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";
import { startThree } from "./galaxy.js";
import HamiltonMechanics from "./sections/HamiltonMechanics";
import NBodyComplexity from "./sections/NBodyComplexity";

///////////////////////////////
// COMPONENT: HOME
///////////////////////////////

const Home = (): JSX.Element => {
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
      <canvas className="webgl w-full no-scrollbar"></canvas>
      <div className="heading max-w-[90%] p-5 mx-auto">
        <h1 className="text-white uppercase">N-body problem</h1>
        <h4>By: Neel Bansal and Soham Gupta</h4>
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
          <HamiltonMechanics />
          <NBodyComplexity />
          <Footer />
        </div>
      </div>
    </div>
  );
};

///////////////////////////////
// EXPORTING HOME
///////////////////////////////

export default Home;
