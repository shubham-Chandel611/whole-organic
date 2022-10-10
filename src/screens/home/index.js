/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Grid, Typography, makeStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import InputField from '../../components/common/InputField';
import Formsy from "formsy-react";
import { Search } from '@material-ui/icons';
import ProductCard from "../../components/common/productCard.js";
import Banner from "../../assets/images/static/banner.jpg";
import logo from "../../assets/images/logo-icon.png";
import styles from "../../assets/css/home/Home.style";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Carousel from 'nuka-carousel';
import { getCategoryList, getSubCategoryList, resetData } from '../../store/product/actions';
import { getHomeProducts, getRecommendationProducts } from '../../store/home/actions';
import history from "../../history/index";
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import RoundButton from '../../components/button/RoundButton';

let homeData = []
let recommendedData = []
const useStyles = makeStyles(styles);
const data = ['1', '2', '3', '4', '5', '6']
const Home = ({
  getCategoryList,
  getSubCategoryList,
  categories,
  getHomeProducts,
  homeProducts,
  token,
  userId,
  userData,
  subCategories,
  getRecommendationProducts,
  resetData,
  recommendedProducts
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [event, setEvent] = useState(
    {
      name: '',
      category: 0,
      subCategory: 0,
      unit: 0
    }
  )
  const [expend, setListItem] = useState(false)

  const [expendRecommended, setListItemRecomended] = useState(false)

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    if (e.target.name == 'category') {
      getSubCategoryList(e.target.value)
    }
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onExpend = () => {
    setListItem(!expend)
  }

  const onExpendRecomended = () => {
    setListItemRecomended(!expendRecommended)
  }

  useEffect(() => {
    resetData();
    getRecommendationProducts(userId, token)
    getCategoryList();
    getHomeProducts()
  }, []);


  const {
    name,
    category,
    subCategory,
  } = event;

  if (!expend && homeProducts && homeProducts.length > 6) {
    homeData = homeProducts.slice(0, 6)
  } else {
    homeData = homeProducts
  }

  if (!expendRecommended && recommendedProducts && recommendedProducts.length > 6) {
    recommendedData = recommendedProducts.slice(0, 6)
  } else {
    recommendedData = recommendedProducts
  }


  const searchClicked = (e) => {
    let str = '/listing'
    if (category !== 0) {
      str = `${str}?catId=${category}`
    }
    if (subCategory !== 0 && category !== 0) {
      str = `${str}&subId=${subCategory}`
    }
    if (e.name && e.name !== '' && subCategory !== 0 && category != 0) {
      str = `${str}&name=${e.name}`
    } else if (e.name && e.name !== '' && subCategory === 0 && category === 0) {
      str = `${str}?name=${e.name}`
    }
    history.push(str)

  }

  return (
    <Grid container className={classes.firstSectionRoot}>
      <Header />
      <div className={classes.homeContainer}>
        <div className={classes.corousalContainer}>
          <Carousel
            autoplay={true}
            heightMode={{ max: 1000 }}
            autoplayInterval={1000}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            pagingDotsStyle={{ alignSelf: 'center', }}
          >
            {data.map((item) =>
              <CardMedia
                className={classes.cardImage}
                image={Banner}
              >
                <div className={classes.cardMediaImageContainer}>
                  <div className={classes.imageTextOuter}>
                    <Typography className={classes.imageText}>ORGANICS AT YOUR FINGERTIPS</Typography>
                  </div>

                  <RoundButton
                    title='Start shopping'
                    containerStyle={classes.shoppingButton}
                  />
                </div>
              </CardMedia>
            )}
          </Carousel>
        </div>
        <Formsy
          id="filter"
          onValidSubmit={(e) => searchClicked(e)}
          // onValid={() => enableButton()}
          // onInvalid={() => disableButton()}
          ref={form}
        >

          <div className={classes.midSearchContainer}>
            <div className={classes.txtset}>
              <Typography className={classes.productSearch}>Search a Product</Typography>
            </div>
            <div className={classes.categoryOuter}>
              <Select
                name='category'
                onChange={handleChange}
                className={classes.selectTextField}
                value={category}
                defaultValue="Select"
                placeholder='Select'
              >
                <MenuItem value={0}>Select a category</MenuItem>
                {(categories && categories.length > 0) ? categories.map((item) => (
                  <MenuItem key={item.name} value={item.id}>
                    {item.name}
                  </MenuItem>
                )) : null}
              </Select>
            </div>

            <div className={classes.categoryOuter}>
              <Select
                name='subCategory'
                onChange={handleChange}
                className={classes.selectTextField}
                value={subCategory}
                defaultValue="Select"
                placeholder='Select'
              >
                <MenuItem value={0}>Select sub-category</MenuItem>
                {(subCategories && subCategories.length > 0) ? subCategories.map((item) => (
                  <MenuItem key={item.name} value={item.id}>
                    {item.name}
                  </MenuItem>
                )) : null}
              </Select>
            </div>

            <div className={classes.emailOuter}>
              <InputField
                placeholder="Or type product name here…"
                inputName="Type"
                name="name"
                inputValue={name}
                handleChange={handleChange}
                inputStyle={classes.productInput}
              />
            </div>

            <div className={classes.roundOuter}>
              <RoundButton
                title='Search'
                type="submit"
                inputStartIcon={<Search className={classes.searchIcon} />}
                containerStyle={classes.roundContainer}

                textStyle={classes.buttonText}
              />
            </div>

          </div>

        </Formsy>

        {(token && userData.type === 'buyer') && (recommendedData && recommendedData.length) ?
          <div>
            <div className={classes.subHeaderContainer1}>
              <div className={classes.moreContainer}>
                <img src={logo} className={classes.logoStyle} />
                <Typography className={classes.subHeader}>Recomended for you</Typography>
              </div>
              <Button onClick={() => onExpendRecomended()} className={classes.moreContainer}>
                <div className={classes.addMoreIconView}>
                  {(!expendRecommended) ? <AddIcon className={classes.removeIcon} /> : <Remove className={classes.removeIcon} />}
                </div>
                <Typography className={classes.moretxt}>{(!expendRecommended) ? 'more' : 'less'}</Typography>
              </Button>
            </div>

            {(recommendedData && recommendedData.length > 0) && <Grid
              className={classes.itemContainer}
              container
              spacing={6}
            >
              {recommendedData.map((item) => {
                return <Grid item xs={4} className={classes.pcard}>
                  <ProductCard 
                    data={item}
                    isEdit={false}
                  />
                </Grid>
              })}
            </Grid>}
          </div> :
          null
        }
        <div className={classes.subHeaderContainer}>
          <div className={classes.moreContainer}>
            <img src={logo} className={classes.logoStyle} />
            <Typography className={classes.subHeader}>Most Popular</Typography>
          </div>
          <Button onClick={() => onExpend()} className={classes.moreContainer}>
            <div className={classes.addMoreIconView}>
              {(!expend) ? <AddIcon className={classes.removeIcon} /> : <Remove className={classes.removeIcon} />}
            </div>
            <Typography className={classes.moretxt}>{(!expend) ? 'more' : 'less'}</Typography>
          </Button>
        </div>
        {(homeData && homeData.length > 0) && <Grid
          className={classes.itemContainer}
          container
          spacing={6}
        >
          {homeData.map((item) => {
            return <Grid item xs={4} className={classes.pcard}>
              <ProductCard 
                data={item}
                isEdit={false}
              />
            </Grid>
          })}
        </Grid>}
      </div>
      <Footer />
    </Grid>
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
  homeProducts: state.home.homeProducts,
  recommendedProducts: state.home.recommendedProducts,
  userId: state.login.userId,
});

const mapDispatchToProps = dispatch => ({
  getCategoryList: () => dispatch(getCategoryList()),
  getSubCategoryList: (id) => dispatch(getSubCategoryList(id)),
  resetData: () => dispatch(resetData()),
  getHomeProducts: () => dispatch(getHomeProducts()),
  getRecommendationProducts: (id, token) => dispatch(getRecommendationProducts(id, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

