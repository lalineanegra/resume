import React from 'react';
import {
    Grid,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { CONTENT } from '../data/content'

const useStyles = makeStyles((theme) => ({
    section: {
        alignItems: 'stretch',
    },
    sectionContent: {
        background: theme.palette.action.hover,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'right',
        paddingLeft:'25%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10, 
        }
    },
    content: {
        paddingLeft: 50,
        paddingTop: 10,
        paddingBottom: 10,
        [theme.breakpoints.down('sm')]: {
            padding: 15
        }
    },
    title: {
        marginRight: 50,
    }
}));

export const About = () => {
    const classes = useStyles();
    return(
        <Grid 
            container
            className={classes.section}
        >
            <Grid item xs={12} md={4} className={classes.sectionContent}>
                    <Typography variant='h6' align="right" className={classes.title}>
                        ABOUT
                    </Typography>
            </Grid>
            <Grid item xs={12}  md={8} className={classes.content}>
                <Grid item xs={12}>
                {CONTENT.about.map(cont => (
                    <Typography variant='body1' key={cont.id} color="textSecondary">
                        {cont.paragraph}
                    </Typography>
                ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About;
