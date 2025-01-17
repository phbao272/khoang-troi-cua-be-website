import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
}

export const ModalConfirm: React.FC<Props> = ({
  open,
  onClose,
  title,
  content,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy bỏ</Button>
        <Button onClick={onConfirm} autoFocus>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
};
