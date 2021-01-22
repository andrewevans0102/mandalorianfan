import { combineReducers } from "redux";
import Season from "./Season";
import Quotes from "./Quotes";
import Characters from "./Characters";
import Vehicles from "./Vehicles";

export default combineReducers({
	Season,
	Quotes,
	Characters,
	Vehicles,
});
