import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Button from '../components/Button/Button'

// Styles
import '../styles/components/Home.scss'

const Home = () => {

    const handleClick = () => {
        console.log('Click');
    }

    return (
        <div>
            <div className='title'>
                <h2>31 de agosto</h2>
                <h1>Día de la</h1>
                <h1>Cultura Afrocostarricense</h1>
            </div>
            <Link to='/video'><Button text='Comencemos' method={handleClick}></Button>  </Link>          
        </div>
    )
}

export default Home;