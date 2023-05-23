import React from "react";
import ImgShow from "./ImgShow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowLeft from "../../icon/ArrowLeft";
import ArrowRight from "../../icon/ArrowRight";

const images = [
  { source: "balbasaur.jpg", alt: "bulbasaur" },
  { source: "cardPokemon.jpg", alt: "card Pokemon" },
  { source: "pickPokemon.jpg", alt: "pick Pokemon" },
  { source: "pikachu.jpg", alt: "pokemon pikachu" },
];

const SlideImages = ({ className }) => {
  const addClass = className ? className : "";
  const { ref: parent, entry } = useInView();

  return (
    <div ref={parent} className="overflow-hidden w-full lg:w-3/4 slide-images ">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -entry?.boundingClientRect?.width }}
        whileHover={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        className={`${addClass} mx-auto lg:mx-0 w-full gap-8 `}
      >
        {images.map((img, idx) => {
          return (
            <ImgShow
              source={img.source}
              className="min-w-[15rem] overflow-hidden"
              key={idx}
            />
          );
        })}
      </motion.div>

      <div className="w-fit mx-auto justify-center gap-4 flex mt-7">
        <ArrowLeft className="h-6 w-6" />
        <p className="text-xl font-semibold">1 of 3</p>
        <ArrowRight className="h-6 w-6" />
      </div>
    </div>
  );
};

export default SlideImages;
