/* This is a material UI component and will be used as Buy Product Button */

import { Button } from "@mui/material";
import React from "react";

const BuyProductButtonMui = (props) => {
  return (
    <Button size="small" variant="contained" onClick={props.onClick}>
      {props.value}
    </Button>
  );
};

export default BuyProductButtonMui;