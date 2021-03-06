import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import Dashboard from '../components/Dashboard.jsx';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Route>
    </Router>
  );
};

export default Routes;
