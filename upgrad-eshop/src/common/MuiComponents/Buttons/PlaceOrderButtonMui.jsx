/* This is a material UI component and will be used as Place Order Button */

import { Button } from "@mui/material";
import React from "react";

const PlaceOrderButtonMui = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="button"
      disabled={props.disabled}
      sx={{ mt: 3 }}
      onClick={props.onClick}
    >
      Place Order
    </Button>
  );
};

export default PlaceOrderButtonMui;