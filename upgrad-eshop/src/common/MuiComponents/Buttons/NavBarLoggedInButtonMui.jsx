import { Button } from "@mui/material";

import React from "react";

const NavBarLoggedInButtonMui = (props) => {
  return (
    <Button color="inherit" variant="text" onClick={props.onClick}>
      {props.value}
    </Button>
  );
};

export default NavBarLoggedInButtonMui;