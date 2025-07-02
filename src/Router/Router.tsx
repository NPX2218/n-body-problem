/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Bibliographies from "../Bibliographies/Bibliographies";
import Home from "../Home";

/////////////////////////////////////
// COMPONENT: ROUTER
/////////////////////////////////////

const Router: React.FC = (): JSX.Element => {
  //basename="/goldbachs-conjecture"
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bibliographies" element={<Bibliographies />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
