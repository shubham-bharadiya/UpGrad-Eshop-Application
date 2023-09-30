import { TextField } from "@mui/material";
import React from "react";

const LoginTextMui = (props) => {
  return (
    <TextField
      label={props.label}
      onChange={props.onChange}
      required
      variant="outlined"
      sx={{ mb: 3 }}
      fullWidth
      type={props.type}
      value={props.value}
      error={props.error}
    />
  );
};

export default LoginTextMui;