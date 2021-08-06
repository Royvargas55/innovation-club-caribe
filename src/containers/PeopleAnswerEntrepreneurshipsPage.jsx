import React from 'react';
import { useParams } from "react-router-dom";

// Components
import ListOfEntrepreneurship from '../components/ListOfEntrepreneurship';
import Entrepreneurship from '../components/Entrepreneurship';

// Styles
import '../styles/components/PeopleAnswerEntrepreneurshipsPage.scss';

const PeopleAnswerEntrepreneurshipsPage = () => {
    const { id } = useParams();

    return (
        <div className='people__entrepreneurships__page'>
            <ListOfEntrepreneurship />
            { id ? 
            (<Entrepreneurship id={id}/>) : 
            (<h1 className='people__entrepreneurships__page__title'>Empieza a descubrir nuevos emprendimientos!</h1>)
            }
            
        </div>
    );
};

export default PeopleAnswerEntrepreneurshipsPage;
