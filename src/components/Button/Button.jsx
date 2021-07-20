import React from 'react'

//Components
import ArrowButton from './ArrowButton'

// Styles
import '../../styles/components/Button.scss';

const Button = ({text, method}) => {
    return (
        <div>
            <button className='button' onClick={method}>
                {text}
                <ArrowButton />
            </button>
        </div>
    )
}

export default Button
