import React, { useState } from "react";
import { Typography, makeStyles, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Switch from "react-switch";
import Formsy from 'formsy-react';
import { connect } from "react-redux";
import RoundButton from '../../../components/button/RoundButton';
import styles from '../../../assets/css/profile/PersonalAccount.style'
import InputField from '../../../components/common/InputField';
import TopHeading from '../../../components/common/TopHeading';
import ImageUploader from '../../../components/common/ImageUploader';
import LabelInput from '../../../components/common/LabelInput';

const useStyles = makeStyles(styles);

const SellerPersonalViewProfile = ({
  token,
  categories
}) => {
  const classes = useStyles();
  const [imgData, setImgData] = useState(false);
  const [event, setEvent] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      productName: '',
      category: 0,
      subCategory: 0,
    }
  )

  const handleDocUpload = (e, type) => {
    var file = e.target.files[0];
    setImgData(file)
  }

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const {
    category,
    subCategory
  } = event;

  return (

    <div className={classes.container}>

      <Formsy
        id="personalAccount"
      >

        <TopHeading
          heading='My personal account'
          subHeading='General info'
        />

        <div>

          <div className={classes.profileImageOuter}>
            <ImageUploader
              onChange={(event) => handleDocUpload(event, 'Id')}
            />
          </div>

          <div className={classes.userInfo}>

            <div className={classes.inputOuter}>
              <LabelInput label='First name' required />
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
              <LabelInput label='Last name' required />
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
            <div className={classes.inputOuter}>
              <LabelInput label='Email address' required />
              <InputField
                variant="outlined"
                type="text"
                placeholder="Email"
                name="email"
                required
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

          <Typography className={classes.changePassword}><u>Change password</u></Typography>

          <RoundButton
            title={'Save changes'}
          />

        </div>


        <div>
          <Typography className={classes.selectProduct}>Select products categories you're interested in</Typography>

          <div className={classes.userInfo}>

            <div className={classes.selectOuter} >
              <FormControl variant="outlined" fullWidth>
                <Select
                  name='category'
                  value={category}
                  onChange={handleChange}
                  className={classes.selectTextField}
                >
                  <MenuItem><em>Select a category</em></MenuItem>
                  {categories && categories.length ? categories.map((item) => (
                    <MenuItem key={item.id} value={item.slug}>
                      {item.name}
                    </MenuItem>
                  )) : null}
                </Select>
              </FormControl>
            </div>
            <div className={classes.selectRightOuter} >
              <FormControl variant="outlined" fullWidth>
                <Select
                  name='subCategory'
                  value={subCategory}
                  onChange={handleChange}
                  className={classes.selectTextField}
                >
                  <MenuItem><em>Select sub-category</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={classes.addButttonOuter}>
              <RoundButton
                title={'Add'}
                containerStyle={classes.roundContainer}
              />
            </div>

          </div>

          <div className={classes.displayFlex}>

            <div className={classes.addListOuter}>
              <Typography className={classes.listName}><u>Sun cream</u></Typography>
              <Close className={classes.closeIcon} />
            </div>

            <div className={classes.addListOuter}>
              <Typography className={classes.listName}><u>Sun cream</u></Typography>
              <Close className={classes.closeIcon} />
            </div>

            <div className={classes.addListOuter}>
              <Typography className={classes.listName}><u>Sun cream</u></Typography>
              <Close className={classes.closeIcon} />
            </div>

          </div>


          <RoundButton
            title={'Save changes'}
          />

        </div>

        <div>
          <Typography className={classes.selectProduct}>Notify me about</Typography>

          <div className={classes.switchContainer}>
            <div className={classes.switchOuter}>
              <Switch
                className={classes.reqSwitchOff}
                //onChange={(e) => handleInstaBook(e)}
                checked={true}
                offColor="#EDEBEB"
                onColor="#EDEBEB"
                offHandleColor='#0CB69B'
                onHandleColor='#AAAAAA'
                checkedIcon={
                  <div> </div>
                }
                uncheckedIcon={
                  <div> </div>
                }
                width={65}
              />
              <Typography className={classes.switchRightText}>New products</Typography>
            </div>

          </div>
        </div>

      </Formsy>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  categories: state.product.categories
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerPersonalViewProfile);