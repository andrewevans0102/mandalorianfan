import { VehiclesActionTypes } from "../actionTypes";
import Vehicles from "../../config/vehicles";

export function getVehicles() {
	return { type: VehiclesActionTypes.GET_VEHICLES };
}

export function setVehicles(Vehicles) {
	return { type: VehiclesActionTypes.SET_VEHICLES, Vehicles };
}

export function VehiclesError() {
	return { type: VehiclesActionTypes.GET_VEHICLES };
}
export function retrieveVehicles() {
	return function (dispatch) {
		dispatch(getVehicles());
		console.log(Vehicles);
		return dispatch(setVehicles(Vehicles));
	};
}
