import React from "react";
import {Link} from "react-router-dom";
// import Logo from '../assets/Logo.png';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
          {/* <img src={Logo} alt="logo_de_kasa"/> */}
        </div>
            <div className="navbar__links">
             <Link to="/">
             <p>Accueil</p>
             </Link>
             <Link to="/About">
             <p>A propos</p>
             </Link>
           </div>
    </nav>
  );
}

export default Navbar;

