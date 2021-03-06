import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserService from '../../api/user';

class Pokedexes extends Component {
  constructor () {
    super()
    this.state = {
      listPokedexes: []
    }
    this.userService = new UserService()
  }

  componentWillMount () {
    this.userService.getAllPokedexes().then((res) => {
      if (res.length) {
        this.setState({ listPokedexes: res })
      }
    })
  }

  render () {
    const { listPokedexes } = this.state
    return (
      <div className="pokedexes">
        <h1>Pokedexes</h1>
        <ul>
          {listPokedexes && listPokedexes.length > 0 && listPokedexes.map((p) => {
            return (
              <li key={p._id}>
                <Link to={`/pokedex/${p._id}`}>{p.userName}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Pokedexes;