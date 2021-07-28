import React, { useState }  from 'react';

// Components
import ArrowRightSVG from './Arrow/ArrowRightSVG';
import ArrowLeftSVG from './Arrow/ArrowLeftSVG';
import CarouselItem from './CarouselItem';

// Styles
import '../styles/components/Carousel.scss';

export const mockData = [
    {question:'Pregunta #1', answer: 'respuesta 1'},
    {question:'Pregunta #2', answer: 'respuesta 2'},
    {question:'Pregunta #3', answer: 'respuesta 3'},
    {question:'Pregunta #4', answer: 'respuesta 4'}    
];

export const Carousel = ({ questions }) => {
    const [current, setCurrent] = useState(0);
    const length = questions.length;

    const nextQuestion = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevQuestion = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(questions) || questions.length <= 0) {
        return null;
    }

    return (
        <>
            <section className='carousel'>
                <div className='carousel__left__arrow'>
                    <button 
                        className='carousel__right__arrow__button' 
                        onClick={prevQuestion}
                    >
                        <ArrowLeftSVG />
                    </button>
                </div>
                <div className='carousel__right__arrow'>
                    <button 
                        className='carousel__right__arrow__button' 
                        onClick={nextQuestion}>
                            <ArrowRightSVG />
                    </button>
                </div>
                {mockData.map((question, index) => {
                    return (
                    <div
                        className={index === current ? 'carousel__item active' : 'carousel__item'}
                        key={index}
                    >
                        {index === current && (
                            <CarouselItem 
                                questionNumber={question.question} 
                                answer={question.answer}
                            />
                        )}
                    </div>
                    );
                })}
            </section>   
        </>
    );
};
