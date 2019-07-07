import React, { Component } from 'react';
import PokodexItem from '../pokodex-item';
import { Link } from "react-router-dom";
import PokemonService from '../../api/pokemon';

class AddPokemon extends Component {
  constructor () {
    super()
    this.pokemonService = new PokemonService()
    this.state = {
      pokemons: [],
      filteredpokemons: []
    }
    this.currentUserId = sessionStorage.getItem("currentUserId")
  }

  componentWillMount () {
    this.pokemonService.getAllPokemons().then((res) => {
      if (res) {
        this.setState({ pokemons: res, filteredpokemons: res })
      }
    })
  }

  handleSearch (e) {
    const keySearch = e.target.value
    const pokemons = [...this.state.pokemons]
    if (keySearch.length) {
      const filterName = pokemons.filter(x => x.name.length && x.name.toLowerCase().includes(keySearch.toLowerCase()))
      const notFilterName = pokemons.filter(x => x.name.length && !x.name.toLowerCase().includes(keySearch.toLowerCase()))
      const filterType = notFilterName.filter(x => x.type.length && x.type.toLowerCase().includes(keySearch.toLowerCase()))
      const filteredpokemons = filterName.concat(filterType)
      this.setState({ filteredpokemons: filteredpokemons })
    } else {
      this.setState({ filteredpokemons: pokemons })
    }
  }

  render () {
    const { filteredpokemons } = this.state
    return (
      <div className="pokedex">
        <Link className="back" to={`/pokedex/${this.currentUserId}`}>Back</Link>
        <h1>Add pokemon to pokedex #5</h1>
        <div className="form-group">
          <input
            name="query"
            type="query"
            placeholder="Search pokemons"
            className="form-control"
            onChange={(e) => this.handleSearch(e)}
          />
        </div>
        <ul>
          {
            filteredpokemons && filteredpokemons.length > 0 && filteredpokemons.map(x => {
              return (
                <li key={x.id}>
                  <PokodexItem item={x} isShowAddButton />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default AddPokemon;