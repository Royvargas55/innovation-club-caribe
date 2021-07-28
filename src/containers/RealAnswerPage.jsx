import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Carousel, mockData } from '../components/Carousel';
import ArrowBottomSVG from '../components/Arrow/ArrowBottomSVG';

// Styles
import '../styles/components/RealAnswerPage.scss';

const RealAnswerPage = () => {
    return (
        <>  
            <div className='realanswer page pageDown'>
                <div className='realanswer__content'>
                    <Carousel questions={mockData} />
                </div>
                <div className='realanswer__more'>
                    <p>Conocer las respuestas de los demás</p>
                    <div className='realanswer__more--action'>
                        <Link to='/people-answer'><ArrowBottomSVG /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RealAnswerPage;
