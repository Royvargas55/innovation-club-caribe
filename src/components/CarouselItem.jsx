import React from 'react';

// Styles
import '../styles/components/CarouselItem.scss';

const CarouselItem = ({questionNumber, answer}) => {
    return (
        <>
            <div className='answer'>
                <div className='answer__image'></div>
                <div className='answer__content'>
                    <h1>{questionNumber}</h1>
                    <p>{answer}</p>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
