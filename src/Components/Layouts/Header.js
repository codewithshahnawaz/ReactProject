import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <nav>
          <Link to="/edit">Product Details</Link>
          {/* <Link to="/">Product Details</Link> */}
        </nav>
        <div className={classes.wrapper}>
          <h1>Product Design</h1>
          <p>
            Our multifaceted apps are built and developed to multiple platforms,
            including both Android and iOS, making apps accessible for all
          </p>
        </div>
      </div>
      <div className={classes.right}>
        <img src={"assets/Product_Design.png"} alt="ProductDesign" />
      </div>
    </header>
  );
};

export default Header;
