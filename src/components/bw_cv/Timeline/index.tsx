/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography, Grid } from "@mui/material";
import { ExperienceFields, ExperienceType } from "../../../types/interfaces";

const titlesStyle = css({});

interface Props {
  experience: ExperienceType[];
}

export const WorkTimeline = (props: Props) => {
  return (
    <Timeline sx={{ justifyContent: "left" }}>
      {props.experience.map((exp: ExperienceType) => (
        <TimelineItem key={exp.id}>
          <TimelineOppositeContent color="textSecondary" sx={{ flex: 0.1 }}>
            <Typography variant="overline"></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container>
              <Grid item xs={12} md={4} css={titlesStyle}>
                <Typography variant="subtitle2">{exp.dates}</Typography>
                <Typography variant="overline">{exp.company}</Typography>
              </Grid>
              <Grid item xs={12} md={8}>
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
};

export default WorkTimeline;
