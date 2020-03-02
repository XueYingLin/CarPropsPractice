import React from "react";

const Car = props => {
  return (
    <div>
      <p style={{ color: props.color }}>
        ID: {props.id} Brand: {props.brand} Model: {props.model} Color:
        {props.color}
      </p>
    </div>
  );
};

export default Car;
