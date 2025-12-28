/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/home/Home";

/////////////////////////////////////
// COMPONENT: ROUTER
/////////////////////////////////////

const Router: React.FC = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

///////////////////////////////
// EXPORTING ROUTER
///////////////////////////////

export default Router;
