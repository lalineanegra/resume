import React from 'react';
import {
    Card,
    CardMedia,
    Divider,
    Typography,
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Me from '../common/me.jpg'
import { CONTENT } from '../data/content'

const useStyles = makeStyles((theme) => ({
    header: {
        minHeight: 600,
        alignItems: 'stretch',

    },
    photoCard: {
        paddingTop: 300,
        display: 'flex',
        border: 'none',
        boxShadow: 'none',
        background: '#f7f7f7',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 80
        }
    },
    photo: {
        webkitFilter: "grayscale(100%)",
        filter: "grayscale(100%)",
        borderRadius: '50%',
        padding: '20%',
    },
    titles: {
        paddingTop: 300,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 30
        }
    },
    titleOne: {
        paddingBottom: 0,
        marginBottom: 0,
        fontWeight: 100,
        color: 'grey',
        marginLeft: 50
    },
    titleTwo: {
        paddingTop: 0,
        marginTop: 0,
        fontWeight: 'bold',
        marginLeft: 50,
    },
    titleThree: {
        marginLeft: 50,
    },
    content: {
        paddingLeft: 50,
        paddingTop: 20,
    },
    dividerInset: {
        margin: `0px 0 0 ${theme.spacing(5)}px`,
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Grid 
            container
            className={classes.header} 
        >
            <Grid item xs={12} md={4} >
                <Card className={classes.photoCard} >
                    <CardMedia
                        component='img'
                        className={classes.photo}
                        image={Me}
                        title="Rodrigo Alonso"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              
                    <Grid item xs={12} className={classes.titles}>
                        <Typography variant="h2" paragraph className={classes.titleOne} color="textSecondary">
                            {CONTENT.firstName.toLowerCase()}
                        </Typography>
                        <Typography variant="h2" paragraph color="primary"className={classes.titleTwo}>
                            {CONTENT.lastName.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" paragraph className={classes.titleThree}>{CONTENT.title}</Typography>
                    </Grid>
             
                <Divider className={classes.dividerInset}/>
                <Grid container>
                    <Grid item xs={12} md={3} className={classes.content}>
                        <Typography variant="subtitle1">Location</Typography>
                        <Typography variant="subtitle1" >
                        {`${CONTENT.detailsSummary.city}, ${CONTENT.detailsSummary.country}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.content}>
                    <Typography variant="subtitle1">Email</Typography>
                        <Typography variant="subtitle1" >{CONTENT.detailsSummary.email}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.content}>
                    <Typography variant="subtitle1">Phone</Typography>
                        <Typography variant="subtitle1" >{ /*CONTENT.detailsSummary.phone */}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}  className={classes.content}>
                    <Typography variant="subtitle1">Web</Typography>
                        <Typography variant="subtitle1" >{CONTENT.detailsSummary.web}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;