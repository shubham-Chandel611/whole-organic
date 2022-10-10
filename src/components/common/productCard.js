import React, { useState } from "react";
import { Typography, makeStyles, CardMedia, Card } from "@material-ui/core";
import { connect } from "react-redux";
import unFavIcon from "../../assets/images/unFavIcon.png";
import favIcon from "../../assets/images/favIcon.png";
import ProductImage from "../../assets/images/static/productImage.png";
import styles from "../../assets/css/components/common/productCard.style";
import RoundButton from '../../components/button/RoundButton';
import { imageUrls } from '../../constants/ImageUrl';
import { favouriteTrueAction, favouriteFalseAction } from '../../store/favourites/actions';
import history from "../../history/index";
import { Link } from 'react-router-dom';
import { Split_Text } from '../../helpers/Utility';

const useStyles = makeStyles(styles);

const ProductCard = ({
  data,
  container,
  userData,
  token,
  isFavourite,
  isEdit
}) => {
  console.log('data', data)
  const {
    name, 
    description, 
    shipped_from, 
    price, 
    price_unit_type, 
    is_favorite, 
    photos, 
    sub_category, 
    seller_name,
    id : productId 
  } = data;
  const classes = useStyles();
  const [like, setLike] = useState(isFavourite ? true : is_favorite === 1 ? true : false)

  const handleFavourite = () => {
    setLike(!like)
    if (like) {
      favouriteFalseAction(userData.id, productId, token)
    }
    else {
      favouriteTrueAction(userData.id, productId, token)
    }
  }

  const onImageClick = () => {
    history.push(`/product-detail/${productId}`)
  }

  return (
    <Card className={[classes.itemContainer, container && container].join(' ')}>
      <div className={classes.imageStyle} onClick={() => onImageClick()}>
        <CardMedia
          className={classes.imageStyle}
          image={(photos && photos.length) ? imageUrls + photos[0].image : ProductImage}
        >
          <div className={classes.amoutTextContainer}>
            <div className={classes.priceOuter}>
              <Typography className={classes.dollarText}>{'$'}</Typography>
              <Typography className={classes.amount}>{(price) ? parseFloat(price).toFixed(2) : null}</Typography>
            </div>
          </div>
        </CardMedia>
      </div>

      <div className={classes.midContainer}>
        <Typography className={classes.labelHeading} onClick={() => onImageClick()}>{(name) ? name : ''}</Typography>

        <div className={classes.iconOuter}>
          <div style={{ width: '100%' }} onClick={() => onImageClick()}>
            <Typography className={classes.labelType} >{(sub_category && sub_category.category) ? sub_category.category.name : ''}</Typography>
          </div>
          {(token) && (<img src={(like) ? favIcon : unFavIcon} className={classes.iconStyle} alt={name} onClick={() => handleFavourite()} />)}
        </div>

        <div onClick={() => onImageClick()}>
          <Typography className={classes.description}>{(shipped_from) ? `${Split_Text(shipped_from, 50)}, ` : ''} <u>{(seller_name) ? seller_name : 'name of seller'}</u></Typography>
          {isEdit ?
            <div >
              <div style={{ padding: '40px 3% 24px 0px' }}>
                <Typography className={classes.description}>{(description) ? description : ''}</Typography>
              </div>
              <div className={classes.buttonContainer}>
                <div className={classes.editButton}>
                  <RoundButton
                    title={'Edit'}
                    onClick={() => history.push(`/edit-ad/${productId}`)}
                    containerStyle={classes.editRoundButton}
                  />
                </div>
                <div className={classes.previewButton}>
                  <RoundButton
                    title={'Preview'}
                    containerStyle={classes.previewRoundButton}
                    textStyle={classes.previewTextColor}
                  />
                </div>
              </div>
            </div> : null
          }
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userData: state.login.userData,
});

const mapDispatchToProps = dispatch => ({
  favouriteTrueAction: (userId, pId, token) => dispatch(favouriteTrueAction(userId, pId, token)),
  favouriteFalseAction: (userId, pId, token) => dispatch(favouriteFalseAction(userId, pId, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);

