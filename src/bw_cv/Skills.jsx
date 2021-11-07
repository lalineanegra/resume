import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    section: {
        alignItems: 'stretch'
    },
    sectionContent: {
        background: '#f7f7f7',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'right',
        paddingLeft:'20%'
    },
    content: {
        background: theme.palette.background.default,
        paddingLeft: 30,
        marginLeft: 0,
        justifyContent: 'left',
        textAlign: 'left',
        paddingTop: 50,
        paddingBottom: 50
    },
    root: {
        width: '100%',
       
    },
}));

export const Skills = (props) => {
    const { skills } = props
    const classes = useStyles();
    return(
        <Grid 
            container
            className={classes.section}
        >
            <Grid item xs={12} md={4} className={classes.sectionContent}>
                <Typography variant='h6' display="block">
                    SKILLS
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} className={classes.content}>
                <Grid container>
                    <Grid item xs={12} md={4} >
                        <List className={classes.root} aria-label="skills" style={{'paddingLeft': 5}}>
                            {skills.skills_1.map(skill => (
                                <ListItem >
                                    <Grid item xs={12} md={6} >
                                        <ListItemText secondary={skill.name}/>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <div className={classes.root}>
                                            <LinearProgress variant="determinate" value={skill.value} />
                                        </div>
                                    </Grid>
                                </ListItem>
                            ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <List  className={classes.root} aria-label="skills">
                        {skills.skills_2.map(skill => (
                                <ListItem >
                                    <Grid item xs={12} md={6} >
                                        <ListItemText secondary={skill.name}/>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <div className={classes.root}>
                                            <LinearProgress variant="determinate" value={skill.value} />
                                        </div>
                                    </Grid>
                                </ListItem>
                            ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <List  className={classes.root} aria-label="skills">
                        {skills.skills_3.map(skill => (
                                <ListItem >
                                    <Grid item xs={12} md={6} >
                                        <ListItemText secondary={skill.name}/>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <div className={classes.root}>
                                            <LinearProgress variant="determinate" value={skill.value} />
                                        </div>
                                    </Grid>
                                </ListItem>
                            ))
                            }
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Skills;