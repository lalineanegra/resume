import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(1),
    backgroundColor: '#c9c9c1',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  aboutParagraph: {
    fontSize: 14,
    color: '#4a4746',
    align: 'justify'
  }
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { about, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom align="center">
          About
        </Typography>
        {about.map(ab => (
        <Typography  className={classes.aboutParagraph} paragraph key={ab.id}>
          {ab.paragraph}
        </Typography>
        ))}
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection} align='center'>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
