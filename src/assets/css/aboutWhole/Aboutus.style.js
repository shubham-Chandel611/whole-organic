const styles = theme => ({
  productImageStyle: {
    width: '45%',
    height: 568,
    borderRadius: '50%',
  },
  imageLogoStyle: {
    height: 187,
    width: '12%',
    marginTop: -150,
    marginLeft: '-9%'
  },
  label: {
    fontFamily: 'Nexa',
    color: '#125451',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Nexa',
    color: '#292929',
    fontSize: 15,
  },
  container: {
    marginBottom: 130,
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  rightOuter: {
    width: '45%',
    marginLeft: '10%',
  },
  outer: {
    width: '80%',
    paddingRight: '3%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
})

export default styles;