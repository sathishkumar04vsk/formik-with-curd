import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const history = useHistory();
  const [value, setValue] = useState([]);
  const getdata = () => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/booking", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((values) => setValue(values.length));
  };

  useEffect(() => getdata(), []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="Appbar" position="static">
        <Toolbar>
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/55/55283.png"
          />
          <p className="yr">Y'R</p>
          <div className="nav-items">
            <Button className="nav-btn" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button
              className="nav-btn"
              onClick={() => history.push("/cars_your_root")}
            >
              Cars
            </Button>
            <Button
              className="nav-btn"
              onClick={() => history.push("/bikes_your_root")}
            >
              Bikes
            </Button>
            <IconButton onClick={() => history.push("/card")}>
              <Badge badgeContent={value} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
