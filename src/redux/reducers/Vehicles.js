import { VehiclesActionTypes } from "../actionTypes";

function Vehicles(state = VehiclesActionTypes.initialVehiclesState, action) {
	switch (action.type) {
		case VehiclesActionTypes.GET_VEHICLES:
			return Object.assign({}, state, {
				loading: true,
				vehicles: [],
			});
		case VehiclesActionTypes.SET_VEHICLES:
			console.log(action);
			return Object.assign({}, state, {
				...state,
				loading: false,
				vehicles: action.Vehicles,
			});
		case VehiclesActionTypes.VEHICLES_ERROR:
			return Object.assign({}, state, {
				...state,
				errors: [...state.errors, action.error],
			});
		default:
			return state;
	}
}

export default Vehicles;
