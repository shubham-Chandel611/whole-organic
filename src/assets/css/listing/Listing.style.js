const styles = theme => ({
  firstSectionRoot: {
    background: "#FFFFFF",
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    position: 'relative',
    margin: 0,
    flexFlow: 'column',
  },
  container: {
    height: 353,
    width: '100%',
    border: '0px solid'
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    width: '85%',
    marginLeft: '7.5%',
    marginRight: '7.5%',
  },
  headerCard: {
    width: '100%',
    display: 'flex',
  },
  txtset: {
    width: '14%',
    backgroundColor: '#FFFFFF',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '2px solid #EAEAEA',
  },
  productSearch: {
    color: '#0A3331',
    fontSize: 20,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  categoryOuter: {
    width: '23%',
    borderRight: '2px solid #EAEAEA',
  },
  selectTextField: {
    width: '100%',
    backgroundColor: '#fff',
    height: 70,
    "&:before": {
      borderBottomWidth: '0px',
    },
    "& fieldset": {
      height: 70,
    },
    "& div": {
      fontSize: 17,
      color: '#0F4542',
      fontWeight: 'bold',
      fontFamily: 'Nexa',
      paddingLeft: '11%'
    },
  },
  emailOuter: {
    display: 'flex',
    width: '28%',
    height: 70,
  },
  productInput: {
    marginBottom: 0,
    "& input": {
      border: '0px',
      backgroundColor: '#fff',
      padding: '0 30px',
      height: 70
    },
    "& div": {
      fontSize: 17,
      color: '#030F0E',
      fontWeight: 'normal',
      fontFamily: 'Nexa',
    },
  },
  roundOuter: {
    width: '12%',
  },
  searchIcon: {
    fontSize: 20,
    color: '#fff',
  },
  roundContainer: {
    marginTop: 0,
    width: '100%',
    height: 70,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  filterContainer: {
    margin: '0 7% 130px',
    width: '86%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-Between',
    display: 'flex',
    alignItems: 'center',
  },
  leftContainer: {
    background: '#F4F4F4',
    width: '25%',
    padding: '30px 4% 30px 2%',
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  rightContainer: {
    marginTop: 35,
    marginBottom: 60,
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#0CB69B',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#0CB69B',
    },
  },
  logoStyle: {
    height: 57,
    width: 57
  },
  subHeader: {
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: 'regular',
    fontFamily: 'Nexa',
    color: '#125451'
  },
  logoContainer: {
    flexDirection: 'row',
    display: 'flex',
    paddingTop: '3%',
    alignItems: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    display: 'flex',
    padding: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    border: '1px solid',
    borderColor: 'green',
  },
  searchbox: {
    height: 10,
    width: 445,
    paddingLeft: 20,
    fontSize: 5,
  },
  sortText: {
    fontSize: 13,
    color: '#0F4542'
  },
  msgshort: {
    // width: '10%',
    marginLeft: 5,
    backgroundColor: 'white',
    bottomUnderline: 'none',
    fontSize: 13,
    color: '#0F4542',
    '&:focus': {
      borderRadius: 0,
      borderBottomWidth: 0,
      borderColor: '#ffffff',
      bottomUnderline: 0,
      backgroundColor: 'white',
    },
  },
  locationOuter: {
    width: '80%',
  },
  addressContainer: {
    width: '12%',
  },
  slider: {
    marginTop: 45,
    color: 'rgb(83,83,83)',
    width: '75%',
  },
  labelStyle: {
    color: '#17AAA6',
    paddingTop: 30,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  containerLeft: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  leftContainerOuter: {
    width: '17%',
    background: '#F4F4F4',
    paddingBottom: 15,
    height:600
  },
  leftListOuter: {
    width: '100%',
    paddingLeft: '12%',
  },
  rightOuter: {
    width: '80%',
  },
  addressMapOuter: {
    marginTop: 10,
    "& fieldset": {
      border: '1px solid #17AAA6',
    },
    "& input": {
      height: 0,
    },
    "& div": {
      padding: 0
    },
  },
  pagination : {
    display: 'none',
  }
});

export default styles;
