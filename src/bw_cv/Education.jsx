import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImportContacts from '@material-ui/icons/ImportContacts';
import TurnedIn from '@material-ui/icons/TurnedIn';
import LaptopMac from '@material-ui/icons/LaptopMac';

const useStyles = makeStyles((theme) => ({
    section: {
        alignItems: 'stretch',
    },
    sectionContent: {
        background: '#f7f7f7',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'right',
        paddingLeft:'20%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            paddingTop: 40,
            paddingBottom: 40
        }
    },
    content: {
        background: theme.palette.background.default,
        paddingLeft: 60,
        marginLeft: 0,
        justifyContent: 'left',
        textAlign: 'left',
    },
    title: {
        marginRight: 50
    },
    courses: {
        marginRight: '60'
    },
    listCourse: {
        color: 'grey'
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.default,
    },
}));

export const Education = (props) => {
    const { education } = props
    const classes = useStyles();
    return(
        <Grid 
            container
            className={classes.section}
        >
            <Grid item xs={12} md={4} className={classes.sectionContent}>
                <Typography variant='h6' display="block" className={classes.title}>
                    EDUCATION
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} className={classes.content}>
                <Grid container>
                    <Grid item xs={12} md={6} className={classes.courses}>
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ImportContacts />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="University" secondary={education.university.name} />
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" display="block" className={classes.listCourse}>
                                {education.university.title}
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.courses}>
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <TurnedIn />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Diplomas" secondary={education.diplomas[0].university}/>
                            </ListItem>
                            {education.diplomas.map(diploma => (
                            <ListItem id={diploma.id}>
                                <Typography variant="body2" display="block" className={classes.listCourse}>
                                    {diploma.name}
                                </Typography>
                            </ListItem>
                            ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.courses} >
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <LaptopMac />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Courses" />
                            </ListItem>
                            {education.courses.map(course => (
                            <ListItem id={course.id}>
                                <Typography variant="body2" display="block" className={classes.listCourse}>
                                    {course.name}
                                </Typography>
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

export default Education;
