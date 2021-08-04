import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';


import Me from '../common/me.jpg'
import myImage from './valpo.jpg';

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(5),
    backgroundImage: myImage,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'relative',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(89, 153, 255 .3)',
  },
  headerStyleContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8),
      paddingRight: 0,
    },
  },
  headerStylePhoto: {
    position: 'absolute',
    zIndex: 2,
    paddingTop: '6%',
    paddingLeft: '14%'
  },
  media: {
    height: 200,
    width: 200,
    border: '8px solid white',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.headerStyle} style={{ backgroundImage: `url(${myImage})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={myImage} alt='Background' />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.headerStyleContent}>
            <Typography component="h1" variant="h3" color="inherit" >
              {post.title}
            </Typography>
            <Typography variant="h5" color="secondary">
              {post.description}
            </Typography>
          </div>
        </Grid>

        <Grid item md={6} >
        <div className={classes.headerStylePhoto}>
           <Card>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Me}
              title="Rodrigo Alonso"
            />
            </CardActionArea>
          </Card>
        </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Header.propTypes = {
  post: PropTypes.object,
};