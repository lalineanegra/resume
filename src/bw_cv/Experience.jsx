import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import WorkTimeline from './WorkTimeline';

const useStyles = makeStyles((theme) => ({
    section: {
        alignItems: 'stretch',
    },
    sectionContent: {
        background: theme.palette.action.hover,
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
        paddingLeft: 0,
        marginLeft: 0,
        justifyContent: 'left',
        textAlign: 'left',
    },
    title: {
        marginRight: 50
    }
}));

export const Experience = (props) => {
    const { experience } = props
    const classes = useStyles();
    return(
        <Grid 
            container
            className={classes.section}
        >
            <Grid item xs={12} md={4} className={classes.sectionContent}>
                <Typography variant='h6' display="block" className={classes.title}>
                    EXPERIENCE
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} className={classes.content}>
                <WorkTimeline experience={experience}/>
            </Grid>
        </Grid>
    )
}

export default Experience;
