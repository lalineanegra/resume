import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from './Header';
import PersonalDetails from './PersonalDetails';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { CONTENT } from '../data/content'


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: CONTENT.name,
  description: CONTENT.title,
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: CONTENT.email,
};

const personalDetails = [
  {
    title: 'Personal',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  }
];



const sidebar = {
  title: 'About',
  description: CONTENT.about,
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'linkedin.com/in/rodrigo-alarcon-ingeniero/', icon: LinkedInIcon },
    { name: 'Twitter', icon: TwitterIcon },
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
          <Grid container spacing={4}>
            {personalDetails.map((details) => (
              <PersonalDetails key={details.title} details={details} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Timeline"  />
           
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
