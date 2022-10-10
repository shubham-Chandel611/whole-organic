const styles = theme => ({
  root: {
    borderRadius: 0,
    padding: '1% 7% 0 7%',
    backgroundColor: '#0F4542',
    boxShadow: '0px 2px 20px -1px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.05), 0px 1px 20px 0px rgba(0,0,0,0.05)',
  },
  siteLogo: {
    marginRight: '2%',
    width: "15%",
    minWidth: '100px',
  },
  menu: {
    display: 'flex',
    alignItems: 'center'
  },
  bottomMenu: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    minHeight: 60,
    marginTop: 20,
  },
  navLink: {
    whiteSpace: 'nowrap',
    fontFamily: 'Omens, Montserrat',
    color: '#fff',
    fontWeight: 500,
    fontSize: 14,
    height: 35,
    lineHeight: 1.44,
    width: 'auto',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 6px',
    textTransform: 'none',
    "&:hover": {
      fontWeight: 600,
    }
  },
  bottomNavLink: {
    whiteSpace: 'nowrap',
    fontFamily: 'Omens, Montserrat',
    color: '#000',
    fontSize: 16,
    width: 'auto',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 4%',
    textTransform: 'none',
    textDecoration: 'none',
    borderRight: 1,
    borderRightColor: '#0F4542',
    borderRightStyle: 'solid',
    "&:hover": {
      fontWeight: 600,
    },
    "&:after": {
      color: '#aaa',
      content: "?"
    }
  },
  active: {
    fontWeight: 600,
  },
  appBar: {
    backgroundColor: "#0F4542",
    boxShadow: "none",
  },
  languageSwitcher: {
    marginLeft: 'auto',
    display: 'inline-flex',
    alignItems: 'center'
  },
  button: {
    whiteSpace: 'nowrap',
    fontFamily: 'Omens, Montserrat',
    color: '#fff',
    fontWeight: 500,
    fontSize: 14,
    height: 35,
    lineHeight: 1.44,
    padding: '0 5px',
    width: 'auto',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.up("lg")]: {
    siteLogo: {
      width: "10%"
    },
    button: {
      fontSize: 16,
      height: 39,
      lineHeight: 1.44,
      width: 'auto',
      margin: '0 10px',
    },
    navLink: {
      fontSize: 16,
      height: 39,
      lineHeight: 1.44,
      width: 'auto',
    },
  },
  [theme.breakpoints.up("xl")]: {
    navLink: {
      fontSize: 18,
      height: 43,
      lineHeight: 1.44,
      width: 'auto',
      padding: '0 12px',
    },
    button: {
      fontSize: 18,
      height: 43,
      lineHeight: 1.44,
      width: 'auto',
      padding: '0 12px',
    },
  },
  loginIconOuter: {
    marginRight: 10,
  },
  searchIconOuter: {
    height: 42,
    width: 42,
    marginRight: 25
  },
  roundButtonContainer: {
    borderRadius: 0,
    minHeight: "24px",
    height: 43,
    width: 'auto',
    marginTop: 0,
    padding: '0 10px'
  },
  plusIcon: {
    color: '#fff',
    fontSize: '25px !important'
  },
  avator: {
    border: '5px solid #137f78',
    marginRight: 10
  },
  cateMenuOuter: {
    width: '20%',
  },
  cateHead: {
    backgroundColor: '#1FC5CB',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    minHeight: 60,
    padding: '0 40px',
    cursor: 'pointer'
  },
  menuIcon: {
    marginRight: 25,
  },
  leftMenus: {
    paddingLeft: 50,
    width: '70%',
  },
  catList: {
    width: '19.5%'
  },
  listIcon: {
    minWidth: 'auto',
    color: '#fff',
  },
  avatorContainer: {
    border: '5px solid #137f78', 
    marginRight: 10, 
    backgroundColor: '#0F4542 !important',
  }
});

export default styles;
