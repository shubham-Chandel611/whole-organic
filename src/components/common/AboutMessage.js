import React from "react";
import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

const styles = theme => ({
  label: {
    color: '#125451',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  details: {
    color: '#292929',
    fontSize: 15,
    fontFamily: 'Nexa',
  },
  container: {
    width: '100%',
  },
});

const useStyles = makeStyles(styles);
const AboutMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.label}>Subtitle here</Typography>
      <Typography className={classes.details}>Yse eu minim incididunt aliquip dolore magna eiusmod
      incididunt mollit et occaecat nisi ex aute elit velit cupidatat eiusmod
      excepteur incididunt nulla in tempor enim minim incididunt velit tempor
      irure mollit voluptate consequat commodo.Product description, dolor esse
      eu minim incididunt aliquip dolore magna eiusmod incididunt mollit et occaecat
      nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in tempor
      enim minim incididunt velit tempor irure mollit voluptate consequat commodo.Product
      description, dolor esse eu minim incididunt aliquip dolore magna eiusmod incididunt
      mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in
      tempor enim minim
        incididunt velit tempor irure mollit voluptate consequat commodo.</Typography>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMessage);