import { baseURL } from "./config";

class UserService {
  login (data) {
    return fetch(`${baseURL}/login`, {
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

  signUp (data) {
    return fetch(`${baseURL}/signUp`, {
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

  getAllPokedexes() {
      return fetch(`${baseURL}/getAllPokedexes`, {
          method: 'GET'
      }).then(res => {
          if (!res.ok) return Promise.reject(res.statusText);
          return res.json();
      }).then(res => {
          return res;
      });
  }

  getPokedexById(pokedexById) {
    return fetch(`${baseURL}/getPokedexById?pokedexById=${pokedexById}`, {
        method: 'GET'
    }).then(res => {
        if (!res.ok) return Promise.reject(res.statusText);
        return res.json();
    }).then(res => {
        return res;
    });
}
}

export default UserService