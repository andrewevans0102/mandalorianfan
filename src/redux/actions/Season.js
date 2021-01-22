import { SeasonActionTypes } from "../actionTypes";
import season1 from "../../config/season1";
import season2 from "../../config/season2";

// SEASON 1
export function getSeason1() {
	return { type: SeasonActionTypes.GET_SEASON1 };
}

export function setSeason1(season1) {
	return { type: SeasonActionTypes.SET_SEASON1, season1 };
}

export function season1Error() {
	return { type: SeasonActionTypes.SEASON1_ERROR };
}

export function retrieveSeason1() {
	return function (dispatch) {
		dispatch(getSeason1());
		return dispatch(setSeason1(season1));
	};
}

// SEASON 2
export function getSeason2() {
	return { type: SeasonActionTypes.GET_SEASON2 };
}

export function setSeason2(season2) {
	return { type: SeasonActionTypes.SET_SEASON2, season2 };
}

export function season2Error() {
	return { type: SeasonActionTypes.SEASON2_ERROR };
}

export function retrieveSeason2() {
	return function (dispatch) {
		dispatch(getSeason2());
		return dispatch(setSeason2(season2));
	};
}
