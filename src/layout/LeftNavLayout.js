/**
 * This is a left and right  layout   component
 * This layout included Header, Breadcrumb, Alert , footer and leftNavBar
 */

import React from "react";
import { makeStyles, } from "@material-ui/core";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BreadCrumb from '../components/common/BreadCrumbs';
import TransitionAlerts from "../components/common/Alert";
import LeftNavBar from '../components/common/LeftNavBar';
import styles from '../assets/css/components/layout/LeftNavLayout.style';
import _ from 'lodash';


const useStyles = makeStyles(styles);

const FullWidth = ({
  alertMessage,
  showAlert,
  alertType,
  onCloseAlert,
  children,
  breadCrumbLink
}) => {
  const classes = useStyles();

  return (
    <div>
      {/* Render Header */}
      <Header />
      <div className={classes.container}>
        {/* Render Breadcrumb */}
        <BreadCrumb breadCrumbLink={breadCrumbLink} />

        {/* Render mid  content */}
        <div className={classes.barOuter}>

          <div className={classes.leftNavOuter}>
            <LeftNavBar />
          </div>

          <div className={classes.rightNavOuter}>
            {alertMessage && _.isString(alertMessage) && (
              <div style={{ marginBottom: 20 }}>
                {/* Render Alerts to display messages */}
                <TransitionAlerts
                  showAlert={showAlert}
                  onClose={onCloseAlert}
                  message={alertMessage}
                  alertType={alertType}
                />
              </div>
            )}
            {children}
          </div>

        </div>
      </div>
      {/* Render Footer content */}
      <Footer />
    </div>
  );
};

export default FullWidth;