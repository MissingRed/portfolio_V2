import React from "react";
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Cv = () => {
  return (
    <>
      <Navbar />
      <div className="containerCv">
        <img src="Images/CV_DANIELRF.png" alt="Hoja_vida" className="cv" />
      </div>
      <Footer />
    </>
  );
};

export default Cv;
