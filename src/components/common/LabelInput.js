import React from "react";
import { Typography, makeStyles, } from "@material-ui/core";

const styles = theme => ({
  labelHead: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  labelMargin: {
    marginTop: 5,
  },
});

const useStyles = makeStyles(styles);

const LabelInput = ({
  label,
  required,
  labelStyle,
}) => {

  const classes = useStyles();

  return (
    <div>
      <Typography className={[
        classes.labelHead,
        labelStyle && labelStyle,
        !required && classes.labelMargin
      ].join(' ')}>{label}
        {required ? <span className="MuiFormLabel-asterisk" style={{ fontSize: 16, color: 'red' }}>*</span> : null}
      </Typography>
    </div>
  );
};


export default LabelInput 