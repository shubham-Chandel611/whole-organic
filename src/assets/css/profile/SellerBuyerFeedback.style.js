const styles = theme => ({
  imageStyle: {
    height: 129,
    width: 129,
    borderRadius: '50%',
  },
  imageOuter: {
    width: 141,
    height: 141,
    borderRadius: '50%',
    border: '1px solid #1FC5CB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingOuter: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  headingText: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  multiTextField: {
    width: '100%',
    marginTop: 80,
    backgroundColor: '#F4F4F4',
    padding: '0px 5px',
    "& div": {
      color: '#030F0E',
    },
  },
  container: {
    width: '70%',
    marginBottom: 130,
    marginTop: 10,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    marginLeft: '1%',
    color: '#125451',
    fontSize: 31,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
});


export default styles;

