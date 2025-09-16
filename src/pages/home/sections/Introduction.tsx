///////////////////////////////
// IMPORTING MODULES
///////////////////////////////

import React from "react";
var Latex = require("react-latex");

///////////////////////////////
// COMPONENT: INTRODUCTION
///////////////////////////////

const Introduction = (): JSX.Element => {
  return (
    <section id="introduction">
      <h2 className="text-white text-2xl font-bold pb-2">Introduction</h2>
      <p>
        The n-body problem refers to predicting the individual motions of a
        group of celestial objects interacting with each other gravitationally.
        The n refers to the number of bodies that a system contains, which can
        vary from 2 to infinity. Oftentimes in physics, masses are reduced to
        help with calculations. Although the n-body problem is generally simple
        for <Latex>{"$n = 2$"}</Latex>, it is a complex problem for{" "}
        <Latex>{"$n \\geq 3$"}</Latex>. Solving the equations for larger n
        numbers could help us understand the interactions between planets in our
        solar system. This problem is considered much more difficult to solve in
        general relativity due to additional factors such as time and space
        distortion.
        <br />
        <br />
        R. M. Rosenberg characterizes the the n-body problem as : "Each particle
        in a system of a finite number of particles is subjected to a Newtonian
        gravitational attraction from all the other particles, and to no other
        forces. If the initial state of the system is given, how will the
        particles move?"
        <br />
        <br />
      </p>
    </section>
  );
};

///////////////////////////////
// EXPORTING INTRODUCTION
///////////////////////////////

export default Introduction;
