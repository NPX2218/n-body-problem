///////////////////////////////
// IMPORTING MODULES
///////////////////////////////

import React from "react";
import { Link } from "react-router-dom";

///////////////////////////////
// COMPONENT: FOOTER
///////////////////////////////

const Footer = (): JSX.Element => {
  return (
    <footer className="text-white">
      <hr />
      <hr />
      <hr />
      <br />
      <p>
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/neel-bansal/"
          className="font-bold"
          target="_blank"
        >
          Neel Bansal
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/soham-gupta-4154a3374/"
          className="font-bold"
          target="_blank"
        >
          Soham Gupta
        </a>{" "}
        — Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};

///////////////////////////////
// EXPORTING FOOTER
///////////////////////////////

export default Footer;
