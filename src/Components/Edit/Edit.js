import React, { useRef, useState } from "react";
import classes from "./Edit.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, addText } from "../../app/store";

const Profile = () => {
  const totalInputs = useSelector((state) => state.totalInput.value);
  const inputs = useSelector((state) => state.inputs.value);
  const title = useRef();
  const descr = useRef();
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const FormControl = (event) => {
    event.preventDefault();
    dispatch(addText(text));
  };
  return (
    <section className={classes.profile}>
      <div className={classes.left}>
        <nav>
          <Link to="/">Go Back</Link>
          {/* <Link to="/">Product Details</Link> */}
        </nav>

        <div className={classes.wrapper}>
         
          <h1 ref={title}>Product Design</h1>
          <p ref={descr}>
            Our multifaceted apps are built and developed to multiple platforms,
            including both Android and iOS, making apps accessible for all
          </p>
          {inputs.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
      <button
        className={classes.btn}
        onClick={() => {
          title.current.contentEditable = true;
          descr.current.contentEditable = true
        }}
      >
        Edit
      </button>
      <div className={classes.right}>
        <img src={"assets/Product_Design.png"} alt="ProductDesign" />
      </div>
    </section>
  );
};

export default Profile;
