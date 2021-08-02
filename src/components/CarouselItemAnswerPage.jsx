import React from 'react';

// Styles
import '../styles/components/CarouselItemAnswerPage.scss';

const CarouselItemAnswerPage = ({questionNumber, answer}) => {
    return (
        <>
            <div className='peopleanswer__item'>
                <h1>{questionNumber}</h1>
                <p>{answer}</p>
            </div>
        </>
    )
};

export default CarouselItemAnswerPage;
