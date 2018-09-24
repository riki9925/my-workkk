import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './card.js';
import Slick from './slick.js';
import Header from './header';
import Footer from './footer'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit * 3,
    widht: 150,
  },
});

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Header />
      <main>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Slick />
            </Paper>
          </Grid>
        </Grid>
        <MediaCard />
      </main>
      <Footer />
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
