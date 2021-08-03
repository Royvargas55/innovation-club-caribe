import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/components/EntrepreneurshipCard.scss';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const EntrepreneurshipCard = ({cover = DEFAULT_IMAGE, name = 'Emprendimiento', path}) => {
    return (
        <>
        <Link to={path}>
            <div className='entrepreneurship__card'>
                <img src={cover} alt='Imagén del emprendimiento' />
                <h1>{name}</h1>      
            </div>
        </Link>
        </>
    );
};

export default EntrepreneurshipCard;
