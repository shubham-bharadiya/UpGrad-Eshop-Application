import { Button } from "@mui/material";

import React from "react";

const NavBarLogoutButtonMui = (props) => {
  return (
    <Button variant="contained" color="error" onClick={props.onClick}>
      {props.value}
    </Button>
  );
};

export default NavBarLogoutButtonMui;