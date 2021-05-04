/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface DialogProps {
  modal: boolean;
  toggle: () => void;
  title?: string;
  content?: string;
  option1?: string;
  option2?: string;
  next?: () => void;
}
const AlertDialog: React.FC<DialogProps> = ({
  modal,
  toggle,
  title,
  content,
  option1,
  option2,
  next,
}: DialogProps) => {
  return (
    <div>
      <Dialog
        open={modal}
        onClose={toggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        <DialogContent>
          {content && (
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {option1 && (
            <Button onClick={toggle} color="primary">
              {option1}
            </Button>
          )}
          {option2 && (
            <Button onClick={next} color="primary" autoFocus>
              {option2}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
