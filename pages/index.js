import Head from "next/head";
import React, { Fragment, useState } from "react";
import Container from "../components/Content/Container";
import Header from "../components/navbar/Header";
import ContentArticle from "../components/section/ContentFirst/ContentArticle";
import ContentImg from "../components/section/ContentFirst/ContentImg";
import ContentCard from "../components/section/ContentSecond/ContentCard";
import ModalCard from "../components/section/ContentSecond/ModalCard";
import SearchCards from "../components/section/ContentSecond/SearchCards";
import ImgShow from "../components/slideImg/ImgShow";
import SwapIcon from "../components/slideImg/SwapIcon";

export const StateContext = React.createContext();
export const ThemeContext = React.createContext();
export const ThemeCards = React.createContext();
export const DataContext = React.createContext();

export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dataPokemon, setDataPokemon] = useState({});
  const [color, setColor] = useState("");

  return (
    <Fragment>
      <ThemeCards.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
        <DataContext.Provider
          value={{ dataPokemon: dataPokemon, color: color }}
        >
          {isOpen && <ModalCard />}
        </DataContext.Provider>
      </ThemeCards.Provider>

      <div className="relative">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          className="bg-green-500/80 w-[55%] h-screen absolute top-0 right-0 -z-20 lg:z-0"
          style={{
            clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
            WebkitClipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
          }}
        ></div>

        <div
          className="z-20 w-20 fixed flex justify-center gap-4
        items-center bottom-0 top-0 my-auto mx-0 right-12 flex-col"
        >
          {[1, 2, 3].map((data) => (
            <div
              className="w-3 h-3 rounded-full bg-white cursor-pointer"
              key={data}
            ></div>
          ))}
        </div>

        <header className="py-10">
          <Header />
        </header>

        <section>
          <Container className="px-5 sm:px-0 space-y-10">
            <div className="block lg:flex items-center">
              <ContentArticle className="space-y-5 w-full lg:w-1/2" />
              <ContentImg className="hidden" />
            </div>

            <div className="flex w-full lg:w-5/12 gap-8">
              <ImgShow source="1.png" className="w-1/2" />
              <ImgShow source="3.png" className="w-1/2" />
            </div>

            <div className="flex justify-between items-center mt-5">
              <SwapIcon />
            </div>
          </Container>
        </section>

        <section className="bg-slate-500 mt-60">
          <Container className="px-5 sm:px-0 space-y-60">
            <StateContext.Provider
              value={{
                searchPokemon: searchPokemon,
                setSearchPokemon: setSearchPokemon,
              }}
            >
              <SearchCards />
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
