import Common from "../Common.style";

const styles = theme => ({
  ...Common,
  buttonOuter: {
    borderRadius: 0,
    minHeight: "24px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.16)",
    width: "20%",
    height: 57,
    marginTop: 34,
    textTransform: 'initial'
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Nexa'
  },
  buttonDisabled: {
    backgroundColor: "#efeeee",
  },
  disabledText: {
    color: "#a4a4a4"
  },
  icon:{
    width:30,
    height:30,
    marginRight:20,
  }
});

export default styles;