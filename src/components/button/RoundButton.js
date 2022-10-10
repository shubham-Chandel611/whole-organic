import React, { } from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import styles from "../../assets/css/components/button/RoundButton.style";

const useStyles = makeStyles(styles);

const RoundButton = ({
  disabled,
  title,
  onClick,
  containerStyle,
  textStyle,
  disabledStyle,
  inputStartIcon,
  inputEndIcon,
  bgColor,
  type,
  buttonIcon
}) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        type={type ? type : 'button'}
        className={[
          classes.buttonOuter,
          containerStyle && containerStyle,
          disabled && classes.buttonDisabled,
          disabledStyle && disabledStyle,
          bgColor === 'green' ? classes.greenBg : classes.blueBg
        ].join(' ')}
        disabled={disabled}
        onClick={onClick ? () => onClick() : null}
        startIcon={inputStartIcon ? inputStartIcon : ''}
        endIcon={inputEndIcon ? inputEndIcon : ''}
      >
         {(buttonIcon) && <img src={buttonIcon} className={classes.icon}/>}
        <Typography
          className={[
            classes.buttonText,
            textStyle && textStyle,
            disabled && classes.disabledText
          ].join(' ')}
        >
          {title}
        </Typography>
      </Button>
    </div>
  );
};

RoundButton.defaultProps = {
  bgColor: 'blue',
};

export default (RoundButton);