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

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
}): React.ReactElement => {
  const classes = useStylesSignIn();
  return (
    <ModalBlock
      title="Login"
      classes={classes}
      visible={open}
      onClose={onClose}
    >
      <form>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              className={classes.loginSideFields}
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
              className={classes.loginSideFields}
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

export default LoginModal;
