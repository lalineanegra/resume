/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

// Local imports
import WorkTimeline from "../Timeline";
import { ExperienceFields, ExperienceType } from "../../../types/interfaces";
import themeContext from "../../../contexts/themeContext";

const sectionStyle = css({
  alignItems: "stretch",
});
const sectionContent = css({
  background: grey[100],
  alignItems: "center",
  display: "flex",
  justifyContent: "right",
  paddingLeft: "10%",

  [themeContext.breakpoints.down("md")]: {
    justifyContent: "center",
    textAlign: "center",
    padding: "5%",
  },
});
const titleStyle = css({
  marginRight: 50,
  [themeContext.breakpoints.down("md")]: {
    margin: "0 auto",
  },
});

const contentStyle = css({
  paddingLeft: 0,
  marginLeft: 0,
  justifyContent: "left",
  textAlign: "left",
  alignItems: "left",
  [themeContext.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

interface Props {
  experience: ExperienceType[];
  experienceFields: ExperienceFields;
}

const Experience = (props: Props) => {
  const { experience } = props;
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" display="block" css={titleStyle}>
          {props.experienceFields.experienceTitle.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} css={contentStyle}>
        <WorkTimeline experience={experience} />
      </Grid>
    </Grid>
  );
};

export default Experience;
