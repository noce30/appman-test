import React from 'react';
import Login from './components/login';
import SignUp from './components/sign-up';
import Pokedexes from './components/pokedexes';
import Pokedex from './components/pokedex';
import AddPokemon from './components/add-pokemon';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/pokedexes' component={Pokedexes} />
        <Route path='/pokedex/:id' component={Pokedex} />
        <Route path='/add-pokemon' component={AddPokemon} />
      </Router>
    </div>
  );
}

export default App;
