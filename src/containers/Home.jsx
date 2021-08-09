import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';
import HomeRailsSVG from '../components/HomeRailsSVG';

// Styles
import '../styles/components/Home.scss';

const Home = () => {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div class="home_container">
      <HomeRailsSVG />
      <div className="home page">
        <div className="home__title">
          <h2 className="home__title__date">31 de agosto</h2>
          <h1 className="home__title__day">Día de la</h1>
          <h1 className="home__title__day">Cultura Afrocostarricense</h1>
          <br />
        </div>
        <div className="home__button">
          <Link to="/video">
            <Button text="Comencemos" method={handleClick}></Button>
          </Link>
          <span className="home__title__by">
            <i>Por el Innovation Club</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
