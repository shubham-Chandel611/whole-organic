import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import styles from "../../assets/css/components/common/IconWithBg.style";

const useStyles = makeStyles(styles);
const IconWithBg = ({
  Icon,
  containerStyle,
  bubbleCount,
  bgColor,
}) => {
  const classes = useStyles();
  return (
    <div className={[
      classes.root,
      bgColor === 'blue' ? classes.blueBg : classes.greenBg,
      containerStyle && containerStyle
    ].join(' ')} >
      <Icon className={classes.icon} />
      {bubbleCount && (
        <div className={[
          classes.bubble,
          bgColor === 'blue' ? classes.blueBg : classes.greenBg,
        ].join(' ')}>{bubbleCount}</div>)}
    </div>
  );
};

IconWithBg.propTypes = {
  Icon: PropTypes.func,
  containerStyle: PropTypes.string,
  bubbleCount: PropTypes.number,
  bgColor: PropTypes.string
}

IconWithBg.defaultProps = {
  bgColor: 'blue',
};

export default (IconWithBg);