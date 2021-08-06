import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/components/EntrepreneurshipCard.scss';

const EntrepreneurshipCard = ({ cover, name, path }) => {
  return (
    <>
      <Link to={path}>
        <div className="entrepreneurship__card">
          <h1>{name}</h1>
        </div>
      </Link>
    </>
  );
};

export default EntrepreneurshipCard;
