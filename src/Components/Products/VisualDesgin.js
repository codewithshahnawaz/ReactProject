import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import { Link } from "react-router-dom";
const VisualDesgin = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  });
  if (isLoading) {
    return (
      <>
        <nav>
          <span>
            {" "}
            <Link to="/">Go Back</Link>
          </span>
          <span>
            <Link to="/product-add">Product Add</Link>
          </span>
        </nav>
        <section className={classes["section"]}>
          <div className={classes.left}>
            <img src={"assets/visual-design.svg"} alt="ProductDesign" />
          </div>
          <div className={classes.right}>
            <h1>Visual design</h1>
            <p>
              Yes, we make your software product beautiful. We also make it
              easy-to-use, compelling, and delightful.
            </p>
            <h1 style={{ fontSize: 22, fontWeight: 500 }}>TACTICS</h1>
            <div className={classes.tactic}>
              {[
                "Design workshop",
                "Custom iconography",
                "Visual design concept",
                "UI elements",
                "Typography system",
                "Style guide",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return <p>Loading Please wait...</p>;
};

export default VisualDesgin;
