import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';

// Styles
import '../styles/components/Home.scss';

const Home = () => {

    const handleClick = () => {
        console.log('Click');
    };

    return (
        <div>
            <div className='home'>
                <div className='home__title'>
                    <h2 className='home__title__date'>31 de agosto</h2>
                    <h1 className='home__title__day'>Día de la</h1>
                    <h1 className='home__title__day'>Cultura Afrocostarricense</h1>
                </div>
                <div className='home__button'>
                    <Link to='/video'><Button text='Comencemos' method={handleClick}></Button></Link>
                </div>
            </div>        
        </div>
    );
};

export default Home;