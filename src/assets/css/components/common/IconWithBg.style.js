import Common from "../Common.style";

const styles = theme => ({
  ...Common,
  root: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    height: 20,
    width: 20,
    color: '#fff',
  },
  bubble: {
    height: 24,
    width: 24,
    borderRadius: '50%',
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    border: '1px solid #0F4542',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
