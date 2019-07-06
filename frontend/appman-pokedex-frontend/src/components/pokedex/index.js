import React, { Component } from 'react';
import PokodexItem from '../pokodex-item';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class Pokedex extends Component {

  render () {
    const { pokemons } = this.props
    return (
      <div className="pokedex">
        <Link className="back" to="/pokedexes/">Back</Link>
        <h1>Pokedex #5<Link className="add-pokemon" to="/add-pokemon">Add Pokemon</Link></h1>
        <ul>
          {
            pokemons.cards.length && pokemons.cards.map(x => {
              return (
                <li key={x.id}>
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

const mapStateToProps = ({ pokemons }) => ({
  pokemons: pokemons
})


export default connect(mapStateToProps)(Pokedex);