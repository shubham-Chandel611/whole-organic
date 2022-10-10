const styles = theme => ({
  homeContainer: {
    padding: '0 7% 105px',
  },
  firstSectionRoot: {
    background: "#FFFFFF",
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    position: 'relative',
    margin: 0,
    padding: 0,
    flexFlow: 'column'
  },
  subHeaderContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-Between",
    marginTop: '3%'
  },
  subHeaderContainer1: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-Between",
    marginTop: '3%'
  },
  logoStyle: {
    width: 70
  },
  morelogoStyle: {
    width: 15,
    paddingLeft: '64%',
  },
  moreStyle: {
    width: 15,
    paddingLeft: '72%',
  },
  moretxt: {
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: 'regular',
    fontFamily: 'Nexa',
    color: '#125451',
    textDecoration: 'underline',
  },
  subHeader: {
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: 'regular',
    fontFamily: 'Nexa',
    color: '#125451'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    backgroundColor: '#0CB69B',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    color: '#ffffff'
  },
  dollarText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    backgroundColor: '#0CB69B',
    paddingLeft: 20,
    paddingTop: 14,
    paddingRight: 7,
    paddingBottom: 10,
    color: '#ffffff'
  },
  price: {
    heigth: 60,
    // padding: 20,
    width: 110,
    // paddingLeft: 20,
    paddingTop: 120,
    flexDirection: 'row',
    display: 'flex'
    // backgroundColor: '#0CB69B'
  },
  likeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconStyle: {
    paddingLeft: 230
  },
  sellerInfoText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: '#7C7B7B',
    paddingTop: 5,
    paddingLeft: 20
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: '#125451',
    paddingTop: 20,
    paddingLeft: 20
  },
  itemCategoryName: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: '#17D6C2',
    paddingLeft: 20
  },
  itemContainer: {
    paddingBottom: 70,
    paddingTop: 50,
  },
  corousalContainer: {
    height: 500,
    width: '100%'
  },
  unitSelector: {
    width: '25%',
    // marginBottom: 10,
    backgroundColor: '#F4F4F4',
    height: 64,
    marginRight: 1.5,
    marginTop: 20,
    border: '5px',
    "& fieldset": {
      border: '5px',
      height: 45,
    },
    "& div": {
      fontSize: 13,
      color: '#030F0E',
      paddingLeft: 20,
      fontWeight: 'bold',
      fontFamily: 'Nexa',
      lineHeight: 1.27,
    },
  },
  postButton: {
    width: '100%',
    marginLeft: 10,
    background: '#fff',
    boxShadow: "0px 0px 1px 1px #12BABD",
  },
  buttonOuter: {
    textDecoration: 'none',
    width: '20%'
  },
  doneButton: {
    width: '100%'
  },
  bottomButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  selectTextField: {
    width: '100%',
    backgroundColor: '#F4F4F4',
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
  inputFieldLeftOuter: {
    width: '25%'
  },
  label: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  imageStyle: {
    height: 200
  },
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 100
  },

  dropDown: {
    width: 300,
  },
  outer: {
    borderColor: 'transparent',
    backgroundColor: 'rgb(244,244,244)',
    height: 63.2,
    marginTop: 1,
    marginRight: 3,
  },
  arrow: {
    marginTop: 13,
    marginRight: 20,
  },
  placeholder: {
    whiteSpace: 'nowrap',
    fontFamily: 'Omens, Montserrat',
    color: '#000',
    fontSize: 14,
    cursor: 'pointer',
    paddingTop: 13,
    paddingLeft: 20,
  },
  dropDown1: {
    width: 300,
    marginLeft: 1,
  },
  title: {
    fontSize: 31,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  desc: {
    fontSize: 15,
    color: 'rgb(23,214,194)',
    fontWeight: 'light',
    fontFamily: 'Nexa',
    marginBottom: 30,

  },
  productDesc: {
    fontSize: 15,
    color: 'rgb(23,214,194)',
    fontWeight: 'light',
    fontFamily: 'Nexa',
    marginTop: 70,
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
      backgroundColor: '#F4F4F4',
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
  imageBg: {
    width: 152,
    height: 100,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    background: '#EDEBEB',
    margin: 5,
    cursor: 'pointer',
  },
  imageback: {
    width: '100%',
    height: '100%'
  },

  inputFieldOuter: {
    width: 300,
    height: 10
  },
  imageView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flexStar',
    alignItems: 'center',
  },
  dollorTextView: {
    width: 100,
    height: 45,
    backgroundColor: 'rgb(239,236,236)'
  },
  productDescText: {
    marginTop: 40,
    fontSize: 12,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 10,
  },
  proDescText: {
    width: 900,
    height: 100
  },
  locationOuter: {
    width: '82%',
    marginTop: 30,
  },
  dollorText: {
    fontSize: 12,
    marginTop: 14,
    marginLeft: 10,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  proDesc: {
    width: 900,
    backgroundColor: 'rgb(244,244,244)',
    borderColor: 'transparent',
    padding: 17,
    height: 100
  },
  productShipText: {
    // marginTop: 80,
    fontSize: 12,
    marginRight: 20,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  checkedIconStyle: {
    color: '#0CB69B',
  },
  unCheckedIconStyle: {
    color: '#1FC5CB',
  },
  dropDownContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flexStar',
    alignItems: 'center',
    marginTop: 70
  },
  labelText: {
    fontSize: 13,
    color: '#121212',
    fontFamily: 'Nexa',
  },
  location: {
    width: 900,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flexStar',
    alignItems: 'center',
    height: 30,
    marginTop: 10,
    padding: 20,
    backgroundColor: 'rgb(244,244,244)',
  },
  locationIcon: {
    width: 15, height: 20,
  },
  locationSelect: {
    fontSize: 12,
    marginLeft: 20,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  selectText: {
    lineHeight: 20
  },
  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flexStar',
    paddingTop: '3%'
  },
  txtset: {
    width: '14%',
    backgroundColor: '#F4F4F4',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '2px solid #fff',
  },
  txtposset: {
    marginLeft: 20,
    marginTop: 23,
    backgroundColor: '#F4F4F4',
  },
  searchbtn: {
    display: 'flex',
    width: '13.2%',
    backgroundColor: '#0CB69B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1.5,
  },
  searchbtnclr: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 15,
  },
  addView: {
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  add: {
    width: 20,
    height: 20,
    color: 'white'
  },
  moreContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  removeIcon: {
    fontSize: 20,
    color: '#fff',
  },
  addMoreIconView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28,
    borderRadius: '50%',
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
  },
  productSearch: {
    color: '#0A3331',
    fontSize: 20,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  categoryOuter: {
    width: '23%',
    borderRight: '2px solid #fff',
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
  midSearchContainer: {
    width: '100%',
    marginTop: 70,
    display: 'flex',
  },
  cardImage: {
    widht: '100%',
    height: 600,
  },
  shoppingButton: {
    marginTop: 25,
    width: '17%',
  },
  cardMediaImageContainer: {
    paddingLeft: '27%',
    width: '100%',
    paddingTop: 150,
  },
  imageText: {
    lineHeight: 0.9,
    fontSize: 73,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: '#fff',
  },
  imageTextOuter: {
    width: '26%',
  },
});

export default styles;
