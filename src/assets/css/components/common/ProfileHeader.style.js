const styles = theme => ({
  imageStyle: {
    height: 104,
    width: 104,
    borderRadius: '50%',
    border: '10px solid #38C2AC'
  },
  rateSellerButton: {
    background: 'transparent',
    border: '1px solid #fff',
    width: '100%',
    height: 46,
  },
  sendMessageButton: {
    background: '#38C2AC',
    width: '100%',
    height: 46,
  },
  container: {
    width: '100%',
    height: 163,
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
  },
  leftContainer: {
    marginLeft: '2.5%',
    display: 'flex',
    alignItems: 'center',
    width: '70%',
  },
  rightContainer: {
    display: 'flex',
    width: '30%',
    justifyContent: 'space-between',
    marginRight: '5%',
  },

  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: '#fff',
  },
  ratingOuter: {
    paddingLeft: '3%',
  },
  midLine: {
    width: 1,
    background: '#fff',
    height: 50,
    opacity: 0.36,
    margin: '0px 6%',
  },
  number: {
    fontSize: 17,
    fontFamily: 'Nexa',
    color: '#fff',
  },
  buttonOuter: {
    width: '48%',
  },
  ratingNuber: {
    fontFamily: 'Nexa',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft:10,
  },
  starRating: {
    display: 'flex',
    alignItems: 'center',
    width:200
  },
});

export default styles;