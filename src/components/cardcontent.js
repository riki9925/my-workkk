import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const styles = {
  card: {
    maxWidth: 345,
  },
  image: {
    height: 200,
    widht: 200
  },
  media: {
    height: 140,
  },
};
class Cardcontent extends React.Component {
  state = {
    product: [],
  }

  componentDidMount() {
    axios.get('http://192.168.100.60:9000/global/auth/product1/detail')
      .then(res => {
        const product = res.data;
        this.setState({ product });
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

Cardcontent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cardcontent);
