/* This is a material UI component and will be used as Confirmation Dialogue Box */

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const ConfirmDialogMui = ({ open, onClose, onConfirm, title, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onConfirm}
          color="primary"
          autoFocus
          variant="contained"
        >
          OKAY
        </Button>
        <Button onClick={onClose} color="primary" variant="outlined">
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialogMui;