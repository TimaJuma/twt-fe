import React from "react";
import { DialogContent, DialogTitle, Dialog } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import { useStylesSignIn } from "../pages/SignIn";

interface ModalBlockProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalBlockProps> = ({
  title,
  classes,
  visible = false,
  onClose,
  children,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog onClose={onClose} open={visible} title="Login">
      <DialogTitle>
        <IconButton onClick={onClose} color="secondary" aria-label="position">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
