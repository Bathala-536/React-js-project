import React from "react";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
  } from "react-hook-form";
  import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
  } from "@material-ui/core";
  import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

  function Payment() {

    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="cardNumber"
          render={({ field }) => (
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardMonth"
          render={({ field }) => (
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardYear"
          render={({ field }) => (
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };

  export default Payment;