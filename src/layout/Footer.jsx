import React from "react";
import Test from '../assets/logo.jpg';
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
        <img src={Test} alt="logo"/>
        <p>Les BÔ Bro</p>
    </div>
  );
}

export default Footer;

