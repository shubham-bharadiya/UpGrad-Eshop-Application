/* This is a material UI component and will be used as Logout Button */

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