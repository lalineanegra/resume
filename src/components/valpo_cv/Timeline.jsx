import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { red, amber } from '@material-ui/core/colors';

import { CONTENT } from '../data/content';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  descriptionParagraph: {
    color: 'grey',
    fontSize: '1em'
  },
  root: {
    color: 'white',
    background: 'red'
  }
}));

export default function JobsTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
        
            {CONTENT.experience.map(exp => (
                <TimelineItem key={exp.id}>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {exp.dates}
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot  className={exp.id===0?classes.root: ''}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography  component="p" color='primary'>
                        {exp.company}
                        </Typography>
                        <Typography className={classes.descriptionParagraph}>
                            {exp.accomplishments}
                        </Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}

    </Timeline>
  );
}