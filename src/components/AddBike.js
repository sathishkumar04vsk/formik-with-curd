import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { formik, useFormik } from "formik";
import * as yup from "yup";

export const AddBike = (newBike) => {
  const history = useHistory();

  const addbikehandler = () => {
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/bikes", {
      method: "POST",
      body: JSON.stringify(newBike),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/bikes_your_root"));
  };

  const formValidationSchema = yup.object({
    name: yup.string().required("Fill a bike name is required field"),
    image: yup.string().required("Fill a bike image is required field"),
    price: yup.string().required("Fill a bike price is required field"),
    transmission: yup
      .string()
      .required("Fill a bike transmission is required field"),
    engine_cc: yup.string().required("Fill a bike engine cc is required field"),
    mileage: yup
      .string()
      .required("Fill a bike mileage per liter is required field"),
    type: yup.string().required("Fill a bike type is required field"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      price: "",
      transmission: "",
      engine_cc: "",
      mileage: "",
      type: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newBike) => {
      addbikehandler(newBike);
    },
  });
  return (
    <div className="add-container">
      <div className="add-bike-container">
        <form onSubmit={formik.handleSubmit} className="add-bike">
          <h5>Please fill the form below to sell a bike</h5>

          <TextField
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            variant="outlined"
            label="Bike Name"
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            helperText={
              formik.touched.price && formik.errors.name
                ? formik.errors.name
                : ""
            }
          ></TextField>
          <TextField
            id="image"
            name="image"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            variant="outlined"
            label="Image url"
            value={formik.values.image}
            error={formik.touched.image && formik.errors.image}
            helperText={
              formik.touched.price && formik.errors.image
                ? formik.errors.image
                : ""
            }
          ></TextField>
          <div className="add-price">
            <TextField
              id="price"
              name="price"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
              label="Price"
              value={formik.values.price}
              error={formik.touched.price && formik.errors.price}
              helperText={
                formik.touched.price && formik.errors.price
                  ? formik.errors.price
                  : ""
              }
            ></TextField>
            <TextField
              id="transmission"
              name="transmission"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
              label="Transmission "
              placeholder="Ex:4 speed manual"
              value={formik.values.transmission}
              error={formik.touched.transmission && formik.errors.transmission}
              helperText={
                formik.touched.price && formik.errors.transmission
                  ? formik.errors.transmission
                  : ""
              }
            ></TextField>
          </div>
          <TextField
            id="engine_cc"
            name="engine_cc"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            variant="outlined"
            label="Engine_cc"
            value={formik.values.engine_cc}
            error={formik.touched.engine_cc && formik.errors.engine_cc}
            helperText={
              formik.touched.price && formik.errors.engine_cc
                ? formik.errors.engine_cc
                : ""
            }
          ></TextField>
          <div className="add-mileage">
            <TextField
              id="mileage"
              name="mileage"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
              label="Mileage "
              placeholder="Ex:40kmpl"
              value={formik.values.mileage}
              error={formik.touched.mileage && formik.errors.mileage}
              helperText={
                formik.touched.price && formik.errors.mileage
                  ? formik.errors.mileage
                  : ""
              }
            ></TextField>
            <TextField
              id="type"
              name="type"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
              label="Bike Type "
              placeholder="Ex:sport"
              value={formik.values.type}
              error={formik.touched.type && formik.errors.type}
              helperText={
                formik.touched.price && formik.errors.type
                  ? formik.errors.type
                  : ""
              }
            ></TextField>
          </div>
          <div className="sell">
            <Button type="submit" className="sell-button">
              Sell
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
