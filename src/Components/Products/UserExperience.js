import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import { Link } from "react-router-dom";
const UserExperience = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let loading = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(loading);
  });
  if (isLoading) {
    return (
      <>
        <nav>
         <span> <Link to="/">Go Back</Link></span>
          <span><Link to="/product-add">Product Add</Link></span>
        </nav>

        <section className={classes["sec-dir"]}>
          <div className={classes.left}>
            <img
              src={"assets/user_experience_design.svg"}
              alt="ProductDesign"
            />
          </div>
          <div className={classes.right}>
            <nav>{/* <Link to="/">Product Details</Link> */}</nav>
            <h1>User experience design</h1>
            <p>
              Even after the Product Strategy phase, we maintain a relentless
              focus on your business goals. Our Product Design team ensures the
              product we deliver will solve your challange while meeting your
              user's needs.
            </p>
            <h1 style={{ fontSize: 22, fontWeight: 500 }}>TACTICS</h1>
            <div className={classes.tactic}>
              {[
                "Behavioral data analysis",
                "Wireframe",
                "Personalization architecture",
                "User flow",
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

export default UserExperience;
