import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Header from './Header';
import PersonalDetails from './PersonalDetails';
import Main from './Main';
import Sidebar from './Sidebar';
import Skills from './Skills';
import Education from './Education';
import { CONTENT } from '../data/content'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),
  },
}));

const mainFeaturedPost = {
  title: CONTENT.firstName + ' ' + CONTENT.lastName,
  description: CONTENT.title,
  about: CONTENT.title,
  imgText: 'main image description',
};

const sidebar = {
  title: 'About',
  description: CONTENT.about,
  social: [
    { name: 'linkedin.com/in/rodrigo-alarcon-ingeniero/', icon: LinkedInIcon }
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Header post={mainFeaturedPost} />
          <Grid item xs={12} >
              <PersonalDetails 
                mainDetails={CONTENT.mainDetails} 
                secondDetails={CONTENT.secondDetails}
                thirdDetails={CONTENT.thirdDetails}
              />
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Timeline"  />
            <Sidebar
              title={sidebar.title}
              about={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Container maxWidth="lg">
        <Skills skills={CONTENT.skills}/>
      </Container>
      <Container maxWidth="lg">
        <Education />
      </Container>
    </React.Fragment>
  );
}
