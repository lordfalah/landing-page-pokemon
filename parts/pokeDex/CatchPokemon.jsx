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
    threshold: 0.2,
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
        id="cardPokemon"
        className="bg-slate-700/20 h-full"
        ref={arrowTop}
      >
        <Container className="px-5 sm:px-0 py-10">
          <button
            onClick={() => scrollingBtn("html")}
            type="button"
            className={`bg-black/50 rounded-full cursor-pointer z-20 w-11 h-11 fixed bottom-10 right-5 flex justify-center items-center transition duration-200 delay-200 ease-in-out group hover:bg-gradient-to-t hover:from-transparent hover:to-black/90 ${
              inView ? "scale-100 translate-y-0" : "scale-0 translate-y-full"
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
    </Fragment>
  );
};

export default CatchPokemon;
