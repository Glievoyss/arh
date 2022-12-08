import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from 'components/common/shared/PrivateRoute';
import Home from 'components/home/Home';
import Login from 'components/auth/Login';

import PageNotFound from 'components/navigation/PageNotFound/PageNotFound';

import StartPage from 'pages/StartPage/StartPage.js';

const Routs = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/start" component={StartPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routs;
