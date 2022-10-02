/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LinearProgress from "@mui/material/LinearProgress";
import { grey } from "@mui/material/colors";

// Local imports
import { SkillsDetails, SkillsFields } from "../../../types/interfaces";
import themeContext from "../../../contexts/themeContext";

const sectionStyle = css({
  alignItems: "stretch",
});
const sectionContent = css({
  background: grey[50],
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
  //background: theme.palette.background.default,
  paddingLeft: 30,
  marginLeft: 0,
  justifyContent: "left",
  textAlign: "left",
  paddingTop: 50,
  paddingBottom: 50,
  // [theme.breakpoints.down("sm")]: {
  //   padding: 15,
  // },
});
const listStyle = css({
  width: "100%",
});

interface Props {
  skillsList: SkillsDetails[] | [];
  skillsFields: SkillsFields;
}

export const Skills = (props: Props) => {
  const skills1 = props.skillsList.slice(0, 4);
  const skills2 = props.skillsList.slice(4, 8);
  const skills3 = props.skillsList.slice(8, 12);
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" display="block" css={titleStyle}>
          {props.skillsFields.skillsTitle.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} css={contentStyle}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <List
              css={listStyle}
              aria-label="skills"
              style={{ paddingLeft: 5 }}
            >
              {skills1.map((skill) => (
                <ListItem key={skill.id}>
                  <Grid item xs={12} md={6}>
                    <ListItemText secondary={skill.name} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div css={listStyle}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.value}
                      />
                    </div>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <List css={listStyle} aria-label="skills">
              {skills2.map((skill) => (
                <ListItem key={skill.id}>
                  <Grid item xs={12} md={6}>
                    <ListItemText secondary={skill.name} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div css={listStyle}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.value}
                      />
                    </div>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <List css={listStyle} aria-label="skills">
              {skills3.map((skill) => (
                <ListItem key={skill.id}>
                  <Grid item xs={12} md={6}>
                    <ListItemText secondary={skill.name} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div css={listStyle}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.value}
                      />
                    </div>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
