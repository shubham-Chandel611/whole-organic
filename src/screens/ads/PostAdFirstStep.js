import React, { useState, useEffect, useRef } from "react";
import { Typography, makeStyles, MenuItem, Select } from "@material-ui/core";
import { connect } from "react-redux";
import styles from "../../assets/css/ads/PostAdStepFirst.style";
import Formsy from "formsy-react";
import InputField from '../../components/common/InputField';
import RoundButton from "../../components/button/RoundButton";
import { getCategoryList, getSubCategoryList, resetData } from '../../store/product/actions';

const useStyles = makeStyles(styles);

const PostAdsStepFirst = ({
  getCategoryList,
  getSubCategoryList,
  categories,
  subCategories,
  resetData,
  postcallback,
  edit,
  item,
  handleNameChange
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [formIsValid, setFormIsValid] = useState(false);
  const [event, setEvent] = useState(
    {
      name: (item && item.length>0) ? item[0].name : '',
      category: (item && item.length>0) ? 26 : 0,
      subCategory: (item && item.length>0) ? item[0].sub_category_id : 0,
      unit: 0
    }
  )

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    if (e.target.name === 'category' && !item) {
      getSubCategoryList(e.target.value)
    }
    setEvent({ ...event, [e.target.name]: e.target.value });
  };
  

  const onSubmit = (modal) => {
    postcallback(modal.product, category, subCategory)
  }

  const enableButton = () => {
    setFormIsValid(true)
  };

  const disableButton = () => {
    setFormIsValid(false)
  };

  useEffect(() => {
    resetData();
    if(item && item.length>0){
      getSubCategoryList(26)
    }
    getCategoryList();
  }, []);

  const {
    name,
    category,
    subCategory
  } = event;

  return (
    <Formsy
      id="postAdsFirstStep"
      onValidSubmit={(e) => onSubmit(e)}
      onValid={() => enableButton()}
      onInvalid={() => disableButton()}
      ref={form}
    >
      <div className={(!edit) ? classes.container : classes.editConatiner}>
        {(!edit) && <Typography className={classes.title}>Post an ad</Typography>}
        <Typography className={(!edit) ? classes.desc : classes.editDesc}>{(!edit) ? 'Add specific products details you’re interested in selling' : 'Define your product'}</Typography> 
        
        <div className={classes.dropDownContainer}>
          <Select
            name='category'
            onChange={handleChange}
            className={classes.selectTextField}
            value={category}
            defaultValue="Select"
            placeholder='Select'
          >
            <MenuItem value={0} disabled>Select Category</MenuItem>
            {(categories && categories.length > 0) ? categories.map((item) => (
              <MenuItem key={item.name} value={item.id}>
                {item.name}
              </MenuItem>
            )) : null}
          </Select>
          <Select
            name='subCategory'
            onChange={handleChange}
            className={classes.selectTextField}
            value={subCategory}
            defaultValue="Select"
            placeholder='Select'
          >
            <MenuItem value={0} disabled>Select Sub Category</MenuItem>
            {(subCategories && subCategories.length > 0) ? subCategories.map((item) => (
              <MenuItem key={item.name} value={item.id}>
                {item.name}
              </MenuItem>
            )) : null}
          </Select>
          <div className={classes.nameOuter}>
            <div className={classes.inputFieldOuter}>
              <InputField
                placeholder="Type product name here…"
                inputName="Type"
                name="product"
                inputValue={name}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>

        {(!edit) && <div className={classes.bottomButtonContainer}>
          <div className={classes.buttonOuter} >
            <RoundButton
              title={'Continue'}
              type="submit"
              disabled={!formIsValid || category === 0 || subCategory === 0}
              containerStyle={classes.doneButton}
            />
          </div>
          <div className={classes.buttonOuter}>
            <RoundButton
              title={'Back'}
              containerStyle={classes.postButton}
              textStyle={classes.buttonText}
            />
          </div>
        </div>}
      </div>
    </Formsy>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  categories: state.product.categories,
  subCategories: state.product.subCategories,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
});

const mapDispatchToProps = dispatch => ({
  getCategoryList: () => dispatch(getCategoryList()),
  getSubCategoryList: (id) => dispatch(getSubCategoryList(id)),
  resetData: () => dispatch(resetData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAdsStepFirst);

