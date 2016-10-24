import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import ThankYou from '../components/ThankYou.jsx';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/thankyou" component={ThankYou} />
      </Route>
    </Router>
  );
};

export default Routes;
