/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import MainLogo from "../../assets/images/footer_logo.png";
import { NavLink } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import styles from "../../assets/css/components/common/Footer.style";
import IconWithBg from "../../components/common/IconWithBg";
import { AiOutlineUser } from "react-icons/ai";
import { getCategoryList } from '../../store/product/actions';

const useStyles = makeStyles(styles);
const Footer = ({
  getCategoryList,
  categories,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getCategoryList();
  }, []);

  const RenderCategoryList = () => {
    return categories && categories.length && categories.map((item, index) => {
      return (
        <NavLink
          to={`/listing?catId=${item.id}`}
          className={classes.navLink}
          activeClassName={classes.active}
          exact
          key={'foot-cat-' + index}
        >
          {item.name}
        </NavLink>
      )
    })
  };

  return (
    <div className={classes.root}>
      <img src={MainLogo} className={classes.siteLogo} />

      <div className={classes.leftNav} >
        <Typography className={classes.heading}>Categories</Typography>
        <div className={classes.leftNavmanu}>
          {RenderCategoryList()}
        </div>
      </div>

      <div className={classes.middleNav} >
        <div className={classes.middleNavMenu} >
          <NavLink
            to="/about-us"
            className={[classes.navLink, classes.secondMenu].join(' ')}
            activeClassName={classes.active}
            exact
          >
            About us
          </NavLink>
          <NavLink
            to="/legal"
            className={[classes.navLink, classes.secondMenu].join(' ')}
            activeClassName={classes.active}
            exact
          >
            Legal
          </NavLink>
          {/* <NavLink
            to="/about-us"
            className={[classes.navLink, classes.secondMenu].join(' ')}
            activeClassName={classes.active}
            exact
          >
            Ad a post
          </NavLink> */}
          <NavLink
            to="/faq"
            className={[classes.navLink, classes.secondMenu].join(' ')}
            activeClassName={classes.active}
            exact
          >
            FAQs & Support
                </NavLink>
          <NavLink
            to="/contact-us"
            className={[classes.navLink, classes.secondMenu].join(' ')}
            activeClassName={classes.active}
            exact
          >
            Contact us
                </NavLink>
        </div>
      </div>

      <div className={classes.rightNav} >
        <IconWithBg Icon={AiOutlineUser} containerStyle={classes.loginIconOuter} />
        <IconWithBg Icon={AiOutlineUser} containerStyle={classes.loginIconOuter} />
        <IconWithBg Icon={AiOutlineUser} containerStyle={classes.loginIconOuter} />
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  categories: state.product.categories,
  userData: state.login.userData
});

const mapDispatchToProps = dispatch => ({
  getCategoryList: () => dispatch(getCategoryList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
