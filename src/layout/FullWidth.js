/**
 * This is a full width component
 * This layout included Header, Breadcrumb, Alert and footer
 */

import React from "react";
import { makeStyles, } from "@material-ui/core";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BreadCrumb from '../components/common/BreadCrumbs';
import TransitionAlerts from "../components/common/Alert";
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 7%',
    width: '86%'
  },
  alertSection: {
    marginTop: 20
  },
}));

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
        <BreadCrumb breadCrumbLink={breadCrumbLink}/>
        <div style={{marginTop: 20}}>
          {/* Render Alerts to display messages */}
          {alertMessage && _.isString(alertMessage) && (
            <TransitionAlerts
              showAlert={showAlert}
              onClose={onCloseAlert}
              message={alertMessage} 
              alertType={alertType}
            />
          )}
        </div>
        <div>
          {/* Render screen content */}
          {children}
        </div>
      </div>
      {/* Render Footer content */}
      <Footer />
    </div>
  );
};

export default FullWidth;