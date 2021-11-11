import React from "react";
import "./App.css";
import Header from "../src/Components/Layouts/Header";
import MoreThenSection from "./Components/Layouts/MoreThenSection";
import ProcessSection from "./Components/Layouts/ProcessSection";
import DesignService from "./Components/Layouts/DesignService";
import ProductDetails from "./Components/Products/ProductDetails";
import { Routes, Route } from "react-router-dom";
import UserExperience from "./Components/Products/UserExperience";
import VisualDesgin from "./Components/Products/VisualDesgin";
import Edit from "./Components/Edit/Edit";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <MoreThenSection />
      <ProcessSection />
      <DesignService />
      <ProductDetails
        title="User experience design"
        description="Even after the Product Strategy phase, we maintain a relentless focus on your business goals. Our Product Design team ensures the product we deliver will solve your challange while meeting your user's needs."
        tactic={[
          "Behavioral data analysis",
          "Wireframe",
          "Personalization architecture",
          "User flow",
        ]}
        imageSide={"right"}
        src={"assets/user_experience_design.svg"}
      />
      <ProductDetails
        title="Visual design"
        description="Yes, we make your software product beautiful. We also make it easy-to-use, compelling, and delightful."
        tactic={[
          "Design workshop",
          "Custom iconography",
          "Visual design concept",
          "UI elements",
          "Typography system",
          "Style guide",
        ]}
        imageSide={"left"}
        src={"assets/visual-design.svg"}
      />
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-user-experience" element={<UserExperience />} />
        <Route path="/product-visual-design" element={<VisualDesgin />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
