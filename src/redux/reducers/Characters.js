import { CharactersActionTypes } from "../actionTypes";

function Characters(
	state = CharactersActionTypes.initialCharactersState,
	action
) {
	switch (action.type) {
		case CharactersActionTypes.GET_CHARACTERS:
			return Object.assign({}, state, {
				loading: true,
				characters: [],
			});
		case CharactersActionTypes.SET_CHARACTERS:
			return Object.assign({}, state, {
				...state,
				loading: false,
				characters: action.characters,
			});
		case CharactersActionTypes.CHARACTERS_ERROR:
			return Object.assign({}, state, {
				...state,
				errors: [...state.errors, action.error],
			});
		default:
			return state;
	}
}

export default Characters;
