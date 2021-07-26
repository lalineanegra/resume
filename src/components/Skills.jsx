import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Skills() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(20);

  
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    );
  }