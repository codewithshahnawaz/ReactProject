import React from "react";
import classes from "./MoreThenSection.module.css";
const MoreThenSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.left}>
        <img src={"assets/more_than_visual_design.png"} alt="ProductDesign" />
      </div>
      <div className={classes.right}>
        <h1>More than visual design, more than interactions.</h1>
        <p>
          We take pride in our craft. Drawing on our deep expertise in our
          design, our Product Design team cares for your users' experience over
          the entire customer journey, at every touchpoint with your company.
        </p>
        <br />
        <p>
          We shepherd your product through the entire design process. We aim to
          achieve.
        </p>
        <br />
        <br />
        <p>
          We also collaborate with our Software Engineering team to ensure our
          designs are technically freasible within the constraints of the
          project. At the same time, we're watching for innovative new
          technologies that can make the experience more seamless.
        </p>
      </div>
    </section>
  );
};

export default MoreThenSection;
