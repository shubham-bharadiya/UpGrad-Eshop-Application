/* This is a material UI component and will be used as Shopping Car Icon */

import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const IconButtonMui = (props) => {
  return (
    <IconButton
      size="small"
      edge="start"
      color="inherit"
      aria-label="menu"
      disableRipple
      onClick={props.onClick}
    >
      <ShoppingCartIcon />
      <Typography variant="body1" component="span">
        upGrad E-Shop
      </Typography>
    </IconButton>
  );
};

export default IconButtonMui;