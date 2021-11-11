import React from "react";
import classes from "./ProductDetails.module.css";
const ProductDetails = (props) => {
  return (
    <section
      className={
        props.imageSide === "right" ? classes["sec-dir"] : classes.section
      }
    >
      <div className={classes.left}>
        <img src={props.src} alt="ProductDesign" />
      </div>
      <div className={classes.right}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h1 style={{ fontSize: 22, fontWeight: 500 }}>TACTICS</h1>
        <div className={classes.tactic}>
          {props.tactic.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
