import React, { useState } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import {
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { CONTENT } from '../data/content';
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  oppositeContent: {
    // TODO: adjust this value accordingly
    flex: 0.1
  },
}));

export const WorkTimeline = (props) => {
  const { experience } = props;
  const classes = useStyles();

  return (
      <Timeline align="left">
        {experience.map(exp => (
        <TimelineItem key={exp.id}>
          <TimelineOppositeContent
            className={classes.oppositeContent}
            color="textSecondary"
          >
            <Typography variant="overline">
              
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector color="primary"/>
          </TimelineSeparator>
          <TimelineContent>
          <Grid container>
             <Grid item xs={4} md={4}>
             <Typography variant="subtitle2">
                  {exp.dates}
               </Typography>
               <Typography variant="overline">
                  {exp.company}
               </Typography>
             </Grid>
             <Grid item xs={8} md={8}>
             <Typography variant="body2" color="textSecondary">
                {exp.accomplishments}
              </Typography>
             </Grid>
           </Grid>
          </TimelineContent>
        </TimelineItem>
        ))}
      </Timeline>
  );
}

export default WorkTimeline;