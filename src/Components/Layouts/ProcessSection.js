import React from "react";
import classes from "./ProcessSection.module.css";
const ProcessSection = () => {
  return (
    <section className={classes["process-section"]}>
      <div className={classes.wrapper}>
        <h1>Our Design Process</h1>
        <p>
          Every decision we make is informed and goal oriented with user journey
          in mind. Designing with a
        </p>
      </div>
      <div className={classes.circle}>
        <p>
          We sit down with you to discuss your business goals and your target
          audience. We determine the problems you are trying to solve, and
          together, we define the key features of the app/software you're trying
          to build.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
