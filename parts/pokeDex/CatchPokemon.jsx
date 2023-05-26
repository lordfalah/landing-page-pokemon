import React, { Fragment, useContext, useState } from "react";
import Container from "../../components/Content/Container";
import DoubleUp from "../../icon/DoubleUp";
import Paragraf from "../../components/text/Paragraf";
import { useInView } from "react-intersection-observer";
import ContentCard from "../cards/ContentCard";
import ModalCard from "../cards/ModalCard";
import SearchCards from "../cards/SearchCards";
import { scrollingBtn } from "../../helpers/utils";
import { ModalContext } from "../../context/ModalProvider";
import { AnimatePresence } from "framer-motion";
import { SearchProvider } from "../../context/SearchProvider";

export const StateContext = React.createContext();

const CatchPokemon = () => {
  const { ref: arrowTop, inView } = useInView({
    threshold: 0.1,
  });
  const { isOpen } = useContext(ModalContext);

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        {isOpen ? <ModalCard /> : null}
      </AnimatePresence>

      <section
        ref={arrowTop}
        id="cardPokemon"
        className="bg-slate-700/20 h-full"
      >
        <Container className="px-5 sm:px-0 py-10">
          <button
            aria-label="kembali ke atas"
            onClick={() => scrollingBtn("html")}
            type="button"
            className={`bg-white rounded-lg border-solid border border-[#e7eae8] cursor-pointer z-20 w-11 h-11 fixed right-5 flex justify-center items-center transition-all duration-500 ease-in-out group hover:bg-black drop-shadow-md ${
              inView
                ? "opacity-100 scale-100 bottom-24 sm:bottom-10 animate-bounce"
                : "-bottom-1/4 opacity-0"
            }`}
          >
            <DoubleUp
              className="w-7 h-7 stroke-1 group-hover:stroke-2
            group-hover:stroke-white transition duration-150 ease-linear"
            />
          </button>

          <SearchProvider>
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-normal tracking-tight text-black/80">
                PokeDex
              </h2>
              <Paragraf className="text-black/50">
                Is your pokemon on our codex?
              </Paragraf>
              <SearchCards className="mx-auto" />
            </div>

            <ContentCard />
          </SearchProvider>
        </Container>
      </section>
    </Fragment>
  );
};

export default CatchPokemon;
