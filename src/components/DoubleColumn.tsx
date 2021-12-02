import React from "react";
import "../styles/styles.scss";
import { MandalorianColumns } from "../constants/Columns";

const DoubleColumn = (props: MandalorianColumns) => {
  return (
    <>
      {props.values !== undefined &&
        props.values.map((value) => (
          <article key={value.name} className="doubleColumn__title">
            {props.source === "vehicles" ? (
              <img
                src={process.env.PUBLIC_URL + value.image}
                alt={value.image_alt}
                className="doubleColumn__large-image"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + value.image}
                alt={value.image_alt}
                className="doubleColumn__normal-image"
              />
            )}
            <div className="doubleColumn__information">
              <span>
                <p className="doubleColumn__name">{value.name}</p>
                <p className="doubleColumn__description">{value.description}</p>
              </span>
              <a href={value.link}>
                description and image originally copied from here
              </a>
            </div>
          </article>
        ))}
    </>
  );
};

export default DoubleColumn;
