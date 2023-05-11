import React, { Fragment, useContext, useState } from "react";
import { useQuery } from "react-query";
import CardPokemon from "./CardPokemon";
import { ImSpinner9 } from "react-icons/im";
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
      staleTime: 2000,
    }
  );

  return (
    <Fragment>
      <div className="flex justify-between my-8">
        {isLoading && <div className="text-2xl font-semibold">Loading...</div>}
        {isFetching && (
          <ImSpinner9 size="40px" className="animate-spin text-cyan-600" />
        )}
      </div>

      {isError && <ErrorCustom error={error} />}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-x-7 gap-y-28 mt-40"
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
            <>
              {pokemon.map((pok, idx) => (
                <CardPokemon
                  key={`${idx} - ${pok?.data?.id}`}
                  pokemon={pok}
                  index={idx}
                />
              ))}
            </>
          )
        ) : null}
      </div>

      <div
        className={`flex gap-5 justify-center  md-justify-end my-10 ${
          isError ? "hidden" : ""
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
