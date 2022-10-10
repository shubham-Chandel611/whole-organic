const styles = theme => ({
  container: {
    width: '100%',
    marginBottom: 130,
  },
  midLine: {
    width: '100%',
    height: 1,
    background: '#205374',
    opacity: 0.24,
    marginBottom: 20,
  },
  imageStyle: {
    height: 52,
    width: 44,
  },
  plusIcon: {
    fontSize: 18,
    color: '#fff'
  },
  plusIconOuter: {
    height: 47,
    width: 47,
    borderRadius: '50%',
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  imageOuter: {
    display: 'flex',
    width: '90%',
  },
  questionLabel: {
    fontSize: 20,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  rightOuter: {
    width: '10%',
    justifyContent: 'flex-end',
    display: 'flex',
    paddingRight: '2%',
  },
  listContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: 20
  },
  closeIconOuter:{
    background: 'linear-gradient(to right, #67B241, #51AE60)',
  },
  questionOuter:{
    width:'75%',
    marginTop:10,
    marginLeft: '1.5%',
  },
  descirption:{
    color:'#292929',
    fontSize:15,
    fontFamily:'Nexa',
  },
})

export default styles;