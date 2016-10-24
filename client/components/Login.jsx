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
  }

  handleChange(e) {
    const input = e.target;
    console.log(input);
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    console.log(updated);
    this.setState(updated);
  }
}
