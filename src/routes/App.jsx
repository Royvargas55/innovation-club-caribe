import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
import Home from '../containers/Home';
import Video from '../containers/Video';
import DataPage from '../containers/DataPage';
import QuestionPage1 from '../containers/QuestionPage1';
import QuestionPage2 from '../containers/QuestionPage2';
import TransitionPage from '../containers/TransitionPage';
import RealAnswerPage from '../containers/RealAnswerPage';
import PeopleAnswerPage from '../containers/PeopleAnswerPage';
import PeopleAnswerQuestionsPage from '../containers/PeopleAnswerQuestionsPage';
import PeopleAnswerEntrepreneurshipsPage from '../containers/PeopleAnswerEntrepreneurshipsPage';
import PeopleAnswerSelloPage from '../containers/PeopleAnswerSelloPage';

// Transition Styles
import '../styles/components/slideTransition.scss';

// Prototype configuration
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

const getPathDepth = (location) => {
  let pathArr = location.pathname.split("/");
  pathArr = pathArr.filter(n => n !== "");
  return pathArr.length;
};

const App = () => {
  
  const location = useLocation();

  const [prevDepth, setPrevDepth] = useState(getPathDepth(location));

  useEffect(() => {
    setPrevDepth(location);
  }, [prevDepth]);

  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 800, exit: 400 };

  return (
      <TransitionGroup component='div' className='app'>
        <CSSTransition
          key={currentKey} 
          timeout={timeout} 
          classNames='pageSlider' 
          mountOnEnter={false} 
          unmountOnExit={true}
        >
          <div className={
              getPathDepth(location) - prevDepth >= 0 
              ? 'left' 
              : 'right'
            }
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/video" component={Video} />
              <Route exact path="/data-page" component={DataPage} />
              <Route exact path="/question-1" component={QuestionPage1} />
              <Route exact path="/question-2" component={QuestionPage2} />
              <Route exact path="/transition-page" component={TransitionPage} />
              <Route exact path="/real-answer" component={RealAnswerPage} />
              <PeopleAnswerPage>
                <Route exact path="/people-answer/questions" component={PeopleAnswerQuestionsPage} />
                <Route exact path="/people-answer/entrepreneurships" component={PeopleAnswerEntrepreneurshipsPage} />
                <Route exact path="/people-answer/sello-azul" component={PeopleAnswerSelloPage} />
              </PeopleAnswerPage>
            </Switch>
          </div>
        </CSSTransition>
        </TransitionGroup>
  );
};

export default App;
