import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li><Link className="home" to="/">Home</Link></li>
          <li><Link className="login" to="/login">Login</Link></li>
          <li><Link className="register" to="/register">Register</Link></li>
        </ul>
        <div id="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
