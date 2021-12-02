import { VehiclesActionTypes } from "../actionTypes";
import Vehicles from "../../config/vehicles.json";
import { MandalorianVehicles } from "../../constants/Vehicles";

export function getVehicles() {
  return { type: VehiclesActionTypes.GET_VEHICLES };
}

export function setVehicles(Vehicles: MandalorianVehicles) {
  return { type: VehiclesActionTypes.SET_VEHICLES, Vehicles };
}

export function VehiclesError() {
  return { type: VehiclesActionTypes.GET_VEHICLES };
}
export function retrieveVehicles() {
  return function (dispatch: any) {
    dispatch(getVehicles());
    return dispatch(setVehicles({ vehicles: Vehicles }));
  };
}
