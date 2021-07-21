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
            <div className='title'>
                <h2>31 de agosto</h2>
                <h1>Día de la</h1>
                <h1>Cultura Afrocostarricense</h1>
            </div>
            <Button text='Comencemos' method={handleClick}></Button>            
        </div>
    )
}

export default Home;