import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Banner } from "../components/Banner";
import { Service } from "../components/Service";
import { Project } from "../components/Project";
import { Experience } from "../components/Experience";
import { Team } from "../components/Team";
import { Say } from "../components/Say";
import { Us } from "../components/Us";
import { Footer } from "../components/Footer";

const IndexPage: FC<PageProps> = () => {
  return (
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
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dot Dager</title>;
