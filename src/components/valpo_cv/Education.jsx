import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    timeBox: {
        padding: 40,
        alignItems: 'center'
    }
})

export const Education = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg" xs={12} md={12}>
                <Typography variant="h6"  gutterBottom align="center">
                    Education
                </Typography>
            </Container>
            <Divider variant="fullWidth"/>
            <Grid container spacing={1} className={classes.timeBox}>
                <Grid item xs={4}>
                    <Typography variant="h5" align="center">2002-2008</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">data</Typography>
                </Grid>
            </Grid>

      </React.Fragment>
    )
}

export default Education;