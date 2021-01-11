import React from "react";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="site-content">
        <div className="containerHome">
          <h1 className="title-center">
            HOLA MUNDO
            <span className="parpadea text">
              <strong>|</strong>
            </span>
          </h1>
        </div>
        <Portfolio active={false} />
      </div>
    </>
  );
};

export default Home;
