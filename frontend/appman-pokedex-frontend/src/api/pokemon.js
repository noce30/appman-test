import { baseURL } from "./config";

class PokemonService {
  getAllPokemons() {
      return fetch(`${baseURL}/getAllPokemons`, {
          method: 'GET'
      }).then(res => {
          if (!res.ok) return Promise.reject(res.statusText);
          return res.json();
      }).then(res => {
          return res;
      });
  }

  addPokemon (data) {
    return fetch(`${baseURL}/addPokemon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) return Promise.reject(res.statusText);
      return res.json();
    }).then(res => {
      return res;
    });
  }
}

export default PokemonService