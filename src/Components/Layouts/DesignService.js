import React from "react";
import classes from "./DesignService.module.css";
import { Link } from "react-router-dom";
const DesignService = () => {
  return (
    <section className={classes["design-section"]}>
      <h1>Product Design Services</h1>
      <div className={classes.wrapper}>
        <span>
          <Link to="/product-user-experience">User experience design</Link>
        </span>
        {/* product-user-experience */}
        <span>
          <Link to="/product-visual-design">Visual design</Link>
        </span>
      </div>
    </section>
  );
};

export default DesignService;
