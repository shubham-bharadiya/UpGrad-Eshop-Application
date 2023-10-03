import { Button } from "@mui/material";

import React from "react";

const SignInButtonMui = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      sx={{ mt: 3, width: "100%" }}
    >
      {props.value}
    </Button>
  );
};

export default SignInButtonMui;