import React, { Fragment, useState } from "react";
import Container from "../../components/Content/Container";
import DoubleUp from "../../icon/DoubleUp";
import Paragraf from "../../components/text/Paragraf";
import SearchCards from "../../components/section/ContentSecond/SearchCards";
import { useInView } from "react-intersection-observer";
import ContentCard from "../../components/section/ContentSecond/ContentCard";
import { AnimatePresence } from "framer-motion";
import ModalCard from "../../components/section/ContentSecond/ModalCard";
import { scrollingBtn } from "../../utils";

export const StateContext = React.createContext();
export const ThemeCards = React.createContext();
export const DataContext = React.createContext();
export const ThemeToggle = React.createContext();
export const ThemeContext = React.createContext();

const CatchPokemon = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const { ref: arrowTop, inView } = useInView({
    threshold: 0.1,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [dataPokemon, setDataPokemon] = useState({});
  const [color, setColor] = useState("");

  return (
    <Fragment>
      <ThemeCards.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
        <DataContext.Provider
          value={{ dataPokemon: dataPokemon, color: color }}
        >
          <AnimatePresence exitBeforeEnter>
            {isOpen ? <ModalCard /> : null}
          </AnimatePresence>
        </DataContext.Provider>
      </ThemeCards.Provider>

      <section
        ref={arrowTop}
        id="cardPokemon"
        className="bg-slate-700/20 h-full"
      >
        <Container className="px-5 sm:px-0 py-10">
          <button
            onClick={() => scrollingBtn("html")}
            type="button"
            className={`bg-white rounded-lg border-solid border border-[#e7eae8] cursor-pointer z-20 w-11 h-11 fixed right-5 flex justify-center items-center transition-all duration-150 ease-in-out group hover:bg-black drop-shadow-md ${
              inView
                ? "opacity-100 scale-100 bottom-10 animate-bounce"
                : "scale-0 bottom-0 opacity-0"
            }`}
          >
            <DoubleUp
              className="w-7 h-7 stroke-1 group-hover:stroke-2
            group-hover:stroke-white transition duration-150 ease-linear"
            />
          </button>

          <StateContext.Provider
            value={{
              searchPokemon: searchPokemon,
              setSearchPokemon: setSearchPokemon,
            }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-normal tracking-tight text-black/80">
                PokeDex
              </h2>
              <Paragraf className="text-black/50">
                Is your pokemon on our codex?
              </Paragraf>
              <SearchCards className="mx-auto" />
            </div>

            <ThemeContext.Provider
              value={{
                setIsOpen: setIsOpen,
                setDataPokemon: setDataPokemon,
                setColor: setColor,
              }}
            >
              <ContentCard />
            </ThemeContext.Provider>
          </StateContext.Provider>
        </Container>
      </section>
      {/* <h1 className="text-4xl">ASHOLE</h1> */}
    </Fragment>
  );
};

export default CatchPokemon;
