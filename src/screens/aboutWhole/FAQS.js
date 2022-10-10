import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import { Add, Close } from "@material-ui/icons";
import FullWidth from "../../layout/FullWidth";
import styles from '../../assets/css/aboutWhole/FAQS.style';
import MainLogo from "../../assets/images/logo-icon.png";

const links = [{
  link: "#",
  name: "FAQs & Support"
}]

const useStyles = makeStyles(styles);

const Aboutus = () => {
  const classes = useStyles();
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <FullWidth
      breadCrumbLink={links}
    >
      <div className={classes.container}>
        <div className={classes.midLine}></div>

        <div className={classes.listContainer}>
          <div className={classes.imageOuter}>
            <img src={MainLogo} alt="logo" className={classes.imageStyle} />
            <div className={classes.questionOuter}>
              <Typography className={classes.questionLabel}>Question goes here</Typography>
              {showAnswer && (
                <Typography className={classes.descirption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>)}
            </div>
          </div>

          <div className={classes.rightOuter}>
            <div className={!showAnswer ? classes.plusIconOuter : [classes.closeIconOuter, classes.plusIconOuter].join(' ')} onClick={() => setShowAnswer(!showAnswer)}>
              {!showAnswer ?
                <Add className={classes.plusIcon} />
                :
                <Close className={classes.plusIcon} />
              }
            </div>
          </div>
        </div>

        <div className={classes.midLine}></div>
      </div>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aboutus);