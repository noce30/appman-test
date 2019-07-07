import { SET_LIST_POKEDEXES } from "../action-types";

export const setListPokedexes = (payload) => {
  return { type: SET_LIST_POKEDEXES, payload };
}