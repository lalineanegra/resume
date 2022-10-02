import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useRouter } from "next/router";

// Local imports
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
//import { useLang, useLangUpdate } from "../../contexts/langContext";
import { en } from "../data/en";
import { sp } from "../data/sp";

const BWCV = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sp;
  const [trns, setTrns] = useState<string>("en");
  //const langUpdate = useLangUpdate;
  const { ref, inView } = useInView();

  const updateLang = (locale: any) => {
    setTrns(locale);
    router.push("/", "/", { locale });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Header
            headerFileds={t.pageFields.header}
            mainDetails={t.main}
            detailsSummary={t.detailsSummary}
            updateLang={updateLang}
            locale={locale}
          />
          <motion.div initial={leftSlide.initial} animate={leftSlide.animate}>
            <About about={t.about} aboutFields={t.pageFields.about} />
          </motion.div>
          <motion.div initial={rightSlide.initial} animate={rightSlide.animate}>
            <Skills skillsList={t.skills} skillsFields={t.pageFields.skills} />
          </motion.div>
          <motion.div initial={leftSlide.initial} animate={leftSlide.animate}>
            <Experience
              experience={t.experience}
              experienceFields={t.pageFields.experience}
            />
          </motion.div>
          <motion.div initial={rightSlide.initial} animate={rightSlide.animate}>
            <Education
              education={t.education}
              educationFields={t.pageFields.education}
            />
          </motion.div>
        </main>
      </Container>
    </React.Fragment>
  );
};

const leftSlide = {
  initial: {
    x: 100,
    transition: { duration: 1 },
  },
  animate: {
    x: 0,
    transition: { duration: 1 },
  },
  exit: {
    x: 0,
    transition: { duration: 1 },
  },
};

const rightSlide = {
  initial: {
    x: -100,
    transition: { duration: 1 },
  },
  animate: {
    x: 0,
    transition: { duration: 1 },
  },
  exit: {
    x: 0,
    transition: { duration: 1 },
  },
};

export default BWCV;
