import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import CommunicationSVG from './CommunicationSVG';
import IdeaSVG from './IdeaSVG';
import SelloAzulSVG from './SelloAzulSVG';
import TurtleSVG from '../components/TurtleSVG';

// Styles
import '../styles/components/Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  const ROUTE_QUESTIONS = '/people-answer/questions';
  const ROUTE_ENTREPRENEURSHIP = '/people-answer/entrepreneurships';
  const ROUTE_SELLO = '/people-answer/sello-azul';

  return (
    <>
      {location.pathname.includes(ROUTE_QUESTIONS) ? <TurtleSVG /> : ''}
      <nav className="navbar">
        <ul className="navbar__ul">
          <div
            className={
              location.pathname.includes(ROUTE_QUESTIONS)
                ? 'navbar__ul__item__selected'
                : 'navbar__ul__item'
            }
          >
            <CommunicationSVG />
            <li>Pregunta</li>
          </div>
          <div
            className={
              location.pathname.includes(ROUTE_ENTREPRENEURSHIP)
                ? 'navbar__ul__item__selected'
                : 'navbar__ul__item'
            }
          >
            <IdeaSVG />
            <li>Emprendimientos</li>
          </div>
          <div
            className={
              location.pathname.includes(ROUTE_SELLO)
                ? 'navbar__ul__item__selected'
                : 'navbar__ul__item'
            }
          >
            <SelloAzulSVG />
            <li>Sello Azul</li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
