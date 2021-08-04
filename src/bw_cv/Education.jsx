import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


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

export const Education = (props) => {
    const { education } = props
    const classes = useStyles();
    return(
        <Grid 
            container
            className={classes.section}
        >
            <Grid item xs={12} md={4} className={classes.sectionContent}>
                <Typography variant='h6' display="block">
                    EDUCATION
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} className={classes.content}>
                
            </Grid>
        </Grid>
    )
}

export default Education;