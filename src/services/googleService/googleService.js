/**
 * This is google service file
 * This service inlcuded google login, 
 */

import React from 'react';
import GoogleLogin from 'react-google-login';
import config from './googleServiceConfig';
import GoogleBtn from '../../assets/images/google_login.png'

class googleService {
  loadGoogleButton(successCallback, failureCallback, text = null, cssClass = null) {
    return (
      <GoogleLogin
        clientId={config.clientId}
        buttonText={text ? text : ""}
        onSuccess={(data) => successCallback(data)}
        onFailure={(data) => failureCallback(data)}
        
        //cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <div className="bd-highlight" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={GoogleBtn} alt="google login" /></div>
        )}
      />
    );
  }
}
const instance = new googleService();

export default instance;
