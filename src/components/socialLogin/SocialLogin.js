import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import styles from '../../assets/css/components/socialLogin/SocialLogin.style';
import googleService from '../../services/googleService';
import facebookService from '../../services/facebookService';
import { socialLogin } from '../../store/login/actions';

const useStyles = makeStyles(styles);

const SocialLogin = ({
  socialLogin,
  section
}) => {
  const classes = useStyles();

  const responseSuccessGoogle = (response) => {
    if (response && response.profileObj) {
      const { profileObj } = response;
      let name = profileObj.name;
      let newName = name.split(' ');
      let firstName = newName[0];
      let lastName = newName[1] ? newName[1] : '';
      let data = {
        "first_name": firstName,
        "last_name": lastName,
        "email": profileObj.email,
        "provider": "google",
        "type": "buyer"
      }
      socialLogin(data)
    }
  }

  const responseFailureGoogle = (response) => {
    console.log('responseFailureGoogle', response);
  }

  const responseFacebook = (response) => {
    if (response.email) {
      let name = response.name;
      let newName = name.split(' ');
      let firstName = newName[0];
      let lastName = newName[1] ? newName[1] : '';
      let data = {
        "first_name": firstName,
        "last_name": lastName,
        "email": response.email,
        "provider": "facebook",
        "type": "buyer"
      }
      socialLogin(data)
    }
  }

  return (
    <div className={classes.rightOuter}>
      <Typography className={classes.createAccount}>Or {section} using</Typography>
      <div className={classes.fbOuter}>
        {facebookService.loadFBButton(responseFacebook, "", classes.fbLogin)}
      </div>
      <div className={classes.googleOuter}>
        {googleService.loadGoogleButton(responseSuccessGoogle, responseFailureGoogle)}
      </div>
    </div>
  );
};


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  socialLogin: (data) => dispatch(socialLogin(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialLogin);