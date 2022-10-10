import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const TransitionAlerts = ({
  message,
  showAlert,
  onClose,
  alertType
}) => {
  const classes = useStyles();
    if(message) {
      return ( <Collapse in={showAlert} className={classes.root}>
        <Alert severity={alertType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => onClose()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    )
  } else {
    return null;
  }
}

TransitionAlerts.defaultProps = {
  alertType: 'success',
};

export default TransitionAlerts;