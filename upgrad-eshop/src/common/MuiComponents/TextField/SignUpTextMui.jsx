import { TextField } from "@mui/material";
import React from "react";

const SignUpTextMui = (props) => {
  return (
    <TextField
      required
      variant="outlined"
      type={props.type}
      sx={{ mb: 2 }}
      fullWidth
      label={props.label}
      onChange={props.onChange}
      value={props.firstName}
      error={props.firstNameError}
    />
  );
};

export default SignUpTextMui;