import { CharactersActionTypes } from "../actionTypes";
import Characters from "../../config/characters";

export function getCharacters() {
	return { type: CharactersActionTypes.GET_CHARACTERS };
}

export function setCharacters(characters) {
	return { type: CharactersActionTypes.SET_CHARACTERS, characters };
}

export function CharactersError() {
	return { type: CharactersActionTypes.GET_CHARACTERS };
}
export function retrieveCharacters() {
	return function (dispatch) {
		dispatch(getCharacters());
		return dispatch(setCharacters(Characters));
	};
}
