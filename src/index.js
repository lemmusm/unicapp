import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/scss/style.css';

ReactDOM.render(
  <Router>
    <Switch>
      {indexRoutes.map((route, key) => {
        return (
          <Route key={key} path={route.path} component={route.component} />
        );
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);
