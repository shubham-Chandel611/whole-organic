import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StarRatings from 'react-star-ratings';
import FullWidth from "../../layout/FullWidth";
import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import styles from '../../assets/css/profile/SupplierPage.style';
import MainLogo from "../../assets/images/logo-icon.png";
import ProfileHeader from '../../components/common/ProfileHeader';
import ProductCard from "../../components/common/productCard.js";
import { getAllRating, getNewItems, setRecentlyItem } from '../../store/supplierProfile/actions';
import SellerImage from "../../assets/images/static/userAvatar.png";
import { imageUrls } from '../../constants/ImageUrl';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
var moment = require('moment');
let newItem = []
let recentView = []
let rateList = [5, 4, 3, 2, 1]
const useStyles = makeStyles(styles);

const MyCart = ({
  match,
  getAllRating,
  supplierRating,
  newItems,
  getNewItems,
  setRecentlyItem,
  recentViews
}) => {
  const classes = useStyles();
  const [expend, setListItem] = useState(false)
  const [expendRecent, setExpendRecent] = useState(false)
  let links = [{
    link: "#",
    name: (supplierRating && supplierRating.first_name) ? supplierRating.first_name : null
  }]
  useEffect(() => {
    getAllRating(match.params.id)
    getNewItems(match.params.id)
    setRecentlyItem(match.params.id)
  }, []);
  //  return (
  //   <FullWidth
  //     breadCrumbLink={links}
  //   ></FullWidth>
  const onExpend = () => {
    setListItem(!expend)
  }
  const onExpendRecently = () => {
    setExpendRecent(!expendRecent)
  }
  if (!expend && newItems && newItems.length > 6) {
    newItem = newItems.slice(0, 6)
  } else {
    newItem = newItems
  }
  if (!expendRecent && recentViews && recentViews.length > 6) {
    recentView = recentViews.slice(0, 6)
  } else {
    recentView = recentViews
  }
  return (
    <FullWidth
      breadCrumbLink={links}
    >
      {(supplierRating && supplierRating !== null) && <div className={classes.mainContainer}>
        <ProfileHeader
          leftButtonName='Rate Seller'
          handleLeftButton={() => { }}
          sellerName={`${supplierRating.first_name}  ${supplierRating.last_name}`}
          ratingCount={(supplierRating && supplierRating.average_rating && supplierRating.average_rating !== null) ? supplierRating.average_rating : 0}
          sellerLocation={supplierRating.location}
          sellerNumber={9987567843}
          sellerImage={(supplierRating && supplierRating.profile_picture !== null) ? imageUrls + supplierRating.profile_picture : SellerImage}
        />

        <div className={classes.topDetailsSection}>
          <Typography className={classes.headingText}>About this seller</Typography>
          <Typography className={classes.productdes}>{supplierRating.business_description}</Typography>
          <div className={classes.midLine}></div>
          <div className={classes.ratingOuter}>
            {
              (supplierRating && supplierRating.average_per_item && supplierRating.average_per_item.length !== 0) &&
              supplierRating.average_per_item.map((res) => {
                return (
                  <div className={classes.ratingTextOuter}>
                    <Typography classname={classes.headingText}>{res.title}</Typography>
                    <StarRatings
                      rating={res.average_rating}
                      starRatedColor={'#0CB69B'}
                      starDimension="35px"
                      starSpacing="5px"
                      numberOfStars={5}
                      starEmptyColor={'#E8E8E8'}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={classes.midContainer}>
          <div className={classes.listContainer}>
            <div className={classes.subHeaderContainer1}>
              <div className={classes.moreContainer}>
                <img src={MainLogo} alt="user" className={classes.imageStyle} />
                <Typography className={classes.labelText}>New items</Typography>
              </div>
              <Button onClick={() => onExpend()} className={classes.moreContainer}>
                <div className={classes.addMoreIconView}>
                  {(!expend) ? <AddIcon className={classes.removeIcon} /> : <Remove className={classes.removeIcon} />}
                </div>
                <Typography className={classes.moretxt}>{(!expend) ? 'more' : 'less'}</Typography>
              </Button>
            </div>
            {(newItem && newItem.length > 0) && <Grid
              container
              spacing={6}
            >
              {newItem.map((item) => {
                return <Grid item xs={4}><ProductCard
                  data={item}
                  isEdit={false}
                /></Grid>
              })}
            </Grid>}
          </div>

          {/* <div className={classes.listContainer}>
            <div className={classes.labelTextOuter}>
              <img src={MainLogo} alt="user" className={classes.imageStyle} />
              <Typography className={classes.labelText}>Best sellers</Typography>
            </div>
            <Grid
              container
              spacing={6}
            >
              {data.map((item) => {
                return <Grid item xs={4}><ProductCard /></Grid>
              })}
            </Grid>
          </div> */}

          <div className={classes.listContainer}>
            <div className={classes.subHeaderContainer1}>
              <div className={classes.moreContainer}>
                <img src={MainLogo} alt="user" className={classes.imageStyle} />
                <Typography className={classes.labelText}>Recently viewed</Typography>
              </div>
              <Button onClick={() => onExpendRecently()} className={classes.moreContainer}>
                <div className={classes.addMoreIconView}>
                  {(!expendRecent) ? <AddIcon className={classes.removeIcon} /> : <Remove className={classes.removeIcon} />}
                </div>
                <Typography className={classes.moretxt}>{(!expendRecent) ? 'more' : 'less'}</Typography>
              </Button>
            </div>
            {(recentView && recentView.length > 0) && <Grid
              container
              spacing={6}
            >
              {recentView.map((item) => {
                return <Grid item xs={4}><ProductCard
                  data={item}
                  isEdit={false}
                /></Grid>
              })}
            </Grid>
            }
          </div>
        </div>


        <Typography className={classes.headingText}>Seller’s rating and reviews</Typography>
        <div className={classes.sellerRatingContainer}>
          <div className={classes.roundOuter}>
            <Typography className={classes.ratingValue}>{(supplierRating && supplierRating.average_rating !== null) ? parseFloat(supplierRating.average_rating).toFixed(1) : 0}</Typography>
            <StarRatings
              rating={(supplierRating && supplierRating.average_rating !== null) ? supplierRating.average_rating : 0}
              starRatedColor={'#fff'}
              starDimension="18px"
              starSpacing="5px"
              numberOfStars={5}
              starEmptyColor={'#38C2AC'}
            />
          </div>

          {rateList.map((res) => {
            return (
             <div>
                <div className={classes.progessRating}>
                <StarRatings
                  rating={1}
                  starRatedColor={'#D9D9D9'}
                  starDimension="13px"
                  numberOfStars={1}
                />
                <Typography className={classes.ratingNumber}>5</Typography>
                <div className={classes.progress}>
                  <div className={classes.progressPercent}></div>
                </div>
                <Typography className={classes.totalCount}>5</Typography>
              </div>
               </div>
            )
          })}
        </div>

        {(supplierRating && supplierRating.allReview && supplierRating.allReview.length !== 0) &&

          supplierRating.allReview.map((item) => {
            return (
              <div className={classes.bottomListContainer}>
                <div className={classes.bottonLeftOuter}>
                  <img src={(item && item.buyer_image !== null) ? imageUrls + item.buyer_image : SellerImage} alt="user" className={classes.userImageStyle} />
                  <StarRatings
                    rating={item.value}
                    starRatedColor={'#0CB69B'}
                    starDimension="25px"
                    starSpacing="5px"
                    numberOfStars={5}
                    starEmptyColor={'#DBDBDB'}
                  />
                  <Typography className={classes.userName}>{`${item.first_name} ${item.last_name}`}</Typography>
                  <Typography className={classes.dateText}>{moment(item.created_at).format('ll')}</Typography>
                </div>
                <div className={classes.divisionLine}></div>
                <div className={classes.bottomRightOuterc}>
                  <Typography className={classes.productLabel}>Good product</Typography>
                  <Typography className={classes.productDetails}>{item.review}</Typography>
                </div>
              </div>
            )
          })

        }
      </div>
      }
    </FullWidth >

  );
};

const mapStateToProps = state => ({
  supplierRating: state.supplier.supplierRating,
  newItems: state.supplier.newItems,
  recentViews: state.supplier.recentViews,

});

const mapDispatchToProps = dispatch => ({
  getAllRating: (id) => dispatch(getAllRating(id)),
  getNewItems: (id) => dispatch(getNewItems(id)),
  setRecentlyItem: (id) => dispatch(setRecentlyItem(id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCart);