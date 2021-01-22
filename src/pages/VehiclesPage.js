import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VehiclesActions } from "../redux/actions";
import "../styles/styles.scss";
import DoubleColumn from "../components/DoubleColumn";

function VehiclesPage(props) {
	const dispatch = useDispatch();

	const vehicles = useSelector((state) => state.Vehicles.vehicles);

	useEffect(() => {
		dispatch(VehiclesActions.retrieveVehicles());
	}, [dispatch, vehicles]);

	return (
		<section className="doubleColumn">
			<h1>Vehicles</h1>
			<DoubleColumn values={vehicles} source={"vehicles"} />
		</section>
	);
}

export default VehiclesPage;
