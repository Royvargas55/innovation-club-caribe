import React from 'react';

// Components
import EntrepreneurshipCard from './EntrepreneurshipCard';

// Styles
import '../styles/components/ListOfEntrepreneurship.scss';

// Data
import { EntrepreneurshipsData } from '../assets/EntrepreneurshipsData'; 

const ListOfEntrepreneurship = () => {
    return (
        <>
            <ul className='entrepreneurship__list'>
                {EntrepreneurshipsData.map(entrepreneurship => (
                    <li key={entrepreneurship.id}>
                        <EntrepreneurshipCard cover={entrepreneurship.cover} name={entrepreneurship.name} path={`/people-answer/entrepreneurships/${entrepreneurship.id}`} />
                    </li>
                ))}
            </ul> 
        </>
    );
};

export default ListOfEntrepreneurship;
