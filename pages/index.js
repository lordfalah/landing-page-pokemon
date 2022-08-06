import Head from "next/head";
import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Container from "../components/Content/Container";
import Header from "../components/navbar/Header";
import ContentArticle from "../components/section/ContentFirst/ContentArticle";
import ContentImg from "../components/section/ContentFirst/ContentImg";
import ContentCard from "../components/section/ContentSecond/ContentCard";
import ModalCard from "../components/section/ContentSecond/ModalCard";
import SearchCards from "../components/section/ContentSecond/SearchCards";
import SwapIcon from "../components/slideImg/SwapIcon";
import Paragraf from "../components/text/Paragraf";
import useScrollTop from "../hooks/useScrollTop";
import ArrowLeft from "../icon/ArrowLeft";
import ArrowRight from "../icon/ArrowRight";
import { AnimatePresence } from "framer-motion";
import GridImg from "../components/slideImg/GridImg";
import DoubleUp from "../icon/DoubleUp";
import SlideImages from "../components/slideImg/SlideImages";

export const StateContext = React.createContext();
export const ThemeContext = React.createContext();
export const ThemeCards = React.createContext();
export const DataContext = React.createContext();

export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dataPokemon, setDataPokemon] = useState({});
  const [color, setColor] = useState("");
  const [numberOf, setNumberOf] = useState(0);
  const numberSectionOne = useRef();
  const { top } = useScrollTop();

  useEffect(() => {
    const value = numberSectionOne.current.offsetTop;
    setNumberOf(value);
  }, []);

  useLayoutEffect(() => {
    document.querySelector("html").classList.add("scroll-smooth");
  }, []);

  return (
    <Fragment>
      <ThemeCards.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
        <DataContext.Provider
          value={{ dataPokemon: dataPokemon, color: color }}
        >
          <AnimatePresence exitBeforeEnter>
            {isOpen && <ModalCard />}
          </AnimatePresence>
        </DataContext.Provider>
      </ThemeCards.Provider>

      <div
        id="home"
        className="relative before:w-full before:h-full 
        before:bg-gray-100 before:absolute before:-z-50"
      >
        <Head>
          <title>Pokemon</title>
          <meta name="description" content="catch pokemon" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          className="bg-green-500/80 w-3/4 md:w-[55%] h-screen 
          absolute top-0 right-0 before:-z-20"
          style={{
            clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
            WebkitClipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <GridImg className="w-24 h-12 absolute bottom-40 right-0 block sm:hidden" />

          <div
            className="absolute bottom-4 lg:bottom-4 xl:bottom-0
            flex justify-between items-center w-full px-10"
          >
            <GridImg
              className="w-[120px] h-[50px] sm:w-40 sm:h-[55px] lg:w-52 
              lg:h-20 xl:w-64 xl:h-28 overflow-hidden hidden md:block"
            />
            <SwapIcon className="flex justify-center items-center" />
          </div>
        </div>

        <header className="py-4">
          <Header />
        </header>

        <section className="h-screen">
          <Container
            className="px-5 sm:px-0 relative z-20
            mt-16 md:mt-20 lg:mt-24 xl:mt-32"
          >
            <div
              className="block lg:grid lg:grid-cols-2 items-center 
              relative"
            >
              <ContentArticle className="space-y-8 w-full" />
              <ContentImg
                className="w-1/2 absolute right-0 top-1/2 lg:mt-10 xl:mt-16 
                2xl:mt-24 -translate-y-1/2 hidden lg:block"
              />
            </div>

            <div>
              <SlideImages className="flex" />
            </div>

            <div
              className="w-fit lg:w-5/12 lg:mx-0 mx-auto justify-center 
              gap-4 hidden sm:flex mt-7"
            >
              <ArrowLeft className="h-6 w-6" />
              <p className="text-xl font-semibold">1 of 3</p>
              <ArrowRight className="h-6 w-6" />
            </div>
          </Container>
        </section>

        <section ref={numberSectionOne} className="bg-slate-700/20">
          <Container className="px-5 sm:px-0 py-10">
            <a
              href="#home"
              className={`bg-black/50 rounded-full cursor-pointer z-20
              w-11 h-11 fixed bottom-10 right-5 flex justify-center items-center
              transition duration-200 delay-200 ease-in-out group 
              hover:bg-gradient-to-t hover:from-transparent hover:to-black/90
              ${
                top >= numberOf
                  ? "scale-100 translate-y-0"
                  : "scale-0 translate-y-full"
              }`}
            >
              <DoubleUp
                className="w-7 h-7 stroke-1 group-hover:stroke-2
                group-hover:stroke-white transition duration-150 ease-linear"
              />
            </a>

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
                }}
              >
                <DataContext.Provider
                  value={{ setDataPokemon: setDataPokemon, setColor: setColor }}
                >
                  <ContentCard />
                </DataContext.Provider>
              </ThemeContext.Provider>
            </StateContext.Provider>
          </Container>
        </section>
      </div>
    </Fragment>
  );
}
