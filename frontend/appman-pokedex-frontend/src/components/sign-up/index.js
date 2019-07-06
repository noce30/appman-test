import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    password: '',
    userName: ''
  }

  onInputChange (e) {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleCreateAccount () {
    //handle create here
    this.props.history.push('/login')
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
          <button className="action" onClick={() => this.handleCreateAccount()}>Create Account</button>
        </div>
        <Link to="/login/">Already have an account?</Link>
      </div>
    );
  }
}

export default SignUp;