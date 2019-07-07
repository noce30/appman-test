import { SET_LIST_POKEDEXES } from "../action-types";

const rootReducer = (state, action) => {
  if (action.type === SET_LIST_POKEDEXES) {
    return Object.assign({}, state, {
      listPokedexes: action.payload
    });
  }
  return state;
};

export default rootReducer;