import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CommunicationSVG from './CommunicationSVG';
import IdeaSVG from './IdeaSVG';
import SelloAzulSVG from './SelloAzulSVG';

// Styles
import '../styles/components/Navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__ul">
          <div>
            <Link>
              <CommunicationSVG />
              <li>Pregunta</li>
            </Link>
          </div>
          <div>
            <Link>
              <IdeaSVG />
              <li>Emprendimientos</li>
            </Link>
          </div>
          <div>
            <Link>
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
