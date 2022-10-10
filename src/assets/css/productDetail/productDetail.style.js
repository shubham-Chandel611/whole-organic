const styles = theme => ({
  mainContainer: {
    marginBottom: 130,
  },
  rightLabel: {
    fontSize: 30,
    fontFamily: 'Nexa',
    color: '#125451',
    fontWeight: 'bold',
  },
  subHead: {
    fontSize: 20,
    fontFamily: 'Nexa',
    color: '#17D6C2',
    fontWeight: 'bold',
    marginTop: -5,
  },
  sellerName: {
    fontSize: 17,
    fontFamily: 'Nexa',
    color: '#000',
    marginTop: 20,
  },
  roundIcon: {
    width: 8,
    height: 8,
    backgroundColor: '#67B241',
    borderRadius: '50%',
    marginRight: 8,
  },
  iconText: {
    fontSize: 14,
    fontFamily: 'Nexa',
    color: '#000',
  },
  dollarSign: {
    fontSize: 14,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -5,
    marginRight: 5,
  },
  priceUnti: {
    fontSize: 21,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    color: '#fff',
  },
  selectTextField: {
    width: '100%',
    // marginBottom: 10,
    backgroundColor: '#F4F4F4',
    height: 50,
    marginRight: 1.5,
    border: '5px',
    "& fieldset": {
      border: '5px',
      height: 50,
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
  priceTextOuter: {
    display: 'flex',
    backgroundColor: '#4CBB75',
    height: 50,
    alignItems: 'center',
    width: '60%',
    justifyContent: 'center',
  },
  productImage: {
    width: '70%',
    height: 586,
  },
  productSmallImage: {
    width: '100%',
    height: 121,
    marginBottom: 25,
  },
  leftOuter: {
    width: '47%',
    display: 'flex',
    marginTop: 4,
  },
  imageOuter: {
    marginLeft: '4%',
    width: '30%',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  divisionLine: {
    width: 1,
    height: 595,
    backgroundColor: '#707070',
    marginLeft: '4%',
    marginRight: '6%',
    opacity: 0.3,
  },
  rightOuter: {
    width: '43%',
    marginTop: 4,
  },
  roundOuter: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  desOuter: {
    marginTop: 50,
    width: '80%',
    marginBottom: 20,
  },
  priceContainer: {
    display: 'flex',
    width: '65%',
  },
  selectOuterWidth: {
    width: '60%',
  },
  cartContiner: {
    width: '100%',
  },
  cartOuter: {
    width: '65%',
  },
  itemContainer: {
    paddingBottom: 50,
  },
  imageStyle: {
    width: 71,
    height: 84,
  },
  labelTextOuter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  labelText: {
    marginLeft: 8,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: '#125451',
  },
  listContainer: {
    width: '100%',
    marginTop: 70,
  },
  iconCart: {
    color: '#fff',
    height: 33,
    width: 33,
  },
  quantityText: {
    marginLeft: 10
  },
  leftContainer: {
    width: '47%',
    display: 'flex',
    marginTop: 4,
    justifyContent: 'space-between',
  },
  rightImage: {
    cursor: 'pointer',
    width: '100%',
    height: 120,
    marginBottom: 25,
  },
  activeImage: {
    border: '5px solid #13BBC3',
  },
});

export default styles;
