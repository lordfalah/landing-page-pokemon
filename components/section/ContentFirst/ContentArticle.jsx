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
            className="bg-black text-white px-6 py-3 transition duration-150 
        	ease-linear hover:shadow-xl shadow-slate-600 rounded-full inline-block"
            type="button"
            onClick={() => scrollingBtn("#cardPokemon")}
          >
            More Information
          </button>
        </article>
        <SlideImages className="flex mt-20 2xl:mt-24" />
      </div>
    </Fragment>
  );
};

export default ContentArticle;
