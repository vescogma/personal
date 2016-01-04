import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from '../containers/App';
import Main from '../containers/Main';

export default (
  <Router path="/" component={ App }>
    <IndexRoute component={ Main } />
    <Route path="/main" component={ Main }/>
  </Router>
);
