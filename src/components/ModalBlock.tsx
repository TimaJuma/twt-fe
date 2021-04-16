import React from "react";
import { DialogContent, DialogTitle, Dialog } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import { useStylesSignIn } from "../pages/SignIn";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  classes: ReturnType<typeof useStylesSignIn>;
}

const Modal: React.FC<ModalProps> = ({
  title,
  classes,
  children,
}): React.ReactElement => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Dialog onClose={setOpen} open={open} title="Login">
      <DialogTitle>
        <IconButton color="secondary" aria-label="position">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
