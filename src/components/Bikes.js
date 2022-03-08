import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { pink } from "@mui/material/colors";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/bikes", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((values) => setBikes(values));
  }, []);
  const history = useHistory();
  return (
    <div className="cars-container">
      {bikes.map(
        (
          { name, image, price, transmission, engine_cc, type, mileage },
          index
        ) => (
          <Card key={index} className="car-container" sx={{ maxWidth: 345 }}>
            <img className="car-image" src={image} alt={name} />
            <div className="name-container">
              <h2 className="name">{name}</h2>
              <h3 className="price">₹{price}</h3>
            </div>
            <div className="build-year">
              <p className="build">
                Transmission: <span className="year">{transmission}</span>
              </p>
              <Button
                onClick={() => history.push("/order")}
                className="booknow"
              >
                Book Now
              </Button>
            </div>
            <div className="detail-container">
              <div className="details">
                <SettingsIcon sx={{ color: pink[500] }} />
                <span>{engine_cc}</span>
              </div>
              <div className="details">
                {type === "Scooter" ? (
                  <DeliveryDiningIcon sx={{ color: pink[500] }} />
                ) : (
                  <TwoWheelerIcon sx={{ color: pink[500] }} />
                )}
                <span>{type}</span>
              </div>
              <div className="details">
                <LocalGasStationRoundedIcon sx={{ color: pink[500] }} />
                <span>{mileage}</span>
              </div>
            </div>
          </Card>
        )
      )}
    </div>
  );
};
