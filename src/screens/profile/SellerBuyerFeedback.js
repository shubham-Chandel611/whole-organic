import React from "react";
import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";
import StarRatings from 'react-star-ratings';
import Formsy from 'formsy-react';
import FullWidth from "../../layout/FullWidth";
import styles from "../../assets/css/profile/SellerBuyerFeedback.style";
import RoundButton from "../../components/button/RoundButton";
import MainLogo from "../../assets/images/static/userAvatar.png";
import InputField from '../../components/common/InputField';

const links = [{
  link: "#",
  name: "Give feedback"
}]
const useStyles = makeStyles(styles);
const Feedback = () => {
  const classes = useStyles();
  return (
    <FullWidth
      breadCrumbLink={links}
    >
      <Formsy
        id="feedback"
      >
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div className={classes.imageOuter}>
              <img src={MainLogo} alt="user" className={classes.imageStyle} />
            </div>
            <Typography className={classes.userName}>Share your feedback on <b style={{ color: '#0DB4A1' }}>Barbara John</b> </Typography>
          </div>

          <div className={classes.ratingOuter}>
            <div className={classes.ratingTextOuter}>
              <Typography classname={classes.headingText}>Items as described</Typography>
              <StarRatings
                rating={2}
                starRatedColor={'#0CB69B'}
                starDimension="35px"
                starSpacing="5px"
                numberOfStars={5}
                starEmptyColor={'#E8E8E8'}
              />
            </div>
            <div className={classes.ratingTextOuter}>
              <Typography classname={classes.headingText}>Shipping speed</Typography>
              <StarRatings
                rating={2}
                starRatedColor={'#0CB69B'}
                starDimension="35px"
                starSpacing="5px"
                numberOfStars={5}
                starEmptyColor={'#E8E8E8'}
              />
            </div>
            <div className={classes.ratingTextOuter}>
              <Typography classname={classes.headingText}>Communication</Typography>
              <StarRatings
                rating={2}
                starRatedColor={'#0CB69B'}
                starDimension="35px"
                starSpacing="5px"
                numberOfStars={5}
                starEmptyColor={'#E8E8E8'}
              />
            </div>
          </div>

          <InputField
            variant="outlined"
            type="text"
            name='review'
            placeholder="Write a review"
            inputStyle={classes.multiTextField}
            // onChange={handleChange}
            rows={6}
            multiline
          />

          <RoundButton
            title='Save feedback'
          />

        </div>
      </Formsy>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
