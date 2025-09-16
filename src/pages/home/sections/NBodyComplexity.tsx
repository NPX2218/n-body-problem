///////////////////////////////
// IMPORTING MODULES
///////////////////////////////
import React from "react";
import CenteredLatex from "../../../components/CenteredLatex";
var Latex = require("react-latex");

///////////////////////////////
// COMPONENT: N-BODY COMPLEXITY
///////////////////////////////
const NBodyComplexity = (): JSX.Element => {
  return (
    <section id="nBodyComplexity" className="">
      <br />
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        Why the N-Body Problem is Complex
      </h2>
      <p>
        The n-body problem involves predicting the motion of{" "}
        <Latex>{"$n$"}</Latex> masses interacting gravitationally. For{" "}
        <Latex>{"$n = 2$"}</Latex>, the relative motion reduces to a single
        differential equation with a known solution. For{" "}
        <Latex>{"$n \\ge 3$"}</Latex>, the problem becomes significantly more
        difficult due to mutual interactions.
      </p>
      <p>
        Each body <Latex>{"$i$"}</Latex> experiences a force from all other
        bodies:
      </p>
      <CenteredLatex
        text={
          "\\vec{F}_i = G \\sum_{j=1, j \\neq i}^{n} m_i m_j \\frac{\\vec{r}_j - \\vec{r}_i}{|\\vec{r}_j - \\vec{r}_i|^3}"
        }
      />
      <p>
        Using Newton's second law, the acceleration of body{" "}
        <Latex>{"$i$"}</Latex> is:
      </p>
      <CenteredLatex
        text={
          "\\ddot{\\vec{r}}_{i} = G \\sum_{j=1}^{n} m_j \\frac{\\vec{r}_{j} - \\vec{r}_{i}}{|\\vec{r}_{j} - \\vec{r}_{i}|^3} \\text{, } j \\neq i"
        }
      />
      <p>
        For <Latex>{"$n=3$"}</Latex>, this creates a system of three coupled
        vector equations:
      </p>
      <CenteredLatex
        text={
          "\\begin{cases} \\ddot{\\vec{r}}_{1} = G \\left( m_2 \\frac{\\vec{r}_{2} - \\vec{r}_{1}}{|\\vec{r}_{2} - \\vec{r}_{1}|^3} + m_3 \\frac{\\vec{r}_{3} - \\vec{r}_{1}}{|\\vec{r}_{3} - \\vec{r}_{1}|^3} \\right) \\\\[2mm] \\ddot{\\vec{r}}_{2} = G \\left( m_1 \\frac{\\vec{r}_{1} - \\vec{r}_{2}}{|\\vec{r}_{1} - \\vec{r}_{2}|^3} + m_3 \\frac{\\vec{r}_{3} - \\vec{r}_{2}}{|\\vec{r}_{3} - \\vec{r}_{2}|^3} \\right) \\\\[1mm] \\ddot{\\vec{r}}_{3} = G \\left( m_1 \\frac{\\vec{r}_{1} - \\vec{r}_{3}}{|\\vec{r}_{1} - \\vec{r}_{3}|^3} + m_2 \\frac{\\vec{r}_{2} - \\vec{r}_{3}}{|\\vec{r}_{2} - \\vec{r}_{3}|^3} \\right) \\end{cases}"
        }
      />
      <p>
        Notice that each acceleration <Latex>{"$\\ddot{\\vec{r}}_{i}$"}</Latex>{" "}
        depends on the positions of the other two bodies. Unlike the two-body
        problem, we cannot isolate a single relative coordinate to decouple the
        system. These <b>coupled, nonlinear differential equations</b> generally
        have no closed-form solution.
      </p>
      <p>
        In general, for <Latex>{"$n$"}</Latex> bodies, we have{" "}
        <Latex>{"$3n$"}</Latex> second-order differential equations that depend
        on every other body:
      </p>
      <CenteredLatex
        text={
          "\\ddot{\\vec{r}}_{i} = f_{i}(\\vec{r}_{1}, \\vec{r}_{2}, ..., \\vec{r}_{n}), \\quad i = 1,...,n"
        }
      />
      <p>
        Small changes in initial positions or velocities can produce vastly
        different outcomes, a signature of <b>chaotic systems</b>. As a result,
        solving the n-body problem for <Latex>{"$n \\ge 3$"}</Latex> usually
        requires <b>numerical simulations</b> rather than analytical formulas.
      </p>
      <br />
      <br />
    </section>
  );
};

///////////////////////////////
// EXPORTING N-BODY COMPLEXITY
///////////////////////////////
export default NBodyComplexity;
