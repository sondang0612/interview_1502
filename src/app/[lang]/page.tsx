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

const Page = () => {
  return (
    <Fragment>
      <Header />
      <div className="overflow-hidden">
        <HeroBanner />
        <div className="3xl:mx-[21.25rem] lg:mx-8 mx-4">
          <Bloc1 />
          <Bloc2 />
          <BookCalendar />
          <Titre />
        </div>
        <div className="3xl:mx-[21.25rem] lg:mx-8 mx-0">
          <Experience />
        </div>
        <div className="3xl:px-[21.25rem] lg:px-8 px-0 bg-[#EAFCFF]">
          <GalleryGrid />
        </div>
        <div className="px-0 bg-[#EAFCFF]">
          <Explore />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default withPageContent(Page);
