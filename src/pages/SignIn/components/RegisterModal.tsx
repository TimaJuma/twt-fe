import React from "react";
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import {
  Button,
  Checkbox,
  IconButton,
  Radio,
  TextField,
} from "@material-ui/core";
import ModalBlock from "../../../components/ModalBlock";
import { useStylesSignIn } from "..";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  onClose,
}): React.ReactElement => {
  const classes = useStylesSignIn();
  return (
    <ModalBlock
      title="Register"
      classes={classes}
      visible={open}
      onClose={onClose}
    >
      <form>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              className={classes.registerFields}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              variant="filled"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              className={classes.registerFields}
              autoFocus
              margin="dense"
              id="email"
              label="E-mail"
              type="email"
              variant="filled"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              className={classes.registerFields}
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default RegisterModal;
