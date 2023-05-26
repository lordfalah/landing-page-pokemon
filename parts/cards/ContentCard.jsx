import React, { Fragment, useContext, useState } from "react";
import { useQuery } from "react-query";
import ErrorCustom from "../../components/suspense/Error";
import ArrowLongRight from "../../icon/ArrowLongRight";
import ArrowLongLeft from "../../icon/ArrowLongLeft";
import Disabled from "../../icon/Disabled";
import Loading from "../../components/suspense/Loading";
import SkeletonCard from "../../components/Content/SkeletonCard";
import BtnPokemon from "../../components/button/BtnPokemon";
import CardPokemon from "./CardPokemon";
import { scrollingBtn } from "../../helpers/utils";
import { renderPage } from "../../helpers/utils/fetchApi.js";
import { SearchContext } from "../../context/SearchProvider";

const ContentCard = () => {
  const { searchPokemon } = useContext(SearchContext);
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
      {isFetching || isLoading ? <Loading /> : null}
      {isError && <ErrorCustom error={error} />}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center  
        xl:grid-cols-4 gap-x-7 gap-y-28 transition-all duration-150 ease-in-out mb-52 sm:mb-72"
      >
        {isSuccess && !isError ? (
          searchPokemon.length === 0 ||
          (searchPokemon === "" && pokemon.length > 0) ? (
            isFetching ? (
              pokemon.map((pok, idx) => (
                <SkeletonCard
                  key={idx}
                  pok={pok}
                  className={idx === 9 ? "mb-12" : "mb-0"}
                />
              ))
            ) : (
              pokemon?.map((pok, idx) => {
                return (
                  <CardPokemon
                    key={`${idx} - ${pok?.data?.id}`}
                    pokemon={pok?.data}
                    index={idx}
                  />
                );
              })
            )
          ) : (
            <Fragment>
              {isFetching
                ? pokemon.map((pok, idx) => (
                    <SkeletonCard
                      key={idx}
                      pok={pok}
                      className="sm:col-span-2 sm:justify-self-center sm:w-1/2 lg:col-start-2 lg:col-span-1 lg:w-full xl:col-span-4 xl:justify-self-center xl:w-1/4"
                    />
                  ))
                : pokemon.map((pok, idx) => (
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
        <BtnPokemon
          className={`${
            currentPage <= 0 ? "cursor-not-allowed" : "cursor-pointer"
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
        </BtnPokemon>

        <h1
          style={{
            textRendering: "optimizeLegibility",
            textShadow: "-1px -1px 1px #111, 2px 2px 1px #363636",
          }}
          className="uppercase text-[#e0dfdc] text-4xl font-sans font-medium drop-shadow-md shadow-slate-700 "
        >
          {currentPage + 1}
        </h1>

        <BtnPokemon
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            scrollingBtn("#cardPokemon");
          }}
          title="Next"
        >
          <ArrowLongRight />
        </BtnPokemon>
      </div>
    </Fragment>
  );
};

export default ContentCard;
