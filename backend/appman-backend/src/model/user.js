const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  userName: String,
  password: String,
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
  },
  pokemons : [{ type: Schema.Types.ObjectId, ref: 'pokemon' }]
});

module.exports = mongoose.model('user', userSchema);
