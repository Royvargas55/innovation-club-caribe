import React from 'react';

// Styles
import '../styles/components/QuestionNumber.scss';

const QuestionNumber = ({number}) => {
    return (
        <>
            <div className='container'>
                <span className='container__number'>{number}</span>
            </div>
        </>
    );
};

export default QuestionNumber;
