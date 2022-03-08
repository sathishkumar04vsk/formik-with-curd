import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import { pink } from "@mui/material/colors";
import { useHistory } from "react-router-dom";

export const Cars = ({
  vehicle_name,
  image,
  price,
  engine,
  fuel_type,
  driven_km,
  year,
}) => {
  const history = useHistory();
  return (
    <Card className="car-container" sx={{ maxWidth: 345 }}>
      <img className="car-image" src={image} alt={vehicle_name} />
      <div className="name-container">
        <h2 className="name">{vehicle_name}</h2>
        <h3 className="price">₹{price}</h3>
      </div>
      <div className="build-year">
        <p className="build">
          Build Year: <span className="year">{year}</span>
        </p>
        <Button onClick={() => history.push("/order")} className="booknow">
          Book Now
        </Button>
      </div>
      <div className="detail-container">
        <div className="details">
          <SettingsIcon sx={{ color: pink[500] }} />
          <span>{engine}</span>
        </div>
        <div className="details">
          <LocalGasStationRoundedIcon sx={{ color: pink[500] }} />
          <span>{fuel_type}</span>
        </div>
        <div className="details">
          <DirectionsCarOutlinedIcon sx={{ color: pink[500] }} />
          <span>{driven_km}</span>
        </div>
      </div>
    </Card>
  );
};
