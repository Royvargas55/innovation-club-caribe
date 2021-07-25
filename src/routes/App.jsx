import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Video from '../containers/Video';
import DataPage from '../containers/DataPage';
import QuestionPage1 from '../containers/QuestionPage1';
import QuestionPage2 from '../containers/QuestionPage2';

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

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/data-page" component={DataPage} />
          <Route exact path="/question-1" component={QuestionPage1} />
          <Route exact path="/question-2" component={QuestionPage2} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
