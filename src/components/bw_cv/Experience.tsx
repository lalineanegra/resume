/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

// Local imports
import WorkTimeline from "./WorkTimeline";
import { ExperienceType } from '../../types/interfaces'

const sectionStyle = css({
    alignItems: "stretch",
  })
const sectionContent = css({
    background: grey[100],
    alignItems: "center",
    display: "flex",
    justifyContent: "right",
    paddingLeft: "20%",
    // [theme.breakpoints.down("sm")]: {
    //   justifyContent: "center",
    //   paddingTop: 40,
    //   paddingBottom: 40,
    // },
  })
const contentStyle = css({
  paddingLeft: 0,
  marginLeft: 0,
  justifyContent: "left",
  textAlign: "left",
  alignItems: 'left',
  
})

const titleStyle = css({
  marginRight: 50,
})

interface Props {
  experience: ExperienceType[]
}

const Experience = (props: Props) => {
  const { experience } = props;
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" display="block" css={titleStyle}>
          EXPERIENCE
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} css={contentStyle}>
        <WorkTimeline experience={experience} />
      </Grid>
    </Grid>
  );
};

export default Experience;
