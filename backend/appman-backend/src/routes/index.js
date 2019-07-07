const express = require('express');
const router = express();
const User = require('../model/user');
const Pokemon = require('../model/pokemon')

// user
router.post('/signUp', async (req, res, next) => {
  const existUser = await User.find(req.body)
  if (existUser && existUser.length) {
    res.send({ message: 'user already existed.' });
  }
  else {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  }
});

router.post('/login', async (req, res) => {
  const existUser = await User.find(req.body)
  if (existUser && existUser.length) {
    res.send(existUser);
  }
  else {
    res.send({ message: 'user does not exist.' });
  }
});

router.get('/getAllPokedexes', (req, res, next) => {
  User.find({}).populate('pokemons').then((users) => {
    res.send(users);
  });
});

//Pokemon
router.get('/getAllPokemons', (req, res, next) => {
  Pokemon.find({}).then((pokemons) => {
    res.send(pokemons);
  });
});

router.post('/addPokemon', async (req, res) => {
  const { pokemonId, userId } = req.body
  const pokemon = await Pokemon.findById(pokemonId)
  if (pokemon) {
    const user = await User.findById(userId)
    if (user) {
      if (user.pokemons.indexOf(pokemonId) > -1) {
        res.send({ message: 'Pokemon already existed.' })
      } else {
        user.pokemons.push(pokemon)
        await user.save();
        res.send(pokemon)
      }
    }
  } else {
    return res.status(404).json({
      message: "Pokemon not found."
    });
  }
});

module.exports = router;
