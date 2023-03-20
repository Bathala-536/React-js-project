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

function MainFormHome() {

    const { control } = useFormContext();
    return (
      <>
<Container>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="nickName"
          render={({ field }) => (
            <TextField
              id="nick-name"
              label="Nick Name"
              variant="outlined"
              placeholder="Enter Your Nick Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        </Container>
      </>
    );
}

export default MainFormHome;