/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

// Local imports
import { AboutType } from "../../types/interfaces"

const sectionStyle = css({
    alignItems: "stretch",
  })
const sectionContent = css({
    background: grey[100],
    alignItems: "center",
    display: "flex",
    justifyContent: "right",
    paddingLeft: "25%",
    // [theme.breakpoints.down("sm")]: {
    //   justifyContent: "center",
    //   paddingTop: 40,
    //   paddingBottom: 40,
    // },
  })

const contentStyle = css({
    paddingLeft: 50,
    paddingTop: 10,
    paddingBottom: 10,
    // [theme.breakpoints.down("sm")]: {
    //   padding: 15,
    // },
  })
const titleStyle = css({
    marginRight: 50,
  })

interface Props {
  about: AboutType[]
}

export const About = (props: Props) => {
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" align="right" css={titleStyle}>
          ABOUT
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} css={contentStyle}>
        <Grid item xs={12}>
          {props.about.map((cont) => (
            <Typography variant="body1" key={cont.id} color="textSecondary">
              {cont.paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
