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

const sectionStyle = css({
    alignItems: "stretch",
  })
const sectionContent = css({
    background: grey[50],
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
  })
const listStyle = css({
    width: "100%",
  })
const titleStyle = css({
    marginRight: 50,
  })

export const Skills = (props) => {
  const { skills } = props;
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" display="block" css={titleStyle}>
          SKILLS
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
              {skills.skills_1.map((skill) => (
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
              {skills.skills_2.map((skill) => (
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
              {skills.skills_3.map((skill) => (
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
