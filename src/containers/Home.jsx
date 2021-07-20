import React from 'react'
import Button from '../components/Button/Button'

// Styles
import '../styles/components/Home.scss'

const Home = () => {

    const handleClick = () => {
        console.log('Click');
    }

    return (
        <div>
            <h1 className='title'>Innovation Club - Caribe</h1>
            <Button text='Comencemos' method={handleClick}></Button>            
        </div>
    )
}

export default Home;