import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Components
import Input from '../components/Input';;
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox';

// Styles
import '../styles/components/DataPage.scss';

const DataPage = () => {
    const [showButton, setShowButton] = useState(false);
    const { setLocalStorage } = useLocalStorage('student', {});
    const inputId = useRef('');
    const inputName = useRef('');

    const handleClick = () => {
        const student = {
            'id': inputId.current.value,
            'name': inputName.current.value,
            'scholarship': 'none',
        }
        setLocalStorage(student);
    }

    const onChange = () => {
        setShowButton(!showButton);
    };

    return (
        <>
            <div className='data'>
                <div className='data__form'>
                    <div className='data__form__inputs'>
                        <h1 className='data__form__inputs__id'>¿Cuál es tu número de cédula?</h1>
                        <Input
                            reference={inputId} 
                            placeholder='Tu respuesta...'
                        />
                        <h1 className='data__form__inputs__name'>¿Cuál es tu nombre?</h1>
                        <Input
                            reference={inputName}  
                            placeholder='Tu respuesta...'
                        />
                    </div>
                    <div className='data__form__group'>
                        <h1>¿A qué grupo perteneces?</h1>
                        {/*Botones*/}
                        <Checkbox 
                            handleOnChange={onChange}
                            message='Estoy de acuerdo con la política de uso de datos'
                            checkboxName='agreements'
                            checkboxValue='agree'
                        />
                    </div>
                </div>
                {showButton &&
                    <div className='data__button'>
                       <Link to='/question-1'><Button method={handleClick} text='Continuar'></Button></Link>
                   </div>     
                }
            </div>
        </>
    )
};

export default DataPage;
