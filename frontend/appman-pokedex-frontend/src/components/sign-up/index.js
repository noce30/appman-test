import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserService from '../../api/user';

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      password: '',
      userName: ''
    }
    this.userService = new UserService()
  }

  onInputChange (e) {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleCreateAccount () {
    const { password, userName } = this.state
    if (!password.length || !userName.length) {
      alert('Plesase input user name!')
    }
    else {
      this.userService.signUp(this.state).then((res) => {
        if (res.message) {
          alert(res.message)
        }
        else {
          this.props.history.push('/login')
        }
      })
    }
  }

  render () {
    const { password, userName } = this.state
    return (
      <div className="clearfix">
        <h1>Create Pokemon Trainer Account</h1>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            name="userName"
            placeholder="Username"
            className="form-control"
            onChange={(e) => this.onInputChange(e)}
            value={userName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={(e) => this.onInputChange(e)}
            value={password}
          />
        </div>
        <div>
          <button className="action" onClick={this.handleCreateAccount.bind(this)}>Create Account</button>
        </div>
        <Link to="/login/">Already have an account?</Link>
      </div>
    );
  }
}

export default SignUp;