import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    password: '',
    userName: ''
  }

  onInputChange (e) {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleLogin () {
    //handle login here
    this.props.history.push('/pokedexes')
  }

  render () {
    const { password, userName } = this.state
    return (
      <div className="clearfix">
        <h1>Sign In to Pokemon Trainer Account</h1>
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
          <button className="action" onClick={() => this.handleLogin()}>Sign In</button>
        </div>
        <Link to="/signup/">Don't have an account?</Link>
      </div>
    );
  }
}

export default Login;