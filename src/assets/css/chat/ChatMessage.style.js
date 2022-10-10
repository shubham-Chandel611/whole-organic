const styles = theme => ({
  imageStyle: {
    width: 62,
    height: 62,
    borderRadius: '50%',
  },
  inputTextField: {
    marginBottom: 0,
    "& input": {
      backgroundColor: '#E5E5E5',
      padding: '0 40px',
      height: 78
    },
    "& div": {
      fontSize: 14,
      color: '#656464',
      fontWeight: 'normal',
      fontFamily: 'Nexa',
    },
  },
  roundContainer: {
    width: "100%",
    height: 78,
    marginTop: 0,
  },
  attachmentIcon: {
    fontSize: 28,
    color: '#13BABF',
  },
  attachmentOuter: {
    width: '40%',
    background: '#0F4542',
    height: 78,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomRightOuter: {
    width: '25%',
    display: 'flex',
  },
  bottomOuter: {
    width: '100%',
    display: 'flex',
  },
  bottomLeft: {
    width: '75%',
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topLeftOuter: {
    display: 'flex',
    alignItems: 'center',
    width: '90%'
  },
  userName: {
    color: '#125451',
    fontSize: 25,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    marginLeft: '1%',
  },
  backButton: {
    color: '#0F4542',
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    fontSize: 17,
    borderBottom: '1px solid #0F4542',
    cursor: 'pointer'
  },
  midContainer: {
    height: 900,
    background: '#F2F2F2',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 820,
  },
  chatOuter: {
    margin: '0px 5% 0px 4%',
  },
  receiverOuter: {
    width: '100%',
    display: 'flex'
  },
  receiverTextOuter: {
    maxWidth: '60%',
    background: '#DEDEDE',
    padding: '30px 3%',
    minWidth: '5%',
    marginBottom: 10,
  },
  receiveMessage: {
    fontSize: 14,
    color: '#656464',
    fontFamily: 'Nexa',
  },
  senderOuter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  senderTextOuter: {
    maxWidth: '60%',
    background: 'linear-gradient(to right, #0CB69B, #14BBC6)',
    padding: '30px 3%',
    marginRight: '3%',
  },
  sentMessage: {
    fontSize: 14,
    color: '#656464',
    fontFamily: 'Nexa',
  },
});


export default styles;