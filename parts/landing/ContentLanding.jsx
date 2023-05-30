import React from "react";
import Container from "../../components/Content/Container";
import SwapIcon from "../slideImg/SwapIcon";
import Header from "../../components/navbar/Header";
import ContentArticle from "../contents/ContentArticle";
import ContentImg from "../contents/ContentImg";

const ContentLanding = () => {
  return (
    <section className="h-screen grid grid-rows-6 grid-cols-1 relative">
      <Header className="sticky top-0 z-50 w-full my-auto row-span-1 px-5 sm:px-0" />
      <SwapIcon className="swap-icon sm:hidden absolute z-40 bottom-8 w-3/4 md:w-[55%] right-0 justify-evenly" />
      <Container className="px-5 sm:px-0 relative z-20 lg:self-center xl:self-auto row-span-5 xl:mt-10">
        <SwapIcon className="hidden sm:flex justify-between gap-8 lg:gap-10 absolute z-20 bottom-8 right-0" />
        <div className="flex w-full flex-wrap">
          <ContentArticle className="w-full lg:w-1/2 my-0 lg:my-auto" />
          <ContentImg />
        </div>
      </Container>
    </section>
  );
};

export default ContentLanding;
