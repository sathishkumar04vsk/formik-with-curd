import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const Order = () => {
  const history = useHistory();

  const Addorder = (newOrder) => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/booking", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/card"));
  };

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
      firstname: "",
      lastname: "",
      email: "",
      building: "",
      address: "",
      pincode: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newOrder) => {
      Addorder(newOrder);
    },
  });

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
          Order Now
        </Button>
      </div>
    </form>
  );
};
