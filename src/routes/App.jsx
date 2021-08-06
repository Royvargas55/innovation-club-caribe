import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
// Components
import Home from '../containers/Home';
import Video from '../containers/Video';
import DataPage from '../containers/DataPage';
import QuestionPage1 from '../containers/QuestionPage1';
import QuestionPage2 from '../containers/QuestionPage2';
import QuestionPage3 from '../containers/QuestionPage3';
import QuestionPage4 from '../containers/QuestionPage4';
import QuestionPage5 from '../containers/QuestionPage5';
import QuestionPage6 from '../containers/QuestionPage6';
import QuestionPage7 from '../containers/QuestionPage7';
import QuestionPage8 from '../containers/QuestionPage8';
import QuestionPage9 from '../containers/QuestionPage9';
import QuestionPage10 from '../containers/QuestionPage10';
import TransitionPage from '../containers/TransitionPage';
import RealAnswerPage from '../containers/RealAnswerPage';
import PeopleAnswerPage from '../containers/PeopleAnswerPage';
import PeopleAnswerQuestionsPage from '../containers/PeopleAnswerQuestionsPage';
import PeopleAnswerEntrepreneurshipsPage from '../containers/PeopleAnswerEntrepreneurshipsPage';
import PeopleAnswerSelloPage from '../containers/PeopleAnswerSelloPage';
import NoAllowedPage from '../containers/NoAllowedPage';

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
  let pathArr = location.pathname.split('/');
  pathArr = pathArr.filter((n) => n !== '');
  return pathArr.length;
};

const App = () => {
  const location = useLocation();
  const platform = navigator.platform;
  const breakpoint = 1460;

  const [prevDepth, setPrevDepth] = useState(getPathDepth(location));
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    setPrevDepth(location);
    window.addEventListener('resize', () => setIsDesktop(window.innerWidth));
  }, [prevDepth]);

  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 800, exit: 400 };

  if (!(platform.includes('Win') || platform.includes('Mac'))) {
    return <NoAllowedPage />;
  }

  if (isDesktop < breakpoint) {
    return <NoAllowedPage />;
  }

  return (
    <div className={getPathDepth(location) - prevDepth >= 0 ? 'left' : 'right'}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/data-page" component={DataPage} />

        <Route exact path="/question-1" component={QuestionPage1} />
        <Route exact path="/question-2" component={QuestionPage2} />
        <Route exact path="/question-3" component={QuestionPage3} />
        <Route exact path="/question-4" component={QuestionPage4} />
        <Route exact path="/question-5" component={QuestionPage5} />
        <Route exact path="/question-6" component={QuestionPage6} />
        <Route exact path="/question-7" component={QuestionPage7} />
        <Route exact path="/question-8" component={QuestionPage8} />
        <Route exact path="/question-9" component={QuestionPage9} />
        <Route exact path="/question-10" component={QuestionPage10} />
        <Route exact path="/transition-page" component={TransitionPage} />
        <Route exact path="/real-answer" component={RealAnswerPage} />

        <PeopleAnswerPage>
          <Route
            exact
            path="/people-answer/questions"
            component={PeopleAnswerQuestionsPage}
          />
          <Route
            exact
            path="/people-answer/entrepreneurships"
            component={PeopleAnswerEntrepreneurshipsPage}
          />
          <Route
            exact
            path="/people-answer/entrepreneurships/:id"
            component={PeopleAnswerEntrepreneurshipsPage}
          />
          <Route
            exact
            path="/people-answer/sello-azul"
            component={PeopleAnswerSelloPage}
          />
        </PeopleAnswerPage>
      </Switch>
    </div>
  );
};

export default App;
