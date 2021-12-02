import { CharactersActionTypes } from "../actionTypes";
import Characters from "../../config/characters.json";
import { MandalorianCharacters } from "../../constants/Characters";

export function getCharacters() {
  return { type: CharactersActionTypes.GET_CHARACTERS };
}

export function setCharacters(characters: MandalorianCharacters) {
  return { type: CharactersActionTypes.SET_CHARACTERS, characters };
}

export function CharactersError() {
  return { type: CharactersActionTypes.GET_CHARACTERS };
}
export function retrieveCharacters() {
  return function (dispatch: any) {
    dispatch(getCharacters());
    return dispatch(setCharacters({ characters: Characters }));
  };
}
