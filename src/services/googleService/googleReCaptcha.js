/**
 * This is google recaptcha service file
 * This service inlcuded google recaptcha service, 
 */

import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import config from './googleServiceConfig';

const GoogleRecaptcha = ({
  onClick
}) => {
  const onChange = (value) => {
    onClick(true)
  }
  return (
    <div>
      <ReCAPTCHA
        sitekey={config.captchSiteKey}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
export default GoogleRecaptcha;