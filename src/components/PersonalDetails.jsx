import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  demo: {
    dense: true
  }
});


export default function PersonalDetails(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(false);
  const { details } = props;

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h6">
                Personal
              </Typography>
             

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className={classes.demo}>
                    <List dense={dense}>
                        <ListItem>
                          <ListItemText primary="Name:" />
                          <ListItemText secondary="Rodrigo Alonso"/>
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Name:" />
                          <ListItemText secondary="Rodrigo Alonso"/>
                        </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>


            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

PersonalDetails.propTypes = {
  post: PropTypes.object,
};
