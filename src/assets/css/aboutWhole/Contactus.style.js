const styles = theme => ({
  imageLogoStyle: {
    height: 46,
    width: '20%',
    marginRight: '5%',
  },
  userInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputOuter: {
    width: "49%",
  },
  inputTextField: {
    "& div": {
      color: '#030F0E',
    },
  },
  multiTextField: {
    width: '98.5%',
    backgroundColor: '#F4F4F4',
    padding: '0px 5px',
    "& div": {
      color: '#030F0E',
    },
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 130,
  },
  leftContainer: {
    width: '55%',
  },
  headerOuter: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop:40,
  },
  logoImageOuter: {
    display: 'flex',
    width: '30%',
  },
  headTitle: {
    color: '#125451',
    fontSize: 17,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  headSubtitle: {
    color: '#0CB69B',
    fontSize: 15,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  midLine: {
    width: 1,
    background: '#205374',
    opacity: 0.24,
  },
  bottomLeft: {
    width: '100%',
    marginTop: 70,
  },
  mapContainer: { width: '45%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', justifyContent:'center', display: 'flex', },
  mapSubContainer: { width: '70%', height: 400, borderRadius: '50%',  },
})

export default styles;