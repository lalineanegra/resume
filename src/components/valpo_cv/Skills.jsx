import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  skillsCard: {
    background: 'linear-gradient(45deg, #ebe5ce 30%, #f5f3eb 90%)',
    boxShadow: '0 3px 5px 2px rgba(235, 229, 206 .3)',
  },
  root: {
    width: "100%",
    paddingBottom: 20
  },
  levels: {
    variant: "overlay",
    fontSize: 14,
    color: "#5c5856",
    fontWeight: "bold"
  },
  levelsContainer: {
    padding: 5
  }
});

export default function Skills(props) {
    const classes = useStyles();
    const { skills } = props;
    const [progress, setProgress] = React.useState(90);

    return (
      <div className={classes.root}>
          <Card className={classes.skillsCard}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                  <Typography variant="h6" align="center">
                    Skills
                  </Typography>
                  <Divider variant="fullWidth" />
                </Grid>
                <Grid item xs={4} className={classes.levelsContainer}>
                  {skills.skills_1.map(skill => (
                      <div key={skill.id} className={classes.levelsContainer}>
                      <Typography className={classes.levels}>
                          {skill.name}
                      </Typography>
                      <LinearProgress variant="determinate" value={skill.value} color="secondary" />
                      </div>
                  ))}
                </Grid>
                <Grid item xs={4}>
                  {skills.skills_2.map(skill => (
                      <div key={skill.id} className={classes.levelsContainer}>
                      <Typography className={classes.levels}>
                          {skill.name}
                      </Typography>
                      <LinearProgress variant="determinate" value={skill.value} color="secondary" />
                      </div>
                  ))}
                </Grid>
                <Grid item xs={4}>
                  {skills.skills_3.map(skill => (
                      <div key={skill.id} className={classes.levelsContainer}>
                      <Typography className={classes.levels} >
                          {skill.name}
                      </Typography>
                      <LinearProgress variant="determinate" value={skill.value} color="secondary" />
                      </div>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
      </div>
    );
  }