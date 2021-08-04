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
        background: '#f7f7f7',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'right',
        paddingLeft:'20%'
    },
    content: {
        background: theme.palette.background.default,
        paddingLeft: 0,
        marginLeft: 0,
        justifyContent: 'left',
        textAlign: 'left',
    },
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
                <Typography variant='h6' display="block">
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