import React from "react";
import { Typography, makeStyles, } from "@material-ui/core";
import styles from '../../assets/css/components/common/TopHeading.style'

const useStyles = makeStyles(styles);

const TopHeading = ({
  heading,
  headingStyle,
  subHeading,
  subHeadingStyle
}) => {

  const classes = useStyles();

  return (
    <div>
      <Typography className={[classes.headingText, headingStyle && headingStyle].join(' ')}>{heading ? heading : null}</Typography>
      {subHeading ?
        <Typography className={[classes.subHeadingText, subHeadingStyle && subHeadingStyle].join(' ')}>
          {subHeading ? subHeading : null}
        </Typography>
        : null}
    </div>
  );
};


export default TopHeading 
