import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }

  handleSubmit(e) {
    e.preventDefault();
    request.post('/app/login')
           .send(this.state)
           .then((user) => {
             this.updateAuth();
             let cleanUser = JSON.parse(user.text);
             console.log(cleanUser);
             this.props.router.push('/dashboard');
           });
  }

  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }

  render() {
    return (
      <div className="login-container">
        <h1>Please sign up for our mailing list</h1>
        <div className="login-form">
          <input name="email" onChange={this.handleChange} type="text" placeholder="email" />
        </div>
        <div className="password-form">
          <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
        </div>
        <div>
          <button className="log-btn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
