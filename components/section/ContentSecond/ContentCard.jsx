import React, { Fragment, useContext, useState } from "react";
import { useQuery } from "react-query";
import CardPokemon from "./CardPokemon";
import ErrorCustom from "../../suspense/Error";
import ArrowLongRight from "../../../icon/ArrowLongRight";
import { renderPage } from "../../../utils/fetchApi";
import BtnPokemon from "../../button/BtnPokemon";
import ArrowLongLeft from "../../../icon/ArrowLongLeft";
import { scrollingBtn } from "../../../utils/index";
import Disabled from "../../../icon/Disabled";
import MakeBtn from "../../button/MakeBtn";
import { StateContext } from "../../../parts/pokeDex/CatchPokemon";

const ContentCard = () => {
  const { searchPokemon } = useContext(StateContext);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data: pokemon,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["pokemon", currentPage, searchPokemon],
    () => renderPage(currentPage, searchPokemon),
    {
      keepPreviousData: true,
      cacheTime: 2 * 60 * 1000,
      staleTime: 5000,
    }
  );

  return (
    <Fragment>
      {isFetching ? (
        <div className="flex justify-center mt-16 transition-all duration-150 ease-in-out">
          <div className="flex items-center scale-150">
            <span className="bar"></span>
            <span
              className="bar h-[35px] mx-[5px] my-0"
              style={{ animationDelay: ".25s" }}
            ></span>
            <span className="bar" style={{ animationDelay: ".5s" }}></span>
          </div>
        </div>
      ) : null}

      {isError && <ErrorCustom error={error} />}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center  
        xl:grid-cols-4 gap-x-7 gap-y-28 transition-all duration-150 ease-in-out mb-52 sm:mb-72"
      >
        {isSuccess && !isError ? (
          searchPokemon.length === 0 ||
          (searchPokemon === "" && pokemon.length > 0) ? (
            pokemon?.map((pok, idx) => {
              return (
                <CardPokemon
                  key={`${idx} - ${pok?.data?.id}`}
                  pokemon={pok?.data}
                  index={idx}
                />
              );
            })
          ) : (
            <Fragment>
              {pokemon.map((pok, idx) => (
                <CardPokemon
                  key={`${idx} - ${pok?.data?.id}`}
                  pokemon={pok}
                  index={idx}
                  className="sm:col-span-2 sm:justify-self-center sm:w-1/2 lg:col-start-2 lg:col-span-1 lg:w-full xl:col-span-4 xl:justify-self-center xl:w-1/4"
                />
              ))}
            </Fragment>
          )
        ) : null}
      </div>

      <div
        className={`flex gap-5 justify-center md:justify-end mb-0 md:mb-20 ${
          isError || searchPokemon.length > 0 ? "hidden" : ""
        }`}
      >
        <MakeBtn
          className={`${
            currentPage <= 0 ? "cursor-not-allowed " : "cursor-pointer"
          }`}
          disabled={currentPage <= 0 ? true : false}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            scrollingBtn("#cardPokemon");
          }}
          title="Prev"
        >
          {currentPage <= 0 ? (
            <Disabled className="group-hover:stroke-2 transition-all duration-150 ease-in-out group-hover:w-7 group-hover:h-7" />
          ) : (
            <ArrowLongLeft />
          )}
        </MakeBtn>

        <h1
          style={{
            textRendering: "optimizeLegibility",
            textShadow: "-1px -1px 1px #111, 2px 2px 1px #363636",
          }}
          className="uppercase text-[#e0dfdc] text-4xl font-sans font-medium drop-shadow-md shadow-slate-700 "
        >
          {currentPage + 1}
        </h1>

        <MakeBtn
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            scrollingBtn("#cardPokemon");
          }}
          title="Next"
        >
          <ArrowLongRight />
        </MakeBtn>
      </div>
    </Fragment>
  );
};

export default ContentCard;
