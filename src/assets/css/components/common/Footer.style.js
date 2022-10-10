const styles = theme => ({
  root: {
    backgroundColor: '#0F4542',
    minHeight: 165,
    position: 'relative',
    display: 'flex',
    paddingTop: 70,
    paddingRight: '7%',
  },
  siteLogo: {
    position: 'absolute', bottom: 0, left: 0
  },
  leftNav: {
    width: '30%',
    marginLeft: '22%'
  },
  leftNavmanu: {
    borderRight: 1,
    borderRightColor: 'rgba(255,255,255,0.3)',
    borderRightStyle: 'solid',
    height: 70,
  },
  middleNav: {
    width: '25%',
    marginLeft: '4%',
  },
  middleNavMenu: {
    marginTop: 44
  },
  rightNav: {
    display: 'flex',
    width: '19%',
    justifyContent: 'flex-end',
    paddingTop: 57,
  },
  loginIconOuter: {
    marginRight: 10,
  },
  navLink: {
    whiteSpace: 'nowrap',
    fontFamily: 'Omens, Montserrat',
    color: '#fff',
    fontWeight: 500,
    fontSize: 15,
    height: 35,
    lineHeight: 1.44,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'none',
    textDecoration: 'none',
    width: '21%',
    "&:hover": {
      fontWeight: 600,
    }
  },
  secondMenu: {
    width: '33%',
  },
  heading: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});

export default styles;
