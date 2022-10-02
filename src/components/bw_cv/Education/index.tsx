/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImportContacts from "@mui/icons-material/ImportContacts";
import TurnedIn from "@mui/icons-material/TurnedIn";
import LaptopMac from "@mui/icons-material/LaptopMac";
import { grey } from "@mui/material/colors";

// Local imports
import { EducationFields, EducationType } from "../../../types/interfaces";
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
  //@ts-ignore
  //background: theme.palette.background.default,
  paddingLeft: 60,
  marginLeft: 0,
  justifyContent: "left",
  textAlign: "left",
  //@ts-ignore
  [themeContext.breakpoints.down("sm")]: {
    padding: 10,
  },
});
const coursesStyle = css({
  marginRight: "60",
});
const listCourse = css({
  color: "grey",
});
const listStyle = css({
  width: "100%",
  //@ts-ignore
  //backgroundColor: theme.palette.background.default,
});

interface Props {
  education: EducationType;
  educationFields: EducationFields;
}

export const Education = (props: Props) => {
  const education = props.education;
  return (
    <Grid container css={sectionStyle}>
      <Grid item xs={12} md={4} css={sectionContent}>
        <Typography variant="h6" display="block" css={titleStyle}>
          {props.educationFields.educationTitle.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} css={contentStyle}>
        <Grid container>
          <Grid item xs={12} md={6} css={coursesStyle}>
            <List css={listStyle}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImportContacts />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={props.educationFields.university}
                  secondary={education.university.name}
                />
              </ListItem>
              <ListItem>
                <Typography variant="body2" display="block" css={listCourse}>
                  {education.university.title}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6} css={coursesStyle}>
            <List css={listStyle}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <TurnedIn />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={props.educationFields.diplomas}
                  secondary={education.diplomas[0].university}
                />
              </ListItem>
              {education.diplomas.map((diploma) => (
                <ListItem key={diploma.id}>
                  <Typography variant="body2" display="block" css={listCourse}>
                    {diploma.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={12} css={coursesStyle}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LaptopMac />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.educationFields.courses} />
              </ListItem>
              {education.courses.map((course) => (
                <ListItem key={course.id}>
                  <Typography variant="body2" display="block" css={listCourse}>
                    {course.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Education;
