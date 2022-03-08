import * as React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

export const AddCar = (newCar) => {
  const history = useHistory();
  const Addcars = (newCar) => {
    console.log("onSubmit", newCar);
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/cars", {
      method: "POST",
      body: JSON.stringify(newCar),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/cars_your_root"));
  };

  const formValidationSchema = yup.object({
    vehicle_name: yup.string().required("Fill a Car name is required field"),
    image: yup.string().required("Fill a Car image is required field"),
    price: yup
      .number()
      .required("Fill a Car price is required field")
      .min(100000, "minimum 1lakh"),
    engine: yup
      .string()
      .required("Fill a Car engine transmission is required field")
      .min(8, "need a tranmission type"),
    fuel_type: yup.string().required("Fill a Car fuel type is required field"),
    driven_km: yup
      .number()
      .required("Fill a Car Driven km is required field")
      .min(100),
    year: yup
      .number()
      .required("Fill a Car Biuld year is required field")
      .min(1987, "1987 after manufacture Cars only")
      .max(2022),
  });
  const formik = useFormik({
    initialValues: {
      vehicle_name: "",
      image: "",
      price: "",
      engine: "",
      fuel_type: "",
      driven_km: "",
      year: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newCar) => {
      Addcars(newCar);
    },
  });
  return (
    <div className="add-container">
      <div className="add-car-container">
        <form onSubmit={formik.handleSubmit} className="add-car">
          <h5>Please fill the form below to sell a car</h5>
          <TextField
            id="vehicle_name"
            name="vehicle_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            label="Car Name"
            value={formik.values.vehicle_name}
            error={formik.touched.vehicle_name && formik.errors.vehicle_name}
            helperText={
              formik.touched.vehicle_name && formik.errors.vehicle_name
                ? formik.errors.vehicle_name
                : ""
            }
          ></TextField>
          <TextField
            id="image"
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            label="Image"
            value={formik.values.image}
            error={formik.touched.image && formik.errors.image}
            helperText={
              formik.touched.image && formik.errors.image
                ? formik.errors.image
                : ""
            }
          ></TextField>
          <TextField
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          <div className="Engine-type">
            <TextField
              id="engine"
              name="engine"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              label="Engine Type "
              placeholder="Ex:Automatic"
              value={formik.values.engine}
              error={formik.touched.engine && formik.errors.engine}
              helperText={
                formik.touched.engine && formik.errors.engine
                  ? formik.errors.engine
                  : ""
              }
            ></TextField>
            <TextField
              id="fuel_type"
              name="fuel_type"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              label="Fuel Type"
              placeholder="Ex:Petrol  "
              value={formik.values.fuel_type}
              error={formik.touched.fuel_type && formik.errors.fuel_type}
              helperText={
                formik.touched.fuel_type && formik.errors.fuel_type
                  ? formik.errors.fuel_type
                  : ""
              }
            ></TextField>
          </div>
          <div className="driven">
            <TextField
              id="driven_km"
              name="driven_km"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              label="Driven_km"
              value={formik.values.driven_km}
              error={formik.touched.driven_km && formik.errors.driven_km}
              helperText={
                formik.touched.driven_km && formik.errors.driven_km
                  ? formik.errors.driven_km
                  : ""
              }
            ></TextField>
            <TextField
              id="year"
              name="year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              label="Build Year"
              value={formik.values.year}
              error={formik.touched.year && formik.errors.year}
              helperText={
                formik.touched.year && formik.errors.year
                  ? formik.errors.year
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
