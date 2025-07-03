import React from "react";
import CenteredLatex from "../../components/CenteredLatex";
var Latex = require("react-latex");

const TwoBody = () => {
  return (
    <section id="twoBody" className="">
      <h2 className="text-white text-2xl font-bold pb-2">Two Body Case</h2>
      <p>The two body problem is a special case of the n-body problem.</p>
      <p>The Gravitational force can be expressed as:</p>
      <CenteredLatex text={"F = G \\frac{m_1 m_2}{r^2}"} />
      <p>
        where <Latex>{"$G$"}</Latex> is the gravitational constant,{" "}
        <Latex>{"$r$"}</Latex> is the distance between the two point masses,{" "}
        <Latex>{"$m_1$"}</Latex> and <Latex>{"$m_2$"}</Latex> are the masses of
        the two point masses. As we want to include direction to this formula,
        we need to multiply the force by the unit vector between the two point
        masses. This will give us the direction of the force. Additionally,
        since the force is attractive we must multiply the force by -1. This
        means our new equation can be rewritten as:
      </p>
      <CenteredLatex
        text={"F = -G \\frac{m_1 m_2}{|r|^3} \\times (\\vec{r_1}-\\vec{r_2})"}
      />
      <p>
        where <Latex>{"\\hat{r}"}</Latex> is the unit vector between the two
        point masses.
      </p>
      <p>We can write our equations of motion as follows:</p>
      <CenteredLatex
        text={
          "m_1 \\ddot{\\vec{r}}_1 = -G \\frac{m_1 m_2}{|\\vec{r}_1 - \\vec{r}_2|^3} \\times (\\vec{r}_1 - \\vec{r}_2)"
        }
      />
      <CenteredLatex
        text={
          "m_2 \\ddot{\\vec{r}}_2 = -G \\frac{m_1 m_2}{|\\vec{r}_2 - \\vec{r}_1|^3} \\times (\\vec{r}_2 - \\vec{r}_1)"
        }
      />
      <p>
        However, to move forward, we need to define two new quantities: The
        reduced mass which allows us to reduce a 2-body system into a 1-body
        problem, with a "fictious" particle <Latex>{"\\mu"}</Latex> which acts
        under the gravitational force of both masses. Secondly, we must define
        the center of mass. This is essentially just a weighted average of two
        masses.
      </p>
      <br />
      <br />
      <h3 className="text-white text-xl font-bold pb-2">Reduced Mass</h3>
      <p>We start with Newton's 2nd law for both bodies:</p>
      <CenteredLatex
        text={
          "m_1 \\ddot{\\vec{r}}_1 = \\vec{F}_{12}, \\quad m_2 \\ddot{\\vec{r}}_2 = \\vec{F}_{21} = -\\vec{F}_{12}"
        }
      />
      <p>Define the relative position:</p>
      <CenteredLatex
        text={
          "\\vec{r} = \\vec{r}_1 - \\vec{r}_2 \\Rightarrow \\ddot{\\vec{r}} = \\ddot{\\vec{r}}_1 - \\ddot{\\vec{r}}_2"
        }
      />
      <p>From Newton's laws:</p>
      <CenteredLatex
        text={
          "\\ddot{\\vec{r}}_1 = \\frac{\\vec{F}}{m_1}, \\quad \\ddot{\\vec{r}}_2 = -\\frac{\\vec{F}}{m_2}"
        }
      />
      <CenteredLatex
        text={
          "\\Rightarrow \\ddot{\\vec{r}} = \\ddot{\\vec{r}}_1 - \\ddot{\\vec{r}}_2 = \\vec{F} \\left( \\frac{1}{m_1} + \\frac{1}{m_2} \\right) "
        }
      />
      <CenteredLatex
        text={" = \\vec{F} \\left( \\frac{m_2 + m_1}{m_1 m_2} \\right)"}
      />
      <CenteredLatex
        text={"= \\vec{F} \\left( \\frac{m_1 + m_2}{m_1 m_2} \\right)"}
      />
      <p>So we write the force as:</p>
      <CenteredLatex
        text={
          "\\therefore \\vec{F}  = \\left( \\frac{m_1 m_2}{m_1 + m_2} \\right) \\ddot{\\vec{r}} = \\mu \\ddot{\\vec{r}}"
        }
      />
      <p>
        This is identical in form to Newton's second law{" "}
        <Latex>{"$F = ma$"}</Latex>. Hence, we define the reduced mass:
      </p>
      <CenteredLatex text={"\\mu = \\frac{m_1 m_2}{m_1 + m_2}"} />
      <p>
        This lets us solve the relative motion <Latex>{"$\\vec{r}(t)$"}</Latex>{" "}
        as if it were a single particle of mass <Latex>{"\\mu"}</Latex> orbiting
        a fixed point (at the center of mass).
      </p>
      <br />
      <br />
      <h3 className="text-white text-xl font-bold pb-2">Center of Mass</h3>
      <p>
        The center of mass is the weighted average of the positions of the two
        masses. It's the point that moves as if the whole mass of the system
        were concentrated there. There is a coordinate{" "}
        <Latex>{"$\\vec{R}$"}</Latex> such that the total momentum of the system
        is:
      </p>
      <CenteredLatex
        text={"\\vec{p}_{\\text{total}} = (m_1 + m_2) \\dot{\\vec{R}}"}
      />
      <p>
        The <Latex>{"$\\vec{R}$"}</Latex> is referred to as the Barycenter,
        which is a dynamical point which the two masses orbit each other around.
        Since the momentum of the system can be written as its constituent
        parts:
      </p>
      <CenteredLatex
        text={
          "\\vec{p}_{\\text{total}} = m_1 \\dot{\\vec{r}}_1 + m_2 \\dot{\\vec{r}}_2"
        }
      />
      <CenteredLatex
        text={
          "\\therefore m_1 \\dot{\\vec{r}}_1 + m_2 \\dot{\\vec{r}}_2 = (m_1 + m_2) \\dot{\\vec{R}}"
        }
      />
      <p>
        Divide both sides by <Latex>{"$m_1 + m_2$"}</Latex>:
      </p>
      <CenteredLatex
        text={
          "\\dot{\\vec{R}} = \\frac{m_1 \\dot{\\vec{r}}_1 + m_2 \\dot{\\vec{r}}_2}{m_1 + m_2} \\quad (1)"
        }
      />
      <p>Differentiating this expression we get</p>
      <CenteredLatex
        text={
          "\\ddot{\\vec{R}} = \\frac{m_1 \\ddot{\\vec{r}}_1 + m_2 \\ddot{\\vec{r}}_2}{m_1 + m_2}"
        }
      />
      <p>
        Now substituting in <Latex>{"$F_{12} = m_1 \\ddot{\\vec{r}_1}$"}</Latex>{" "}
        and <Latex>{"$F_{21} = m_2 \\ddot{\\vec{r}_2}$"}</Latex> yields:
      </p>
      <CenteredLatex
        text={"\\ddot{\\vec{R}} = \\frac{F_{12} + F_{21}}{m_1+m_2}"}
      />
      <p>
        Since <Latex>{"$F_{21} = -F_{12}$"}</Latex>:
      </p>
      <CenteredLatex
        text={"\\ddot{\\vec{R}} = \\frac{F_{12} - F_{21}}{m_1+m_2} = 0"}
      />
      <p>
        This means our system will be at translational equilibrium, and there
        will be a constant velocity.
      </p>
      <p>Using equation (1), and integrating both sides:</p>
      <CenteredLatex
        text={
          "\\int  \\dot{\\vec{R}}\\  dt = \\int \\frac{m_1 \\dot{\\vec{r}}_1 + m_2 \\dot{\\vec{r}}_2}{m_1 + m_2} dt"
        }
      />
      <p>
        Therefore, our final expression for the position of the center of mass
        is:
      </p>
      <CenteredLatex
        text={"\\vec{R} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2}{m_1 + m_2}"}
      />
    </section>
  );
};

export default TwoBody;
