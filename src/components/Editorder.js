import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";

export const Editorder = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`https://621dddd8849220b1fc879a8e.mockapi.io/booking/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((value) => setOrder(value));
  }, []);

  return (
    <div>{order ? <EditOrderForm order={order} /> : <h3>Loading...</h3>}</div>
  );
};
const EditOrderForm = ({ order }) => {
  const { id } = useParams();
  const history = useHistory();

  const [firstname, setFirstname] = useState(order.firstname);
  const [lastname, setLastname] = useState(order.lastname);
  const [email, setEmail] = useState(order.email);
  const [building, setBuilding] = useState(order.building);
  const [address, setAddress] = useState(order.address);
  const [pincode, setPincode] = useState(order.pincode);

  const orderhandler = () => {
    const updateOrder = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      building: building,
      address: address,
      pincode: pincode,
    };
    fetch(`https://621dddd8849220b1fc879a8e.mockapi.io/booking/${id}`, {
      method: "PUT",
      body: JSON.stringify(updateOrder),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/card"));
  };
  return (
    <div className="order-container">
      <TextField
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
        variant="outlined"
        label="First name"
      ></TextField>
      <TextField
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
        variant="outlined"
        label="Last name"
      ></TextField>
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        variant="outlined"
        label="Email Id"
      ></TextField>
      <TextField
        value={building}
        onChange={(event) => setBuilding(event.target.value)}
        variant="outlined"
        label="Building"
        placeholder="EX:flat no:22,Opposite:HDFC bank"
      ></TextField>
      <TextField
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        variant="outlined"
        label="Address"
      ></TextField>
      <TextField
        value={pincode}
        onChange={(event) => setPincode(event.target.value)}
        variant="outlined"
        label="Pincode"
      ></TextField>
      <div className="order">
        <Button onClick={orderhandler} className="order-button">
          Save Now
        </Button>
      </div>
    </div>
  );
};
