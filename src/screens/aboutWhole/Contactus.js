import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import Formsy from 'formsy-react';
import FullWidth from "../../layout/FullWidth";
import styles from '../../assets/css/aboutWhole/Contactus.style';
import MainLogo from "../../assets/images/logo-icon.png";
import InputField from '../../components/common/InputField';
import RoundButton from '../../components/button/RoundButton';
import { resetData } from '../../store/product/actions'
import { postContactUs } from '../../store/about/actions'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const links = [{
  link: "#",
  name: "Contact us"
}]

const useStyles = makeStyles(styles);
const Contactus = ({
  message,
  resetData,
  postContactUs,
  google,
  error,
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const closeAlert = () => {
    resetData();
  }

  const disableButton = () => {
    setFormIsValid(false);
  };

  const enableButton = () => {
    setFormIsValid(true);
  };


  const onSubmit = (model) => {
    let data = {
      first_name: model.firstName,
      last_name: model.lastName,
      phone: model.phoneNumber,
      message: model.message,
      email: model.email
    }
    postContactUs(data)
  }

  return (
    <FullWidth
      alertMessage={message}
      showAlert={message ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={error ? 'error' : 'success'}
    >
      <Formsy
        id="contactus"
        onValid={() => enableButton()}
        onInvalid={() => disableButton()}
        onValidSubmit={(e) => onSubmit(e)}
        ref={form}
      >
        <div className={classes.container}>

          <div className={classes.leftContainer}>

            <div className={classes.headerOuter}>
              <div className={classes.logoImageOuter}>
                <img src={MainLogo} alt="logo" className={classes.imageLogoStyle} />
                <div>
                  <Typography className={classes.headTitle}>Phone number</Typography>
                  <Typography className={classes.headSubtitle}>1300 670 998</Typography>
                </div>
              </div>

              <div className={classes.midLine}></div>

              <div className={classes.logoImageOuter}>
                <img src={MainLogo} alt="logo" className={classes.imageLogoStyle} />
                <div>
                  <Typography className={classes.headTitle}>Address</Typography>
                  <Typography className={classes.headSubtitle}>S1, L14, 97-99 Bathurst Street Sydney</Typography>
                </div>
              </div>

              <div className={classes.midLine}></div>

              <div className={classes.logoImageOuter}>
                <img src={MainLogo} alt="logo" className={classes.imageLogoStyle} />
                <div>
                  <Typography className={classes.headTitle}>Email address</Typography>
                  <Typography className={classes.headSubtitle}>hello@wholeorganic.com.au</Typography>
                </div>
              </div>
            </div>


            <div className={classes.bottomLeft}>
              <div className={classes.userInfo}>
                <div className={classes.inputOuter}>
                  <InputField
                    variant="outlined"
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    required
                    maxLength="50"
                    validations={{
                      minLength: 2
                    }}
                    validationErrors={{
                      minLength: 'Min character length is 2'
                    }}
                    inputProps={{
                      maxLength: 20,
                    }}
                    inputStyle={classes.inputTextField}
                  />
                </div>
                <div className={classes.inputOuter}>
                  <InputField
                    variant="outlined"
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    required
                    maxLength="50"
                    validations={{
                      minLength: 2
                    }}
                    validationErrors={{
                      minLength: 'Min character length is 2'
                    }}
                    inputProps={{
                      maxLength: 20,
                    }}
                    inputStyle={classes.inputTextField}
                  />
                </div>
              </div>

              <div className={classes.userInfo}>
                <div className={classes.inputOuter}>
                  <InputField
                    variant="outlined"
                    type="number"
                    placeholder="Phone number"
                    name="phoneNumber"
                    required
                    validations={{
                      minLength: 10
                    }}
                    validationErrors={{
                      minLength: 'Min character length is 10'
                    }}
                    inputProps={{
                      maxLength: 20,
                    }}
                    inputStyle={classes.inputTextField}
                  />
                </div>
                <div className={classes.inputOuter}>
                  <InputField
                    variant="outlined"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    maxLength="50"
                    validations="isEmail"
                    validationErrors={{
                      isEmail: 'Please enter a valid email'
                    }}
                    inputProps={{
                      maxLength: 50,
                    }}
                    inputStyle={classes.inputTextField}
                  />
                </div>
              </div>
              <InputField
                variant="outlined"
                type="text"
                placeholder="Your message"
                name="message"
                FullWidth
                required
                maxLength="50"
                inputStyle={classes.multiTextField}
                validations={{
                  minLength: 2
                }}
                validationErrors={{
                  minLength: 'Min character length is 2'
                }}
                inputProps={{
                  maxLength: 20,
                }}
                rows={4}
                multiline
              />
              <RoundButton
                title='Send'
                type="submit"
                disabled={!formIsValid}
              />
            </div>
          </div>
          <div className={classes.mapContainer}>
            <div className={classes.mapSubContainer}>
            <Map
              disableDoubleClickZoom={true}
              streetViewControl={false}
              center={{lat: -33.584370, lng: 150.857470}}
              zoomControl={false}
              mapTypeControl= {false}
              style={{ width: '25%', height: '50%', borderRadius: '50%', marginTop: 40,}} google={google} zoom={14}>
                <Marker
                  name={'Your position'}
                  position={{ lat: -33.584370, lng: 150.857470 }}
                  icon={{
                    url: MainLogo,
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(64, 64)
                  }} />
              </Map>
            </div>
          </div>
        </div>
      </Formsy>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  message: state.product.message,
  error: state.product.error,
});

const mapDispatchToProps = dispatch => ({
  resetData: () => dispatch(resetData()),
  postContactUs: (data) => dispatch(postContactUs(data))
});

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyAUH3p4GCV8-AY5Px_7U1PeONPpOfPzmvc'
})(Contactus);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedContainer);