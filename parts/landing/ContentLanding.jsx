import React from "react";
import ContentArticle from "../../components/section/ContentFirst/ContentArticle";
import ContentImg from "../../components/section/ContentFirst/ContentImg";
import Container from "../../components/Content/Container";

const ContentLanding = () => {
  return (
    <section className="h-screen">
      <Container
        className="px-5 sm:px-0 relative z-20
      "
      >
        <div className="flex items-center relative min-h-screen">
          <ContentArticle className="w-full lg:w-1/2" />
          <ContentImg />
        </div>
      </Container>
    </section>
  );
};

export default ContentLanding;
