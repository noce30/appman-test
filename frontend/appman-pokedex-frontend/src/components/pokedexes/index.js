import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Pokedexes extends Component {
  render () {
    return (
      <div className="pokedexes">
        <h1>Pokedexes</h1>
        <ul>
          <li>
            <Link to="/pokedex/1">aun</Link>
          </li>
          <li>
            <Link to="/pokedex/2">12</Link>
          </li>
          <li>
            <Link to="/pokedex/3">may</Link>
          </li>
          <li>
            <Link to="/pokedex/4">holly</Link>
          </li>
          <li>
            <Link to="/pokedex/5">noce30</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pokedexes;