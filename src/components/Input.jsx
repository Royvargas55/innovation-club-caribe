import React from 'react'
import classNames from 'classnames';

// Styles
import '../styles/components/Input.scss';

const Input = ({placeholder, reference, centerPlaceholder}) => {

    const inputClass = classNames("input", {
        centerPlaceholder
    });

    return (
        <>
            <input ref={reference} className={inputClass} type="text" placeholder={placeholder}/>
        </>
    );
};

export default Input;
