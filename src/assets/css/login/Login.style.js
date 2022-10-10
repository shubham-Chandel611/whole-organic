const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    margin: '70px 0px 130px',
  },
  roundButtonContainer: {
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
    borderRadius: 0,
    minHeight: "24px",
    height: 57,
    width: '30%',
    marginTop: 31
  },
  createAccount: {
    fontSize: 31,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 25,
  },
  textFieldOuter: {
    width: '100%',
    display: 'flex',
  },
  captcheText: {
    marginTop: 31,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0F4542',
    textDecorationLine: 'underline',
    fontFamily: 'Nexa',
    display: 'flex'
  },
  rgisterText: {
    marginTop: 36,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F4542',
    fontFamily: 'Nexa'
  },
  alreadyText: {
    marginTop: 30,
    fontSize: 16,
    color: '#0F4542',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: 'Nexa'
  },
  divisionLine: {
    width: 1,
    background: '#707070',
    opacity: 0.24,
    height: 425
  },
  leftOuter: {
    width: '30%',
  },
  link: {
    color: 'inherit'
  },
});

export default styles;