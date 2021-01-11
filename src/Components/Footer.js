import React from "react";
import "../Styles/Home.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="containerFooter">
          <div className="contentLogo">
            <div className="nameFooter">Dr</div>
            <p>© 2020 DanielRF.com All Rights Reserved</p>
          </div>
          <div className="contact">
            <h4>Contacto</h4>
            <p>rodriguezdaniel048@gmail.com</p>
            <p>+57 3053907367</p>
          </div>
          <div className="social">
            <h4>Redes</h4>
            <p>@daniel31168</p>
            <p>Daniel Rodriguez</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
