import React, { useState } from "react";
import { Typography, makeStyles, FormControlLabel, Checkbox, FormGroup } from "@material-ui/core";
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";
import Formsy from 'formsy-react';
import RoundButton from '../../../components/button/RoundButton';
import styles from '../../../assets/css/profile/SetUpBuyerProfile.style'
import InputField from '../../../components/common/InputField';
import _ from 'lodash';
import FullWidth  from "../../../layout/FullWidth";

const links = [{
  link : "#",
  name: "Sign up your profile "
}];

const useStyles = makeStyles(styles);

const SetUpBuyerProfile = () => {
  const classes = useStyles();
  const [event, setEvent] = useState(
    {
      firstName: '',
      lastName: '',
      emailAddress: '',
    }
  )

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    setEvent({ ...event, [e.target.name]: e.target.value });
  };


  return (
    <FullWidth
      //alertMessage = {message}
      //showAlert={message ? true : false}
      //onCloseAlert={closeAlert}
      breadCrumbLink={links}
      //alertType={error ? 'error' : 'success'}
    >
      <div className={classes.container}>
        <Formsy
          id="SetUpBuyerProfile"
        >
          <Typography className={classes.profileLabel}>Set-up your profile</Typography>
          <div className={classes.textFieldOuter}>
            <div className={classes.inputFieldOuter}>
              <InputField
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
              />
            </div>
            <div className={classes.inputFieldOuter}>
              <InputField
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                inputStyle={classes.textFieldStyle}
              />
            </div>
          </div>

          <div className={classes.inputFieldOuter}>
            <InputField
              name="email"
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>

          <div className={classes.choiceOuter}>
            <Typography className={classes.iamText}>I am </Typography>
            <FormGroup
              row
              value={''}
            >
              <FormControlLabel
                label="A supplier"
                classes={{
                  label: classes.labelText
                }}
                control={
                  <Checkbox
                    checked={true}
                    icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                    checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                    value={'seller'}
                  />
                }
              />

              <FormControlLabel
                label="A buyer "
                classes={{
                  label: classes.labelText
                }}

                control={
                  <Checkbox
                    checked={false}
                    icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                    checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                    value={'buyer'}
                  />
                }
              />

              <FormControlLabel
                label="Both"
                classes={{
                  label: classes.labelText
                }}
                control={
                  <Checkbox
                    checked={true}
                    icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                    checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                    value={'both'}
                  />
                }
              />
            </FormGroup>
          </div>

          <div className={classes.choiceOuter}>
            <Typography className={classes.iamText}>I am located in</Typography>
          </div>
          <div className={classes.buttonOuter}>
            <div className={classes.leftButtonOuter}>
              <RoundButton
                title={'Start browsing'}
                containerStyle={classes.startButton}
              />
            </div>
            <div className={classes.rightButtonOuter}>
              <RoundButton
                title={'Personalize your account'}
                containerStyle={classes.personalizeButton}
                textStyle={classes.buttonText}
              />
            </div>
          </div>
        </Formsy>
      </div>
    </FullWidth>
  );
};


export default (SetUpBuyerProfile);