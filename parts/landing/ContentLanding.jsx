import React from "react";
import ContentArticle from "../../components/section/ContentFirst/ContentArticle";
import ContentImg from "../../components/section/ContentFirst/ContentImg";
import Container from "../../components/Content/Container";
import SwapIcon from "../../components/slideImg/SwapIcon";
import Header from "../../components/navbar/Header";

const ContentLanding = () => {
  return (
    <section className="h-screen grid grid-rows-6 grid-cols-1">
      <Header className="sticky top-0 z-50 w-full my-auto row-span-1 px-5 sm:px-0" />
      <Container className="px-5 sm:px-0 relative z-20 lg:self-center xl:self-auto row-span-5">
        <SwapIcon className="hidden sm:flex gap-5 absolute z-20 bottom-8 right-0" />
        <div className="flex w-full flex-wrap">
          <ContentArticle className="w-full lg:w-1/2 my-0 lg:my-auto" />
          <ContentImg />
        </div>
      </Container>
    </section>
  );
};

export default ContentLanding;
