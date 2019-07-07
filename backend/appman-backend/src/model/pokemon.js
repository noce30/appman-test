const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = Schema({
  id: Number,
  attack: Number,
  hp: String,
  imageUrl: String,
  resistance: Number,
  name: String,
  type: String,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('pokemon', pokemonSchema);
