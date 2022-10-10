const styles = theme => ({
  itemContainer: {
    width: '100%',
    border: '1px solid #EFEFEF'
  },
  imageStyle: {
    height: 350,
    width: '100%'
  },
  dollarText: {
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    marginTop: -5,
    paddingLeft: 10,
  },
  amount: {
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    marginLeft: 5,
    marginRight: 10,
  },
  iconStyle: {
    fontSize: 28,
    color: '#0CB69B',
    cursor:'pointer'
  },
  editRoundButton: {
    width: "100%",
  },
  previewRoundButton: {
    width: "100%",
    border: '1px solid #13BBC3',
    background: '#fff'
  },
  previewTextColor: {
    color: '#12BABD',
  },
  amoutTextContainer: {
    height: 300,
    display: 'flex',
    alignItems: 'flex-end',
  },
  priceOuter: {
    height: 55,
    paddingLeft: '2%',
    paddingRight: '3%',
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
    width: '90%',
    padding: '30px 4%',
  },
  labelHeading: {
    fontSize: 18,
    color: '#125451',
    fontFamily: 'Nexa',
    fontWeight: 'bold'
  },
  iconOuter: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    width:'100%',
    alignItems:'center'
  },
  labelType: {
    color: '#17D6C2',
    fontSize: 18,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  description: {
    color: '#7C7B7B',
    fontFamily: 'Nexa',
    fontSize: 15,
    minHeight: 44,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
  },
  editButton: {
    width: '40%',
  },
  previewButton: {
    width: '25%',
    marginLeft: 10,
  },
});

export default styles;
