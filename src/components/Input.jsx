import React from 'react'

// Styles
import '../styles/components/Input.scss';

const Input = ({placeholder, reference}) => {
    return (
        <>
            <input ref={reference} className='input' type="text" placeholder={placeholder}/>
        </>
    );
};

export default Input;
