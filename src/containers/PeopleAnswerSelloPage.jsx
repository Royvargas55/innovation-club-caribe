import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';
import Button from '../components/Button/Button';

// Styles
import '../styles/components/PeopleAnswerSelloPage.scss'
import LogoUlacit from '../assets/LogoUlacit.png';

const PeopleAnswerSelloPage = () => {
    const inputEmail = useRef('');

    const handleClick = () => {
        console.log(inputEmail.current.value);
    }

    return (
        <>
            <div className='final'>
                <div className='final__title'>
                    <div className='final__title__rect'></div>
                    <h1>¡Felicidades!</h1>
                </div>
                <div className='final__subtitle'>
                    <p>Completaste un sello azul. ¿Gustas que te enviemos confirmación a tu correo? Ingrésalo aquí:</p>
                </div>
                <div className='final__confirm'>
                    <Input reference={inputEmail} placeholder="Tu respuesta..." />
                    <Link to="/people-answer/sello-azul">
                        <Button method={handleClick} text="Continuar"></Button>
                    </Link>
                </div>
                <footer className='final__footer'>
                    <p>Creado por:<br /> 
                        Karl Aase<br />
                        Alek Castillo<br />
                        Andre Lopez<br />
                        Roy Vargas
                    </p>
                    <img src={LogoUlacit} alt="Logo Ulacit" />
                </footer>
            </div>
        </>
    );
};

export default PeopleAnswerSelloPage;
