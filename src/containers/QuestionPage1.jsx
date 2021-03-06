import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';
import Button from '../components/Button/Button';
import QuestionNumber from '../components/QuestionNumber';
import BeachSVG from '../components/BeachSVG';

// Styles
import '../styles/components/QuestionPage1.scss';

let db = firebase.firestore();

const QuestionPage1 = () => {
  const inputAnswer = useRef(null);

  const handleClick = () => {
    db.collection('preguntas')
      .add({
        pregunta: 0,
        respuesta: inputAnswer.current.value,
      })
      .then(() => console.log('done'));
  };

  return (
    <>
      <div className="question page">
        <div className="question__number">
          <QuestionNumber number="1" />
        </div>
        <h1 className="question__title">
          ¿Por qué se celebra el Día del Negro y la Cultura Afrocostarricense el
          31 de agosto?
        </h1>
        <div className="question__input">
          <Input
            reference={inputAnswer}
            placeholder="Tu respuesta..."
            centerPlaceholder
          />
        </div>
        <Link to="/question-2">
          <Button method={handleClick} text="Continuar"></Button>
        </Link>
      </div>
      <BeachSVG />
    </>
  );
};

export default QuestionPage1;
