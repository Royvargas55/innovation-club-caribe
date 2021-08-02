import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Carousel } from '../components/Carousel';
import Button from '../components/Button/Button';

// Styles
import '../styles/components/PeopleAnswerQuestionsPage.scss';

// TO DO: Consume API
const MockData = [
    {
        question:'Pregunta #1', 
        answer: 'respuesta 1'
    },
    {
        question:'Pregunta #2', 
        answer: 'respuesta 2'
    },
    {
        question:'Pregunta #3', 
        answer: 'respuesta 3'
    },
    {
        question:'Pregunta #4', answer: 'respuesta 4'
    }    
];

const PeopleAnswerQuestionsPage = () => {
    return (
        <>
            <div className='peoplequestion'>
                <div className='peoplequestion__content'>
                    <Carousel questions={MockData} />
                </div>
                <div className="peoplequestion__button">
                    <Link to="/people-answer/entrepreneurships">
                        <Button text="Continuar"></Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PeopleAnswerQuestionsPage;
