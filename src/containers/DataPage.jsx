import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';
import Button from '../components/Button/Button'

// Styles
import '../styles/components/DataPage.scss';

const DataPage = () => {
    return (
        <>
            <div className='data'>
                <div className='data__form'>
                    <div className='data__form__inputs'>
                        <h1 className='data__form__inputs__id'>¿Cuál es tu número de cédula?</h1>
                        <Input placeholder='Tu respuesta...'/>
                        <h1 className='data__form__inputs__name'>¿Cuál es tu nombre?</h1>
                        <Input placeholder='Tu respuesta...'/>
                    </div>
                    <div className='data__form__group'>

                    </div>
                </div>
                <div className='data__button'>
                    <Link to='/video'><Button text='Continuar'></Button></Link>
                </div>
            </div>
        </>
    )
};

export default DataPage;
