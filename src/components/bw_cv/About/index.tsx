/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

// Local imports
import { AboutType, AboutFields } from "../../../types/interfaces";
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
  paddingLeft: 50,
  paddingTop: 10,
  paddingBottom: 10,
  [themeContext.breakpoints.down("sm")]: {
    padding: 15,
  },
  [themeContext.breakpoints.down("md")]: {
    padding: 15,
  },
});

interface Props {
  about: AboutType[];
  aboutFields: AboutFields;
}

const About = (props: Props) => {
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" align="right" css={titleStyle}>
          {props.aboutFields.aboutTitle.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} css={contentStyle}>
        <Grid item xs={12}>
          {props.about.map((cont) => (
            <Typography
              variant="body2"
              key={cont.id}
              color="textSecondary"
              sx={{ paddingBottom: "1em" }}
            >
              {cont.paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
