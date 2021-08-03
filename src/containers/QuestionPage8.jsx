import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';
import QuestionNumber from '../components/QuestionNumber';
import Checkbox from '../components/Checkbox';
import BeachSVG from '../components/BeachSVG';

// Styles
import '../styles/components/QuestionPage2.scss';

const QuestionPage2 = () => {
  const [checkboxValue, setCheckboxValue] = useState('');
  const [checkedList, setCheckList] = useState({ checked: {} });

  const { checked } = checkedList;
  const checkedCount = Object.keys(checked).filter(
    (key) => checked[key]
  ).length;
  const disabled = checkedCount >= 1;

  const arrLength = 4;
  const checkbox = useRef([]);
  let db = firebase.firestore();

  if (checkbox.current.length !== arrLength) {
    // add or remove refs
    checkbox.current = Array(arrLength)
      .fill()
      .map((_el, i) => checkbox.current[i] || React.createRef());
  }

  const handleClick = () => {
    db.collection('preguntas')
      .add({
        pregunta: 7,
        respuesta: checkboxValue,
      })
      .then(() => console.log('done'));
  };

  const onSelectedChange = (index) => {
    setCheckboxValue(checkbox.current[index].current.value);
    setCheckList((prevState) => ({
      checked: {
        ...prevState.checked,
        [index]: !prevState.checked[index],
      },
    }));
  };

  let answerArray = ['2 de Julio', '31 de Agosto', '25 de Septiembre'];

  return (
    <>
      <div className="question page">
        <div className="question__number">
          <QuestionNumber number="8" />
        </div>
        <h1 className="question__title">
          ¿Cuándo se celebra el Día del Negro y la Cultura Afrocostarricense?
        </h1>
        <div className="question__radiobuttons">
          {answerArray.map((_element, index) => (
            <Checkbox
              key={index}
              handleOnChange={() => onSelectedChange(index)}
              checked={checked[index] || false}
              disabled={!checked[index] && disabled}
              radioButton
              message={_element}
              checkboxName={_element}
              checkboxValue={_element}
              reference={checkbox.current[index]}
            />
          ))}
        </div>
        <Link to="/question-9">
          <Button method={handleClick} text="Continuar"></Button>
        </Link>
      </div>
      <BeachSVG />
    </>
  );
};

export default QuestionPage2;
