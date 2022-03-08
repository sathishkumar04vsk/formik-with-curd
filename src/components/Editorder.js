import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

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

  const formValidationSchema = yup.object({
    firstname: yup.string().required("Fill a Firstname is required field"),
    lastname: yup.string().required("Fill a Lastname is required field"),
    email: yup.string().required("Fill a Email is required field"),
    building: yup.string().required("Fill a building is required field"),
    address: yup.string().required("Fill a address is required field").min(20),
    pincode: yup
      .number()
      .required("Fill a pincode is required field")
      .min(100000),
  });

  const formik = useFormik({
    initialValues: {
      firstname: order.firstname,
      lastname: order.lastname,
      email: order.email,
      building: order.building,
      address: order.address,
      pincode: order.pincode,
    },
    validationSchema: formValidationSchema,
    onSubmit: (updateOrder) => {
      editOrder(updateOrder);
    },
  });

  const editOrder = (updateOrder) => {
    fetch(`https://621dddd8849220b1fc879a8e.mockapi.io/booking/${id}`, {
      method: "PUT",
      body: JSON.stringify(updateOrder),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/card"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="order-container">
      <TextField
        id="firstname"
        name="firstname"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        variant="outlined"
        label="First name"
        value={formik.values.firstname}
        error={formik.touched.firstname && formik.errors.firstname}
        helperText={
          formik.touched.firstname && formik.errors.firstname
            ? formik.errors.firstname
            : ""
        }
      ></TextField>
      <TextField
        id="lastname"
        name="lastname"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        variant="outlined"
        label="Last name"
        value={formik.values.lastname}
        error={formik.touched.lastname && formik.errors.lastname}
        helperText={
          formik.touched.lastname && formik.errors.lastname
            ? formik.errors.lastname
            : ""
        }
      ></TextField>
      <TextField
        id="email"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        variant="outlined"
        label="Email Id"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email ? formik.errors.email : ""
        }
      ></TextField>
      <TextField
        id="building"
        name="building"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        variant="outlined"
        label="Building"
        value={formik.values.building}
        error={formik.touched.building && formik.errors.building}
        helperText={
          formik.touched.building && formik.errors.building
            ? formik.errors.building
            : ""
        }
        placeholder="EX:flat no:22,Opposite:HDFC bank"
      ></TextField>
      <TextField
        id="address"
        name="address"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        variant="outlined"
        label="Address"
        value={formik.values.address}
        error={formik.touched.address && formik.errors.address}
        helperText={
          formik.touched.address && formik.errors.address
            ? formik.errors.address
            : ""
        }
      ></TextField>
      <TextField
        id="pincode"
        name="pincode"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        variant="outlined"
        label="Pincode"
        value={formik.values.pincode}
        error={formik.touched.pincode && formik.errors.pincode}
        helperText={
          formik.touched.pincode && formik.errors.pincode
            ? formik.errors.pincode
            : ""
        }
      ></TextField>
      <div className="order">
        <Button type="submit" className="order-button">
          Save Now
        </Button>
      </div>
    </form>
  );
};
