import React from 'react';

// Components
import EntrepreneurshipCard from './EntrepreneurshipCard';

// Styles
import '../styles/components/ListOfEntrepreneurship.scss';

const ListOfEntrepreneurship = () => {
    return (
        <>
            <ul className='entrepreneurship__list'>
                {[1,2,3,4,5,6,7,8,9,10].map(entrepreneurship => (
                    <li>
                        <EntrepreneurshipCard path={`/people-answer/entrepreneurships`} />
                    </li>
                ))}
            </ul> 
        </>
    );
};

export default ListOfEntrepreneurship;
