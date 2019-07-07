import React, { Component } from 'react';
import PokodexItem from '../pokodex-item';
import { Link } from "react-router-dom";
import UserService from '../../api/user';

class Pokedex extends Component {
  constructor () {
    super()
    this.userService = new UserService()
    this.state = { pokemons: [] }
  }

  checkCurrentUser () {
    const currentUserId = sessionStorage.getItem("currentUserId");
    const { id } = this.props.match.params
    return currentUserId === id
  }

  componentWillMount () {
    const { id } = this.props.match.params
    this.userService.getAllPokedexes().then((res) => {
      if (res) {
        const pokemons = res.find(x => x._id === id).pokemons
        const index = res.findIndex(x => x._id === id) + 1
        this.setState({ pokemons: pokemons, index: index })
      }
    })
  }

  render () {
    const { pokemons } = this.state
    return (
      <div className="pokedex">
        <Link className="back" to="/pokedexes/">Back</Link>
        <h1>
          Pokedex #{this.state.index}
          {this.checkCurrentUser() && <Link className="add-pokemon" to="/add-pokemon">Add Pokemon</Link>}
        </h1>
        <ul>
          {
            pokemons.length > 0 && pokemons.map((x, i) => {
              return (
                <li key={i}>
                  <PokodexItem item={x} />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Pokedex;