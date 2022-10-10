import React from "react";
import { connect } from "react-redux";
import { makeStyles, Grid } from "@material-ui/core";
import FullWidth from "../../layout/FullWidth";
import AboutMessage from '../../components/common/AboutMessage';

const data = ['1', '2', '3', '4', '5']

const styles = theme => ({
  itemContainer: {
    paddingTop: 35,
    paddingBottom: 35,
  },
});

const links = [{
  link: "#",
  name: "Legal"
}]

const useStyles = makeStyles(styles);
const Legal = () => {
  const classes = useStyles();
  return (
    <FullWidth
      breadCrumbLink={links}
    >
      <div style={{ marginBottom: 130 }}>
        <Grid
          className={classes.itemContainer}
          container
          justify='space-between'
          spacing={4}
        >
          {data.map((item) => {
            return <Grid item xs={5} >
              <AboutMessage />
            </Grid>
          })}
        </Grid>
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
)(Legal);