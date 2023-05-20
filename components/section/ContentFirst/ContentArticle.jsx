import React, { Fragment } from "react";
import Paragraf from "../../text/Paragraf";
import Text from "../../text/Text";
import SlideImages from "../../slideImg/SlideImages";

const scrollingBtn = (element) => {
  const elm = document.querySelector(element);

  return elm.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

const ContentArticle = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <Fragment>
      <div className={`${addClass}`}>
        <article className="space-y-8">
          <Text className="text-black font-bold sm:text-5xl xl:text-6xl">
            Gotta Catch Em All!
          </Text>
          <Paragraf className="w-full sm:w-4/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            quos sed fugiat impedit repudiandae et placeat expedita veritatis
            quam explicabo?
          </Paragraf>

          <button
            className="bg-black text-white px-10 py-4 transition-all duration-200 rounded-full hover:translate-y-[-3px] hover:shadow-reguler2 relative active:-translate-y-px active:shadow-active2 after:content-[''] after:inline-block after:h-full after:w-full after:rounded-[100px] after:absolute after:top-0 after:left-0 after:-z-10 after:transition-all after:duration-[400ms] after:bg-black hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0"
            type="button"
            onClick={() => scrollingBtn("#cardPokemon")}
          >
            More Information
          </button>
        </article>
        <SlideImages className="flex mt-14 sm:mt-20 2xl:mt-24" />
      </div>
    </Fragment>
  );
};

export default ContentArticle;
