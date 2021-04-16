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

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
}): React.ReactElement => {
  return (
    <ModalBlock title="Login" classes={classes}>
      <form>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="E-mail"
              type="email"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
            />
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default LoginModal;
