import React from "react";
import { connect } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import FullWidth from "../../layout/FullWidth";
import styles from '../../assets/css/aboutWhole/Aboutus.style';
import MainLogo from "../../assets/images/logo-icon.png";
import ProductImage from "../../assets/images/static/productImage.png";

const links = [{
  link: "#",
  name: "About us"
}]

const useStyles = makeStyles(styles);
const Aboutus = () => {
  const classes = useStyles();
  return (
    <FullWidth
      breadCrumbLink={links}
    >
      <div className={classes.container}>

        <div className={classes.outer}>
          <img src={ProductImage} alt="product" className={classes.productImageStyle} />
          <img src={MainLogo} alt="logo" className={classes.imageLogoStyle} />

          <div className={classes.rightOuter}>
            <Typography className={classes.label}>Who we are</Typography>
            <Typography className={classes.description}>Yse eu minim incididunt aliquip dolore magna eiusmod incididunt
            mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in tempor
            enim minim incididunt velit tempor irure mollit voluptate consequat commodo.Product description,
            dolor esse eu minim incididunt aliquip dolore magna eiusmod incididunt mollit et occaecat nisi ex aute
            elit velit cupidatat eiusmod excepteur incididunt nulla in tempor enim minim incididunt velit tempor irure
            mollit voluptate consequat commodo.Product description, dolor esse eu minim incididunt aliquip dolore magna
            eiusmod incididunt mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in
              tempor enim minim incididunt velit tempor irure mollit voluptate consequat commodo.</Typography>
          </div>
        </div>

      </div>
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
)(Aboutus);