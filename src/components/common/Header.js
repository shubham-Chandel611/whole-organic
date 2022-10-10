/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MainLogo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import styles from "../../assets/css/components/common/Header.style";
import IconWithBg from "../../components/common/IconWithBg";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { MdMailOutline, MdNavigateNext } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { IoIosAddCircle, IoIosSearch } from "react-icons/io";
import RoundButton from '../../components/button/RoundButton';
import Avatar from 'react-avatar';
import MenuIcon from "../../assets/images/menuIcon.png";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { getCategoryList } from '../../store/product/actions';
import { logOut } from '../../store/login/actions';
import { profileImageBaseUrl } from '../../constants/constant';
import history from "../../history/index";

const StyledMenu = withStyles({
  paper: {
    width: '100%',
    background: 'linear-gradient(to bottom, #14BBC6, #0CB69B)',
    borderRadius: 0,
    minHeight: 500
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      //backgroundColor: '#1FC5CB',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    padding: '10px 0',
    margin: '0 40px',
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomStyle: 'solid'
  },
}))(MenuItem);



const useStyles = makeStyles(styles);
const Header = ({
  getCategoryList,
  categories,
  token,
  logOut,
  cartList,
  userData,
  updateItem,
  userType
}) => {
  const loginNav = [{
    name: 'Notification',
    icon: FiBell,
    bubbleCount: 5,
    userType: 'both',
    link: '/notificaion',
    bgColor: "green"
  },
  {
    name: 'Inbox',
    icon: MdMailOutline,
    bubbleCount: 5,
    userType: 'both',
    link: '/inbox',
    bgColor: "green"
  },
  // {
  //   name: 'Favourite',
  //   icon: AiOutlineHeart,
  //   bubbleCount: 5,
  //   userType: 'buyer',
  //   link: '/favourite',
  //   bgColor: "blue"
  // },
  {
    name: 'Cart',
    icon: AiOutlineShoppingCart,
    bubbleCount: (cartList && cartList.length),
    userType: 'buyer',
    link: '/myCart',
    bgColor: "blue"
  }];
  
  const publicNav = [
  {
    name: 'Cart',
    label: "Login or register",
    icon: AiOutlineUser,
    userType: 'buyer',
    link: '/login',
    bgColor: "blue"
  },
  {
    name: 'Cart',
    icon: AiOutlineShoppingCart,
    bubbleCount: (cartList && cartList.length),
    userType: 'buyer',
    link: '/myCart',
    bgColor: "blue"
  }];

  const bottomNav = [
    {
      name: 'home',
      label: "Home",
      link: '/',
    },
    {
      name: 'About',
      label: "About",
      link: '/about-us',
    },
    {
      name: 'faq',
      label: "FAQs & Support",
      link: '/faq',
    },
    {
      name: 'legal',
      label: "Legal",
      link: '/legal',
    },
    {
      name: 'for-business',
      label: "For business",
      link: '/for-business',
    },
    {
      name: 'contact-us',
      label: "Contact us",
      link: '/contact-us',
    },
  ];


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navOption = token ? loginNav : publicNav

  useEffect(() => {
    getCategoryList();
  }, [updateItem])

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logOut(token)
  }

  const RenderCategoryList = () => {
    return categories && categories.length && categories.map((item, index) => {
      return (
        <StyledMenuItem key={`cat-${index}`}>
          <ListItemText 
          onClick={()=>history.push(`/listing?catId=${item.id}`)}

          >{item.name}</ListItemText>
          <ListItemIcon className={classes.listIcon}>
            <MdNavigateNext />
          </ListItemIcon>
        </StyledMenuItem>
      )
    })
  }

  return (
    <Paper className={classes.root}>
      <Hidden smDown implementation="css">

        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.menu} disableGutters>
            <div className={classes.siteLogo}>
              <Link to="/">
                <img src={MainLogo} alt="Vome" />
              </Link>
            </div>

            <div className={classes.languageSwitcher} >
              {token && userData && (
                <NavLink
                  to={userType === 1 ? "/buyer-profile" : "/seller-profile"}
                  className={classes.navLink}
                  activeClassName={classes.active}
                  exact
                >
                  <Avatar
                    name={userData.first_name + ' ' + userData.last_name}
                    round 
                    size="50"
                    color={"#0F4542"}
                    src={userData.profile_picture ? profileImageBaseUrl+userData.profile_picture : ''}
                    style={{border: '5px solid #137f78', marginRight: 10 }}
                  />
                  {userData.first_name + ' ' + userData.last_name}
                </NavLink>
              )}
              {navOption.map((item, index)=> (
                <NavLink
                  key={`nav-${index}`}
                  to={item.link}
                  className={classes.navLink}
                  activeClassName={classes.active}
                  exact
                >
                  {item.icon &&  <IconWithBg Icon={item.icon} containerStyle={classes.loginIconOuter} bubbleCount={(item.bubbleCount === 0)? null :item.bubbleCount} bgColor={item.bgColor}/>}
                  {item.label && item.label}
                </NavLink>
              ))} 
               
              <NavLink
                to="/postAds"
                className={classes.navLink}
                activeClassName={classes.active}
                exact
              >
                <RoundButton
                  title="Post an Ad"
                  containerStyle={classes.roundButtonContainer}
                  inputStartIcon={<IoIosAddCircle className={classes.plusIcon} />}
                  bgColor="green"
                />
              </NavLink>
              {/* {token && <Typography className={classes.navLink} onClick={() => handleLogOut()} >Logout</Typography>} */}
            </div>
          </Toolbar>

          <Toolbar className={classes.bottomMenu} disableGutters>
            <div className={classes.cateMenuOuter}>
              <div className={classes.cateHead} onClick={handleClick}>
                <img src={MenuIcon} className={classes.menuIcon} />
                <Typography>All Categories</Typography>
              </div>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.catList}
              >
                {RenderCategoryList()}
              </StyledMenu>
            </div>

            <div className={classes.leftMenus} >
              {bottomNav.map((bnav, index) => {
                return (
                  <NavLink
                    key={`bottom-nav-${index}`}
                    to={bnav.link}
                    className={classes.bottomNavLink}
                    activeClassName={classes.active}
                    exact
                  >
                    {bnav.label}
                  </NavLink>
                )
              })}
            </div>
            <Link className={classes.languageSwitcher} to="/listing">
              <IconWithBg Icon={IoIosSearch} containerStyle={classes.searchIconOuter} />
            </Link>
          </Toolbar>
        </AppBar>
      </Hidden>
    </Paper>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userType: state.login.userType,
  categories: state.product.categories,
  userData: state.login.userData,
  username: state.login.username,
  cartList: state.product.cartList,
  updateItem: state.product.updateItem,

});

const mapDispatchToProps = dispatch => ({
  getCategoryList: () => dispatch(getCategoryList()),
  logOut: (token) => dispatch(logOut(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
