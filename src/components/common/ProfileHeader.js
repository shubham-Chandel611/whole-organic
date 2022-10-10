import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import StarRatings from 'react-star-ratings';
import styles from '../../assets/css/components/common/ProfileHeader.style';
import RoundButton from '../../components/button/RoundButton';

const useStyles = makeStyles(styles);

const ProfileHeader = ({
  leftButtonName,
  rightButtonName,
  handleLeftButton,
  handleRightButton,
  sellerName,
  ratingCount,
  sellerLocation,
  sellerNumber,
  sellerImage
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <div className={classes.leftContainer}>

        <img src={sellerImage} alt="user" className={classes.imageStyle} />

        <div className={classes.ratingOuter}>
          <Typography className={classes.nameText}>{sellerName}</Typography>
          <div className={classes.starRating}>
            <StarRatings
              rating={ratingCount}
              starRatedColor={'#fff'}
              starDimension="17px"
              starSpacing="5px"
              starEmptyColor={'#38C2AC'}
            />
            <Typography className={classes.ratingNuber}>{parseFloat(ratingCount).toFixed(1)}</Typography>
          </div>
        </div>
        <div className={classes.midLine}></div>

        <div>
          <Typography className={classes.number}>{sellerLocation}</Typography>
          <Typography className={classes.number}>{`Call. ${sellerNumber}`}</Typography>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <div className={classes.buttonOuter}>
          <RoundButton
            title={leftButtonName ? leftButtonName : 'Rate Seller'}
            containerStyle={classes.rateSellerButton}
            onClick={()=> handleLeftButton()}
          />
        </div>
        <div className={classes.buttonOuter}>
          <RoundButton
            title={rightButtonName ? rightButtonName : 'Send Message'}
            containerStyle={classes.sendMessageButton}
            onClick={()=> handleRightButton()}
          />
        </div>
      </div>

    </div>
  );
};

export default ProfileHeader