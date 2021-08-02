import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Carousel } from '../components/Carousel';
import ArrowBottomSVG from '../components/Arrow/ArrowBottomSVG';

// Questions Data
import { QuestionData } from '../assets/QuestionData';

// Styles
import '../styles/components/RealAnswerPage.scss';

const RealAnswerPage = () => {
    return (
        <>  
            <div className='realanswer page pageDown'>
                <div className='realanswer__content'>
                    <Carousel questions={QuestionData} space/>
                </div>
                <div className='realanswer__more'>
                    <p>Conocer las respuestas de los demás</p>
                    <div className='realanswer__more--action'>
                        <Link to='/people-answer/questions'><ArrowBottomSVG /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RealAnswerPage;
