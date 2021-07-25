import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';
import Button from '../components/Button/Button';
import QuestionNumber from '../components/QuestionNumber';

// Styles
import '../styles/components/QuestionPage1.scss'; 

const QuestionPage1 = () => {
    const inputAnswer = useRef('');

    const handleClick = () => {

    };

    return (
        <>
            <div className='question'>
                <div className='question__number'>
                    <QuestionNumber number='1'/>
                </div>
                <h1 className='question__title'>¿Pregunta sobre la cultura afrocostarricense?</h1>
                <div className='question__input'>
                    <Input
                        reference={inputAnswer} 
                        placeholder='Tu respuesta...'
                        centerPlaceholder
                    />
                </div>
                <Link to='/question-2'><Button method={handleClick} text='Continuar'></Button></Link>
            </div>
        </>
    );
};

export default QuestionPage1;
