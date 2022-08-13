import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from 'react-redux'
import { closeSnackbar } from '../../store/actions/settingActions'
import { snackbar } from '../../store/initialValues/settingItems';

export default function SimpleSnackbar({ snackbar }) {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const settingDispatch = useDispatch();
  const { message, severity, duration, open } = snackbar;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    settingDispatch(closeSnackbar());
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={message}
        action={action}
      >
           <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
        </Snackbar>
    </div>
  );
}
