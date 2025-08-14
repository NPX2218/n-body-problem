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
        Made by <b>Neel Bansal</b> and <b>Soham Gupta</b> —{" "}
        <Link to="/bibliographies">Copyright {new Date().getFullYear()}</Link>
      </p>
    </footer>
  );
};

///////////////////////////////
// EXPORTING FOOTER
///////////////////////////////

export default Footer;
