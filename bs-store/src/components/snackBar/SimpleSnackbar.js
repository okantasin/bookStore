import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux'
import { closeSnackbar } from '../../store/actions/settingActions'
export default function SimpleSnackbar({message,showSnackBar}) {
    const settingDispatch=useDispatch();
  

const handleClose=(event, reason)=>{
    if (reason === 'clickaway') {
        return;
      }
    settingDispatch(closeSnackbar());
}

const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
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
            open={showSnackBar}
            autoHideDuration={3000}
            onClose={handleClose}
            message={message}
            action={action}
          />
        </div>
      );
    }
