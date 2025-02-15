"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Bloc1 from "@/components/sections/Bloc1";
import Bloc2 from "@/components/sections/Bloc2";
import BookCalendar from "@/components/sections/BookCalendar";
import Experience from "@/components/sections/Experience";
import Explore from "@/components/sections/Explore";
import GalleryGrid from "@/components/sections/GalleryGrid";
import HeroBanner from "@/components/sections/HeroBanner";
import Titre from "@/components/sections/Titre";
import { withPageContent } from "@/hooks/withPageContent";
import { Fragment } from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Page = () => {
  return (
    <Fragment>
      <Header />
      <div className="overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <HeroBanner />
        </motion.div>

        <div className="3xl:mx-[21.25rem] lg:mx-8 mx-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <Bloc1 />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <Bloc2 />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <BookCalendar />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <Titre />
          </motion.div>
        </div>

        <div className="3xl:mx-[21.25rem] lg:mx-8 mx-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <Experience />
          </motion.div>
        </div>

        <div className="3xl:px-[21.25rem] lg:px-8 px-0 bg-[#EAFCFF]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <GalleryGrid />
          </motion.div>
        </div>

        <div className="px-0 bg-[#EAFCFF]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <Explore />
          </motion.div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default withPageContent(Page);
