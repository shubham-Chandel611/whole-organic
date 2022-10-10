import React, { useEffect, useState, useRef } from "react";
import { Typography, makeStyles, FormControl, MenuItem, Select, InputLabel, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { Close } from "@material-ui/icons";
import Formsy from 'formsy-react';
import { Link } from 'react-router-dom';
import styles from '../../../assets/css/profile/BuyerProfile.style';
import { getCategoryList, getSubCategoryList, buyerProfilePersonalAction, getNotifyBuyerList, notifyBuyerListAction, resetData } from '../../../store/product/actions';
import LeftNavLayout from '../../../layout/LeftNavLayout';
import RoundButton from '../../../components/button/RoundButton';
import InputField from '../../../components/common/InputField';
import TopHeading from '../../../components/common/TopHeading';
import ImageUploader from '../../../components/common/ImageUploader';
import { getProfileData } from '../../../store/register/actions';
import { profileImageBaseUrl } from '../../../constants/constant';
import { addInterest, removeInterest } from '../../../store/register/actions';
import Switch from '../../../components/common/Switch';
import LabelInput from '../../../components/common/LabelInput';

const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "My profile "
}];

const useStyles = makeStyles(styles);

const BuyerProfile = ({
  getCategoryList,
  getSubCategoryList,
  token,
  categories,
  buyerProfilePersonalAction,
  userData,
  getNotifyBuyerList,
  notifyBuyerList,
  notifyBuyerListAction,
  message,
  error,
  resetData,
  getProfileData,
  profiledata,
  subCategories,
  addInterest,
  removeInterest
}) => {
  const classes = useStyles();
  const personalForm = useRef(null);
  const [imgData, setImgData] = useState(false);
  const [personalIsValid, setPersonalIsValid] = useState(false);
  const [serverInterest, setServerInterest] = useState(profiledata.interested_sub_categories ? profiledata.interested_sub_categories : []);
  const [event, setEvent] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      productName: '',
      category: 0,
      subCategory: [],
      tempSubCategory: [0],
    }
  )

  const { first_name, last_name, email, id, settings } = profiledata ? profiledata : userData
  console.log('profiledata', profiledata, settings)

  const handleChange = e => {
    if (e.target.name === 'category') {
      getSubCategoryList(e.target.value)
    }
    if (e.target.name === 'tempSubCategory') {
      const selectedSubCat = e.target.value.filter(item => item !== 0);
      setEvent({ ...event, [e.target.name]: selectedSubCat });
    } else {
      setEvent({ ...event, [e.target.name]: e.target.value });
    }
  };

  const { category, subCategory, tempSubCategory } = event;

  const addUserInterest = () => {
    const selectedSubCat = tempSubCategory.map(item => {
      return subCategories.filter(sub => sub.id === item)[0];
    });
    setEvent({ ...event, 'subCategory': selectedSubCat, 'tempSubCategory': [0], 'category': 0 });
  }

  const saveInterest = () => {
    const selectedsaveCat = subCategory.map(item => {
      return { "product_sub_category_id": item.id };
    });
    console.log('selectedsaveCat', selectedsaveCat);
    addInterest(id, token, selectedsaveCat);
  }

  const onSubmit = (model) => {
    var formdata = new FormData();
    formdata.append("first_name", model.firstName);
    formdata.append("last_name", model.lastName);
    formdata.append("email", userData.businessEmail);
    formdata.append("business_account_type", "personal");
    imgData && formdata.append("image", imgData, "file");
    console.log('formdata', formdata)
    buyerProfilePersonalAction(formdata, userData.id, token)
  }

  const disablePersonalButton = () => {
    setPersonalIsValid(false);
  };

  const enablePersonalButton = () => {
    setPersonalIsValid(true);
  };

  const handleDocUpload = (e, type) => {
    var file = e.target.files[0];
    setImgData(file)
  }

  const handleSwitchChange = (checkedValue, item) => {
    const data = {
      'key': item.name,
      'value': checkedValue === true ? '1' : '0',
      'type': item.type
    }
    notifyBuyerListAction(data, userData.id, token)
  }

  const closeAlert = () => {
    resetData();
  }

  const removeInt = (intid) => {
    const updatedInt = serverInterest && serverInterest.length && serverInterest.filter(item => item.interest_id !== intid);
    console.log('removeInt', intid, updatedInt)
    setServerInterest(updatedInt);
    removeInterest(id, token, intid)
  }

  useEffect(() => {
    resetData();
    getCategoryList(token);
    getNotifyBuyerList(token);
    getProfileData(id, token)

  }, []);

  const removeTemp = (id) => {
    const updatedInt = subCategory && subCategory.length && subCategory.filter(item => item.id !== id);
    setEvent({ ...event, 'subCategory': updatedInt });
  }

  return (
    <LeftNavLayout
      alertMessage={message}
      showAlert={message ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={error ? 'error' : 'success'}
    >
      <div className={classes.container}>
        <Formsy
          id="personalAccount"
        >
          <TopHeading
            heading='My personal account'
            subHeading='General info'
          />
          <Formsy
            id="personalInfo"
            onValid={() => enablePersonalButton()}
            onInvalid={() => disablePersonalButton()}
            onValidSubmit={(e) => onSubmit(e)}
            ref={personalForm}
          >
            <div className={classes.profileImageOuter}>
              <ImageUploader
                onChange={(event) => handleDocUpload(event, 'Id')}
                oldImage={profiledata.profile_picture ? profileImageBaseUrl + profiledata.profile_picture : ''}
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
                  value={first_name}
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
                  value={last_name}
                />
              </div>
              <div className={classes.inputOuter}>
                <LabelInput label='Email address' />
                <InputField
                  variant="outlined"
                  type="text"
                  name="email"
                  defaultValue={userData.email}
                  disabled
                  validationErrors={{
                    isEmail: 'Please enter a valid email'
                  }}
                  inputProps={{
                    maxLength: 50,
                  }}
                  inputStyle={classes.inputTextField}
                  value={email}
                />
              </div>
            </div>
            <Link className={classes.changePassword} to="/edit_password" ><u>Change password</u></Link>
            <RoundButton
              title={'Save changes'}
              type="submit"
              disabled={!personalIsValid}
            />
          </Formsy>
          <div>
            <Typography className={classes.selectProduct}>Select products categories you're interested in</Typography>
            <div className={classes.userInfo}>
              <div className={classes.selectOuter} >
                <FormControl variant="outlined" fullWidth>
                  <Select
                    name='category'
                    value={category}
                    onChange={(e) => handleChange(e)}
                    className={classes.selectTextField}
                  >
                    <MenuItem value={0}>Select a category</MenuItem>
                    {categories && categories.length ? categories.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    )) : null}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.selectRightOuter} >
                <FormControl variant="outlined" fullWidth>
                  <Select
                    multiple
                    displayEmpty
                    value={tempSubCategory}
                    name='tempSubCategory'
                    onChange={(e) => handleChange(e)}
                    className={classes.selectTextField}
                  >
                    <MenuItem disabled value={0}>Select sub-category</MenuItem>
                    {subCategories && subCategories.length ? subCategories.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    )) : null}
                  </Select>
                </FormControl>
              </div>

              <div className={classes.addButttonOuter}>
                <RoundButton
                  title={'Add'}
                  containerStyle={classes.roundContainer}
                  disabled={!tempSubCategory.length || (tempSubCategory.length && tempSubCategory[0] === 0)}
                  onClick={() => addUserInterest()}
                />
              </div>

            </div>

            <div className={classes.displayFlex}>
              {serverInterest && serverInterest.length ? serverInterest.map(item => {
                if (item.product_sub_category) {
                  return (
                    <div className={classes.addListOuter}>
                      <Typography className={classes.listName}><u>{item.product_sub_category.name}</u></Typography>
                      <Close className={classes.closeIcon} onClick={() => removeInt(item.interest_id)} />
                    </div>
                  );
                }
              }) : null}
              {subCategory && subCategory.length ? subCategory.map(item => {
                return (
                  <div className={classes.addListOuter}>
                    <Typography className={classes.listName}><u>{item.name}</u></Typography>
                    <Close className={classes.closeIcon} onClick={() => removeTemp(item.id)} />
                  </div>
                );
              }) : null}
            </div>

            <RoundButton
              title={'Save changes'}
              onClick={() => saveInterest()}
            />

          </div>

          <div>
            <Typography className={classes.selectProduct}>Notify me about</Typography>
            <div style={{ display: 'flex' }}>
              {notifyBuyerList && notifyBuyerList.length && notifyBuyerList[1].length ?
                notifyBuyerList[1].map((item, index) => {
                  const selData = (settings && settings.length) ? settings.filter(filterItem => filterItem.key === item.name) : null;
                  let checked = (selData && selData.length) ? selData[0].value : false;
                  console.log(typeof (checked))
                  return <Switch item={item} handleSwitchChange={handleSwitchChange} checked={checked === '0' ? false : checked === '1' ? true : false} />
                }) :
                null
              }
            </div>
          </div>

        </Formsy>
      </div>
    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  categories: state.product.categories,
  userData: state.login.userData,
  notifyBuyerList: state.product.notifyBuyerList,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
  profiledata: state.register.profiledata,
  subCategories: state.product.subCategories,
});

const mapDispatchToProps = dispatch => ({
  getCategoryList: (token) => dispatch(getCategoryList(token)),
  getNotifyBuyerList: (token) => dispatch(getNotifyBuyerList(token)),
  buyerProfilePersonalAction: (data, id, token) => dispatch(buyerProfilePersonalAction(data, id, token)),
  notifyBuyerListAction: (data, id, token) => dispatch(notifyBuyerListAction(data, id, token)),
  resetData: () => dispatch(resetData()),
  getProfileData: (id, token) => dispatch(getProfileData(id, token)),
  getSubCategoryList: (id) => dispatch(getSubCategoryList(id)),
  addInterest: (id, token, data) => dispatch(addInterest(id, token, data)),
  removeInterest: (id, token, data) => dispatch(removeInterest(id, token, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerProfile);