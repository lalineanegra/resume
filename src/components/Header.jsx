import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';


import Me from './me.jpg'
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
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  headerStyleContent: {
    position: 'relative',
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  headerStylePhoto: {
    position: 'relative',
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      paddingRight: 0,
    },
  },
  profile: {
    width: 300,
    margin: 'auto',
  },
  media: {
    height: 300,
    border: '8px solid white',
    marginRight: '0px'
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
            <Typography variant="h5" color="secondary" paragraph>
              {post.description}
            </Typography>
            <Typography variant="h6">
              {post.linkText}
            </Typography>
          </div>
        </Grid>

        <Grid item md={6} >
        <div className={classes.headerStylePhoto}>
           <Card className={classes.profile}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Me}
              title="Contemplative Reptile"
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