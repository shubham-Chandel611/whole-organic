
/**
 * This is facebook service file
 * This service inlcuded facebook login, 
 */

import React from 'react';
import FacebookLogin from 'react-facebook-login';
import config from './facebookServiceConfig';
import FbBtn from '../../assets/images/fb_login.png'

class facebookService {
  loadFBButton(callback, text = null, cssClass = null) {
    return (
      <FacebookLogin
        appId={config.appId}
        autoLoad={false}
        fields={config.fields}
        callback={(data) => callback(data)}
        textButton={text ? text : ""}
        cssClass={cssClass ? cssClass : "bd-highlight fbButton"}
        icon={<img src={FbBtn} alt="facebook login" />}
      />
    );
  }

}
const instance = new facebookService();

export default instance;