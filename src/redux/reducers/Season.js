import { SeasonActionTypes } from "../actionTypes";

function Season(state = SeasonActionTypes.initialSeasonState, action) {
	switch (action.type) {
		case SeasonActionTypes.GET_SEASON1:
			return Object.assign({}, state, {
				loading: true,
				season1: [],
			});
		case SeasonActionTypes.SET_SEASON1:
			return Object.assign({}, state, {
				...state,
				loading: false,
				season1: action.season1,
			});
		case SeasonActionTypes.SEASON1_ERROR:
			return Object.assign({}, state, {
				...state,
				errors: [...state.errors, action.error],
			});
		case SeasonActionTypes.GET_SEASON2:
			return Object.assign({}, state, {
				loading: true,
				season2: [],
			});
		case SeasonActionTypes.SET_SEASON2:
			return Object.assign({}, state, {
				...state,
				loading: false,
				season2: action.season2,
			});
		case SeasonActionTypes.SEASON2_ERROR:
			return Object.assign({}, state, {
				...state,
				errors: [...state.errors, action.error],
			});
		default:
			return state;
	}
}

export default Season;
