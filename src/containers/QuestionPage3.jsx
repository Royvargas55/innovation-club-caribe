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

const QuestionPage3 = () => {
  const inputAnswer = useRef(null);

  const handleClick = () => {
    db.collection('preguntas')
      .add({
        pregunta: 2,
        respuesta: inputAnswer.current.value,
      })
      .then(() => console.log('done'));
  };

  return (
    <>
      <div className="question page">
        <div className="question__number">
          <QuestionNumber number="3" />
        </div>
        <h1 className="question__title">
          Mencione 2 instrumentos musicales de Origen Afrodescendiente
        </h1>
        <div className="question__input">
          <Input
            reference={inputAnswer}
            placeholder="Tu respuesta..."
            centerPlaceholder
          />
        </div>
        <Link to="/question-4">
          <Button method={handleClick} text="Continuar"></Button>
        </Link>
      </div>
      <BeachSVG />
    </>
  );
};

export default QuestionPage3;
