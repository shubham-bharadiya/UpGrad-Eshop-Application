import { Button } from "@mui/material";
import React from "react";

const SubmitButtonMui = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      sx={{ mt: 3, width: "100%" }}
      disabled={props.disabled !== undefined ? props.disabled : false}
    >
      {props.value}
    </Button>
  );
};

export default SubmitButtonMui;