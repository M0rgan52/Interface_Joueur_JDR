import React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <Link to="Contact">
          <li>
            Nous contacter
          </li>
        </Link>
        <Link to="Mentions">
          <li>
            Mentions légales
          </li>
        </Link>
      </ul>
      <div className="formulaireDeContact">
        <p>Les BÔ Bro</p>
      </div>
      <div className="Copyright">
        <p> CCR 2023 - Tous droits réservés</p>
      </div>
    </div>
  );
}

export default Footer;

