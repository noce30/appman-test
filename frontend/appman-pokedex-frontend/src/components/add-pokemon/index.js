import React, { Component } from 'react';
import PokodexItem from '../pokodex-item';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class AddPokemon extends Component {
  render () {
    const { pokemons } = this.props
    return (
      <div className="pokedex">
        <Link className="back" to="/pokedex/5">Back</Link>
        <h1>Add pokemon to pokedex #5</h1>
        <form>
          <div className="form-group">
            <input id="query" name="query" type="query" placeholder="Search pokemons" className="form-control" />
          </div>
        </form>
        <ul>
          {
            pokemons.cards.length && pokemons.cards.map(x => {
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

const mapStateToProps = ({ pokemons }) => ({
  pokemons: pokemons
})


export default connect(mapStateToProps)(AddPokemon);