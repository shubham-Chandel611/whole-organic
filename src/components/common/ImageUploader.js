/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import { makeStyles, } from "@material-ui/core";
import _ from 'lodash';
import { FaCamera } from 'react-icons/fa';
import styles from '../../assets/css/components/common/ImageUploader.style';
import { imageUrls } from "../../constants/ImageUrl";

const useStyles = makeStyles(styles);

const ImageUploader = ({
  onChange,
  bgStyle,
  imageStyles,
  id,
  oldImage
}) => {
  const classes = useStyles();

  const [image, setImage] = useState(oldImage ? oldImage : null)
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    onChange(e)
  }
  console.log('image=-=-=-=-', image)
  return (
    <Fragment>
      <input
        accept="image/*"
        className={classes.displayNone}
        id={(id) ? id :"contained-button-file"}
        type="file"
        onChange={(e) => handleImageChange(e)}
      />
      <label className={(bgStyle) ? bgStyle : classes.imageBg} htmlFor={(id) ? id : 'contained-button-file'}>
        {image ?
          <img src={image} className={(imageStyles) ? imageStyles : classes.userImage} />
          :
          <FaCamera size={50} color={"#C3C3C3"} />
        }
      </label>
    </Fragment>
  );
};

export default ImageUploader