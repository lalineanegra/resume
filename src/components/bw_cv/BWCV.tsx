import React, {useEffect} from "react";
import { Container, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

// Local imports
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import { CONTENT } from "../data/content";

const leftSlide = {
  initial : {
    x: 100, transition: { duration: 1 }
  },
  animate: {
    x: 0, transition: { duration: 1 }
  },
  exit: {
    x: 0, transition: { duration: 1 }
  }
}

const rightSlide = {
  initial : {
    x: -100, transition: { duration: 1 }
  },
  animate: {
    x: 0, transition: { duration: 1 }
  },
  exit: {
    x: 0, transition: { duration: 1 }
  }
}

const BWCV = () => {
  const {ref, inView} = useInView()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Header />
          <motion.div initial={leftSlide.initial} animate={leftSlide.animate}>
            <About about={CONTENT.about}/>
          </motion.div>
          <motion.div initial={rightSlide.initial} animate={rightSlide.animate}>
            <Skills skills={CONTENT.skills} />
          </motion.div>
          <motion.div initial={leftSlide.initial} animate={leftSlide.animate}>
            <Experience experience={CONTENT.experience} />
          </motion.div>
          <motion.div initial={rightSlide.initial} animate={rightSlide.animate}>
            <Education props={CONTENT.education} />
          </motion.div>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default BWCV;
