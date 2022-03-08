import "./App.css";

import { Navbar } from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Bikes } from "./components/Bikes";
import { CarsList } from "./components/CarsList";
import { AddCar } from "./components/AddCar";
import { AddBike } from "./components/AddBike";
import { Order } from "./components/Order";
import { Home } from "./components/Home";
import Card from "@mui/material/Card";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { Editorder } from "./components/Editorder";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/cars_your_root"}>
          <CarsList />
        </Route>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/bikes_your_root"}>
          <Bikes />
        </Route>
        <Route path={"/Sell_a_car"}>
          <AddCar />
        </Route>
        <Route path={"/Sell_a_bike"}>
          <AddBike />a
        </Route>
        <Route path={"/order"} exact>
          <Order />
        </Route>
        <Route path={"/order/edit/:id"} exact>
          <Editorder />
        </Route>
        <Route path={"/card"}>
          <Booked />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const Booked = () => {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const getOrders = () => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/booking", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((value) => setOrders(value));
  };

  useEffect(() => getOrders(), []);

  const deleteOrder = (id) => {
    fetch(`https://621dddd8849220b1fc879a8e.mockapi.io/booking/${id}`, {
      method: "DELETE",
    }).then(() => getOrders());
  };
  return (
    <div className="book-container">
      {orders.map((data, index) => (
        <Card key={index} sx={{ width: 280, height: 350 }}>
          <img
            className="order-image"
            src="https://img.freepik.com/free-photo/order-concept-with-wooden-block-paper-basket-icon-blue-table-flat-lay-man-hand-pointing_176474-10443.jpg?size=626&ext=jpg&ga=GA1.2.1419995300.1637712000"
            alt="order image"
          />
          <div className="order-details">
            <p>
              Name:{data.firstname} {data.lastname}
            </p>
            <p>Address:{data.address}</p>
            <p>Pincode:{data.pincode}</p>
            <div>
              <span>Edit</span>
              <IconButton
                onClick={() => history.push(`/order/edit/${data.id}`)}
              >
                <EditIcon />
              </IconButton>
              <span>Cancel</span>
              <IconButton onClick={() => deleteOrder(data.id)}>
                <CancelIcon />
              </IconButton>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
