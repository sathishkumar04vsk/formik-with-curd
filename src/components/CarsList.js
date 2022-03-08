import { Cars } from "./Cars";
import { useEffect, useState } from "react";

export const CarsList = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/cars", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((values) => setCar(values));
  }, []);
  return (
    <div className="cars-container">
      {car.map(
        (
          { vehicle_name, image, price, engine, fuel_type, driven_km, year },
          index
        ) => (
          <Cars
            key={index}
            vehicle_name={vehicle_name}
            image={image}
            price={price}
            engine={engine}
            fuel_type={fuel_type}
            driven_km={driven_km}
            year={year}
          />
        )
      )}
    </div>
  );
};
