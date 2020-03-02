import React, { useState } from "react";
import dummyData from "./dummyData";
import Car from "./Car";

const Cars = () => {
  const [cars, setCars] = useState(dummyData);

  console.log(cars);
  return (
    <div>
      <p>Cars we have as below:</p>
      {cars.map(c => (
        <Car
          id={c.id}
          brand={c.car_make}
          model={c.car_model}
          color={c.car_color}
        />
      ))}
    </div>
  );
};

export default Cars;
