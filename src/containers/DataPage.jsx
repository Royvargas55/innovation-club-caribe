import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Components
import Input from '../components/Input';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox';
import SelectionBoxes from '../components/SelectionBoxes';
import BeachSVG from '../components/BeachSVG';

// Styles
import '../styles/components/DataPage.scss';

const DataPage = () => {
  const [showButton, setShowButton] = useState(false);
  const [scholarship, setScholarship] = useState(false);
  const { setLocalStorage } = useLocalStorage('student', {});
  const inputId = useRef('');
  const inputName = useRef('');
  let db = firebase.firestore();

  const onChangeValue = (e) => {
    setScholarship(e.target.value);
  };

  const handleClick = () => {
    const student = {
      id: inputId.current.value,
      name: inputName.current.value,
      scholarship: scholarship,
    };
    setLocalStorage(student);
    db.collection('data')
      .add(student)
      .then((docRef) => console.log('Done'));
  };

  const onChange = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      <div className="data page">
        <div className="data__form">
          <div className="data__form__inputs">
            <h1 className="data__form__inputs__id">
              ¿Cuál es tu número de cédula?
            </h1>
            <Input reference={inputId} placeholder="Tu respuesta..." />
            <h1 className="data__form__inputs__name">¿Cuál es tu nombre?</h1>
            <Input reference={inputName} placeholder="Tu respuesta..." />
          </div>
          <div className="data__form__group">
            <div>
              <h1 className="data__form__group__title">
                ¿A qué grupo perteneces?
              </h1>
              <SelectionBoxes handleChangeValue={onChangeValue} />
              <div className="data__form__group__checkbox">
                <Checkbox
                  handleOnChange={onChange}
                  message="Estoy de acuerdo con la política de uso de datos de ULACIT"
                  checkboxName="agreements"
                  checkboxValue="agree"
                />
              </div>
            </div>
          </div>
        </div>
        {showButton && (
          <div className="data__button">
            <Link to="/question-1">
              <Button method={handleClick} text="Continuar"></Button>
            </Link>
          </div>
        )}
      </div>
      <BeachSVG />
    </>
  );
};

export default DataPage;
