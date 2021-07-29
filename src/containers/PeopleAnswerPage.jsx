import React from 'react';

// Components
import Navbar from '../components/Navbar';

// Styles
import '../styles/components/PeopleAnswerPage.scss';

const PeopleAnswerPage = ({ children }) => {
    return (
        <>  
            <div className='peopleanswer pageDown'>
                <Navbar />
                {children}
            </div>
        </>
    );
};

export default PeopleAnswerPage;
