import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen}></Route>
          <Route exact path='/search' component={SearchScreen} />
          <Route path='/' component={DashboardRoutes}></Route>
        </Switch>
      </div>
    </Router>
  );
};
