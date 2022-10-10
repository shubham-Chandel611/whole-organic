import React, { } from "react";
import { makeStyles } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import styles from '../../assets/css/components/common/BreadCrumbs.style';
import _ from "lodash";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

const BreadCrumbs = ({
  containerStyle,
  breadCrumbLink,
}) => {

  const classes = useStyles();
  return (
    <div className={[classes.container, containerStyle && containerStyle].join(' ')}>
      <Link to="/" className={classes.textStyle}>Home</Link>
      {_.isArray(breadCrumbLink) && breadCrumbLink.length && breadCrumbLink.map((item, index) => (
        <div className={classes.links} key={'bd-'+index}>
          <ChevronRight className={classes.rightIcon} />
          <Link to={item.link} className={classes.textStyle}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs