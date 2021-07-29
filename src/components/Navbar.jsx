import React from "react";
import { Link } from "react-router-dom";

// Components
import CommunicationSVG from "./CommunicationSVG";
import IdeaSVG from "./IdeaSVG";
import SelloAzulSVG from "./SelloAzulSVG";

// Styles
import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__ul">
          <div>
            <Link to="/people-answer/questions">
              <CommunicationSVG />
              <li>Pregunta</li>
            </Link>
          </div>
          <div>
            <Link to="/people-answer/entrepreneurships">
              <IdeaSVG />
              <li>Emprendimientos</li>
            </Link>
          </div>
          <div>
            <Link to="/people-answer/sello-azul">
              <SelloAzulSVG />
              <li>Sello Azul</li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
