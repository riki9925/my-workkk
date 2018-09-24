import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const styles = {
  card: {
    width: 240,
  },
  harga: {
    color: '#2d6eef',
    fontWeight: "Bold"
  },
  pro: {
    fontSize: "15px",
    fontWeight: "Bold"
  },
  padding: {
    paddingTop: "30px",
  },
  image: {
    height: 200,
    widht: 200,
  },
  media: {
    height: 240,
  },
  root: {
    flexGrow: 1,
  },
};
class MediaCard extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios.get('http://192.168.100.60:9000/global/auth/product1/detail').then(res => {
      const product = res.data;
      this.setState({ product });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.state.product.map(a => (
            <Grid item xs={6} sm={3}>
              <Card className={classes.card}>
                <CardMedia className={classes.media}>
                  <img className={classes.image} src={a.Gambar} />
                  <Typography
                    className={classes.pro}
                    key={a.id}
                  >
                    {a.Nama}
                  </Typography>
                  <Typography gutterBottom component="h1" variant="headline" className={classes.harga} >
                    Rp.	{a.Harga}
                  </Typography>
                </CardMedia>
                <CardActions className={classes.padding} >
                  <Button size="small" color="primary">
                    Beli
									</Button>
                  <Button size="small" color="primary">
                    Nego
									</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
