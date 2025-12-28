///////////////////////////////
// IMPORTING MODULES
///////////////////////////////

import React from "react";
var Latex = require("react-latex");

///////////////////////////////
// INTERFACE: PROPS
///////////////////////////////

interface Props {
  text: string;
}

///////////////////////////////
// COMPONENT: CENTEREDLATEX
///////////////////////////////

const CenteredLatex = ({ text }: Props): JSX.Element => {
  return (
    <span className="flex-col space-y-8 w-full flex items-center justify-center p-8">
      <Latex>{`$\\displaystyle ${text}$`}</Latex>
    </span>
  );
};

///////////////////////////////
// EXPORTING CENTEREDLATEX
///////////////////////////////

export default CenteredLatex;
