import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../index";
import { VehiclesActions } from "../redux/actions";
import "../styles/styles.scss";
import DoubleColumn from "../components/DoubleColumn";

function VehiclesPage() {
  const dispatch = useAppDispatch();

  const vehicles = useAppSelector((state) => state.Vehicles.vehicles);

  useEffect(() => {
    dispatch(VehiclesActions.retrieveVehicles());
  }, [dispatch]);

  return (
    <section className="doubleColumn">
      <h1>Vehicles</h1>
      <DoubleColumn values={vehicles.vehicles} source={"vehicles"} />
    </section>
  );
}

export default VehiclesPage;
