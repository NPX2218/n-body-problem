/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Bibliographies from "../pages/bibliographies/Bibliographies";
import Home from "../pages/home/Home";

/////////////////////////////////////
// COMPONENT: ROUTER
/////////////////////////////////////

const Router: React.FC = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bibliographies" element={<Bibliographies />} />
      </Routes>
    </HashRouter>
  );
};

///////////////////////////////
// EXPORTING ROUTER
///////////////////////////////

export default Router;
