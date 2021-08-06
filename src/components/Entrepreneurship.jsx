import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

// Components
import Button from '../components/Button/Button';
import WorldSVG from './WorldSVG';

// Styles
import '../styles/components/Entrepreneurship.scss';

// Data
import { EntrepreneurshipsData } from '../assets/EntrepreneurshipsData'


const Entrepreneurship = ({id}) => {
         
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const [entrepreneurship, setEntrepreneurship] = useState(
        EntrepreneurshipsData.filter(entre => entre.id === id)
    );

    useEffect(() => {
        const entre = EntrepreneurshipsData.filter(entre => entre.id === id);
        setEntrepreneurship(entre);
    }
    ,[id])


    const {cover,
        name,
        description,
        link} = entrepreneurship[0];

    return (
        <>
            <div className='entrepreneurship'>
                <div className='entrepreneurship__title'>
                    <img src={cover} alt="Logo Entrepreneurship" />
                    <h1>{name}</h1>
                </div>
                <div className='entrepreneurship__description'>
                    <div className='entrepreneurship__description__center'>
                        <p>{description}</p>
                    </div>
                    <div className='entrepreneurship__description__social'>
                        <h2 onClick={()=> openInNewTab(link)}>Página web</h2>
                        <WorldSVG />
                    </div>
                </div>
                <div className='entrepreneurship__button'>
                    <Link to='/people-answer/sello-azul'>
                        <Button text="Continuar"></Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Entrepreneurship;
