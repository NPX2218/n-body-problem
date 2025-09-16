///////////////////////////////
// IMPORTING MODULES
///////////////////////////////
import React from "react";
import CenteredLatex from "../../../components/CenteredLatex";
var Latex = require("react-latex");

///////////////////////////////
// COMPONENT: HAMILTONIAN MECHANICS
///////////////////////////////
const HamiltonMechanics = (): JSX.Element => {
  return (
    <section id="hamiltonianMechanics" className="">
      <h2 className="text-white text-2xl font-bold pb-2">
        Hamiltonian Mechanics - Three Body Problem
      </h2>

      {/* --------------------------- */}
      {/* TOTAL ENERGY (HAMILTONIAN) */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Total Energy (Hamiltonian)
      </h3>
      <p>
        The total energy of a three-body system is the sum of kinetic energy
        (motion of each mass) and potential energy (due to gravitational
        interactions between the pairs). This is captured by the Hamiltonian:
      </p>
      <CenteredLatex
        text={
          "H = \\sum_{i=1}^{3} \\frac{p_i^2}{2m_i} - G \\left(\\frac{m_1 m_2}{r_{12}} + \\frac{m_1 m_3}{r_{13}} + \\frac{m_2 m_3}{r_{23}}\\right)"
        }
      />
      <p>
        Here:
        <ul className="list-disc list-inside">
          <li>
            <Latex>{"$p_i$"}</Latex> is the momentum of body{" "}
            <Latex>{"$i$"}</Latex>.
          </li>
          <li>
            The first summation term <Latex>{"$\\frac{p_i^2}{2m_i}$"}</Latex> is
            the kinetic energy of body <Latex>{"$i$"}</Latex>.
          </li>
          <li>
            The second term with <Latex>{"$-G$"}</Latex> represents
            gravitational potential energy between each pair of bodies.
          </li>
        </ul>
      </p>

      {/* --------------------------- */}
      {/* SYSTEM PROPERTIES */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        System Properties
      </h3>
      <p>The total mass of the system is simply the sum of all three masses:</p>
      <CenteredLatex text={"M = m_1 + m_2 + m_3"} />
      <p>The center of mass is the weighted average position of the masses:</p>
      <CenteredLatex
        text={"\\vec{R} = \\frac{\\sum_{i=1}^{3} m_i \\vec{r_i}}{M}"}
      />

      {/* --------------------------- */}
      {/* COORDINATE TRANSFORMATION */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Coordinate Transformation
      </h3>
      <p>
        To simplify the system, we switch from absolute coordinates (
        <Latex>{"$r_1, r_2, r_3$"}</Latex>) to center-of-mass and relative
        coordinates (<Latex>{"$s_1, s_2$"}</Latex>). This helps reduce degrees
        of freedom.
      </p>
      <p>The general formula for kinetic energy of a single particle is:</p>
      <CenteredLatex text={"E_k = \\frac{1}{2} m v^2"} />
      <p>
        Since velocity is the time derivative of position,
        <Latex>{"$v = \\dot{r}$"}</Latex>, we can rewrite kinetic energy as:
      </p>
      <CenteredLatex text={"E_k = \\frac{1}{2} m \\dot{r}^2"} />
      <p>Therefore, for three bodies, the total kinetic energy is:</p>
      <CenteredLatex
        text={
          "E_k = \\frac{1}{2} m_1 \\dot{r_1}^2 + \\frac{1}{2} m_2 \\dot{r_2}^2 + \\frac{1}{2} m_3 \\dot{r_3}^2"
        }
      />
      <p>The gravitational potential energy is:</p>
      <CenteredLatex
        text={
          "E_p = -G \\left(\\frac{m_1 m_2}{r_{12}} + \\frac{m_1 m_3}{r_{13}} + \\frac{m_2 m_3}{r_{23}}\\right)"
        }
      />

      {/* --------------------------- */}
      {/* RELATIVE POSITION VECTORS */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Relative Position Vectors
      </h3>
      <p>
        Instead of working with <Latex>{"$r_1, r_2, r_3$"}</Latex> directly, we
        define Jacobi relative coordinates:
      </p>
      <CenteredLatex
        text={
          "\\vec{r_1} = \\vec{R} - \\frac{m_3}{M} \\vec{s_2} - \\frac{m_2}{M_{12}} \\vec{s_1}"
        }
      />
      <CenteredLatex
        text={
          "\\vec{r_2} = \\vec{R} - \\frac{m_3}{M} \\vec{s_2} + \\frac{m_1}{M_{12}} \\vec{s_1}"
        }
      />
      <CenteredLatex
        text={"\\vec{r_3} = \\vec{R} + \\frac{M_{12}}{M} \\vec{s_2}"}
      />
      <p>Where:</p>
      <CenteredLatex text={"\\vec{s_1} = \\vec{r_2} - \\vec{r_1}"} />
      <CenteredLatex text={"\\vec{s_2} = \\vec{r_3} - \\vec{r_1}"} />
      <CenteredLatex text={"M_{12} = m_1 + m_2"} />

      {/* --------------------------- */}
      {/* KINETIC ENERGY TRANSFORMATION */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Kinetic Energy Transformation
      </h3>
      <p>
        Substituting these new coordinates and carefully expanding/canceling
        cross terms gives:
      </p>
      <CenteredLatex
        text={
          "E_k = \\frac{1}{2} M \\dot{R}^2 + \\frac{1}{2} \\frac{m_1 m_2}{M_{12}} \\dot{s_1}^2 + \\frac{1}{2} \\frac{m_3 M_{12}}{M} \\dot{s_2}^2"
        }
      />
      <p>
        Notice the cross terms vanish due to the center-of-mass definition. This
        splits kinetic energy into three independent pieces.
      </p>

      {/* --------------------------- */}
      {/* REDUCED MASSES */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Reduced Masses
      </h3>
      <p>These formulas simplify notation:</p>
      <p>Reduced mass for the 1–2 system:</p>
      <CenteredLatex text={"\\mu_1 = \\frac{m_1 m_2}{m_1 + m_2}"} />
      <p>Reduced mass for the 3–(1,2) system:</p>
      <CenteredLatex text={"\\mu_2 = \\frac{m_3 M_{12}}{M}"} />

      {/* --------------------------- */}
      {/* FINAL KINETIC ENERGY EXPRESSION */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Final Kinetic Energy Expression
      </h3>
      <p>
        Plugging in the reduced masses, the kinetic energy splits into clean
        terms:
      </p>
      <CenteredLatex
        text={
          "E_k = \\frac{1}{2} M \\dot{R}^2 + \\frac{1}{2} \\mu_1 \\dot{s_1}^2 + \\frac{1}{2} \\mu_2 \\dot{s_2}^2"
        }
      />
      <p>We define conjugate momenta:</p>
      <CenteredLatex
        text={"\\rho_1 = \\mu_1 \\dot{s_1}, \\quad \\rho_2 = \\mu_2 \\dot{s_2}"}
      />
      <p>Thus kinetic energy becomes:</p>
      <CenteredLatex
        text={"E_k = \\frac{\\rho_1^2}{2\\mu_1} + \\frac{\\rho_2^2}{2\\mu_2}"}
      />

      {/* --------------------------- */}
      {/* POTENTIAL ENERGY IN JACOBI COORDINATES */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Potential Energy in Jacobi Coordinates
      </h3>
      <p>We now substitute relative coordinates back into distances:</p>
      <p>For bodies 1–2:</p>
      <CenteredLatex text={"r_{12} = |\\vec{s_1}|"} />
      <p>For bodies 1–3:</p>
      <CenteredLatex
        text={"r_{13} = |\\vec{s_2} + \\frac{m_2}{M_{12}} \\vec{s_1}|"}
      />
      <p>For bodies 2–3:</p>
      <CenteredLatex
        text={"r_{23} = |\\vec{s_2} - \\frac{m_1}{M_{12}} \\vec{s_1}|"}
      />

      {/* --------------------------- */}
      {/* FINAL HAMILTONIAN */}
      {/* --------------------------- */}
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">
        Final Hamiltonian in Jacobi Coordinates
      </h3>
      <p>
        Combining kinetic and potential energy in Jacobi coordinates, we obtain:
      </p>
      <CenteredLatex
        text={
          "H = \\frac{\\rho_1^2}{2\\mu_1} + \\frac{\\rho_2^2}{2\\mu_2} - G \\left(\\frac{m_1 m_2}{|\\vec{s_1}|} + \\frac{m_1 m_3}{|\\vec{s_2} + \\frac{m_2}{M_{12}} \\vec{s_1}|} + \\frac{m_2 m_3}{|\\vec{s_2} - \\frac{m_1}{M_{12}} \\vec{s_1}|}\\right)"
        }
      />
      <p className="text-sm italic pt-4">
        This Hamiltonian fully describes the three-body problem in Jacobi
        coordinates, separating center-of-mass motion and expressing dynamics in
        terms of relative positions and conjugate momenta.
      </p>
    </section>
  );
};

///////////////////////////////
// EXPORTING HAMILTONIAN MECHANICS
///////////////////////////////
export default HamiltonMechanics;
