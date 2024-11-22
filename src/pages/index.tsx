import React, { FC, useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Footer } from "../components/Footer";
import { Us } from "../components/Us";
import { Say } from "../components/Say";
import { Team } from "../components/Team";
import { Experience } from "../components/Experience";
import { Project } from "../components/Project";
import { Service } from "../components/Service";
import { Banner } from "../components/Banner";

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        <Service />
        <Project />
        <Experience />
        <Team />
        <Say />
        <Us />
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>{"<DotDager>"}</title>;
