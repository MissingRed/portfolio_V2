import React from "react";
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Portfolio = (props) => {
  return (
    <>
      {props.active === false ? "" : <Navbar />}
      <div className="containerProjects">
        <ul>
          <li className="select">Todos</li>
          <li>React</li>
          <li>Angular</li>
          <li>Backend</li>
        </ul>
      </div>
      <div className="project-grid containerProjects">
        <a href="https://tasklink.vercel.app/">
          <div className="item">
            <span className="emoji code">
              <img src="Images/Logo.svg" alt="codeshop" />
              <img src="Images/Codeshop.png" alt="code" />
            </span>

            <div className="item-hover">
              <p>Code Shop</p>
              <span className="tag">Ir al Sitio Web</span>
            </div>
          </div>
        </a>
        <a href="https://tasklink.vercel.app/">
          <div className="item">
            <span className="emoji task">
              <p>Tasklink</p>
              <img src="images/Tasklink.png" alt="task" />
            </span>

            <div className="item-hover">
              <p>Tasklink</p>
              <span className="tag">Ir al Sitio Web</span>
            </div>
          </div>
        </a>
        <a href="https://preguntados-usc-ionic.vercel.app/">
          <div className="item">
            <span className="emoji">
              <img src="images/preguntadosUSC.png" alt="USC"></img>
              <br />
              <img src="images/Preguntados_USC_cap.jpeg" alt="USC"></img>
            </span>
            <div className="item-hover">
              <p>Preguntados USC</p>
              <span className="tag">Ir al Sitio Web</span>
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
