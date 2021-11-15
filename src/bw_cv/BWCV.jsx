import React from 'react';
import {
    Container,
    CssBaseline,
} from '@material-ui/core'

import Header from './Header';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import { CONTENT } from '../data/content'

export const BWCV = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Header />
                    <About />
                    <Skills skills={CONTENT.skills}/>
                    <Experience experience={CONTENT.experience}/>
                    <Education education={CONTENT.education}/>
                </main>
            </Container>
        </React.Fragment>
    )
}

export default BWCV;