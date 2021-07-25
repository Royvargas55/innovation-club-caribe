import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';
import QuestionNumber from '../components/QuestionNumber';
import Checkbox from '../components/Checkbox';

// Styles
import '../styles/components/QuestionPage2.scss'; 

const QuestionPage2 = () => {
    const [checkboxValue, setCheckboxValue] = useState('');
    const [checkedList, setCheckList] = useState({ checked: {} });

    const { checked } = checkedList;
    const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
    const disabled = checkedCount >= 1;

    const arrLength = 4;
    const checkbox = useRef([]);

    if (checkbox.current.length !== arrLength) {
        // add or remove refs
        checkbox.current = Array(arrLength).fill().map((_el, i) => checkbox.current[i] || React.createRef());
      }

    const handleClick = () => {
        console.log(checkboxValue);
    };

    const onSelectedChange = index => {
        setCheckboxValue(checkbox.current[index].current.value);
        setCheckList(prevState  => ({
            checked: {
            ...prevState.checked,
            [index]: !prevState.checked[index]
          }
        }));
    };

    return (
        <>
             <div className='question'>
                <div className='question__number'>
                    <QuestionNumber number='2'/>
                </div>
                <h1 className='question__title'>¿Pregunta sobre la cultura afrocostarricense?</h1>
                <div className='question__radiobuttons'>
                {Array.from({ length: 4 }, (_element, index) => (
                    <Checkbox
                        key={index} 
                        handleOnChange={() => onSelectedChange(index)}
                        checked={checked[index] || false}
                        disabled={!checked[index] && disabled}
                        radioButton
                        message={`Respuesta #${index+1}`}
                        checkboxName={`Question#${index+1}`}
                        checkboxValue={`Answer#${index+1}`}
                        reference={checkbox.current[index]}
                    />
                ))}
                </div>
                <Link to='/question-2'><Button method={handleClick} text='Continuar'></Button></Link>
            </div>
        </>
    );
};

export default QuestionPage2;
