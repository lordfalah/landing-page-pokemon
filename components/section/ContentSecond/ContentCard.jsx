import React, { Fragment, useContext } from "react";
import { useQuery } from "react-query";
import api from "../../../api/api";
import { StateContext } from "../../../pages";
import CardPokemon from "./CardPokemon";
import { ImSpinner9 } from "react-icons/im";
import ErrorCustom from "../../suspense/Error";

const ContentCard = () => {
  const { searchPokemon } = useContext(StateContext);
  const pokemonPromise = [];

  const getPokemonId = (id) =>
    api.get(`pokemon/${id}`).then((response) => response.data);

  for (let i = 1; i <= 20; i++) {
    pokemonPromise.push(getPokemonId(i));
  }

  const getPokemon = async (value) => {
    const nameOfValue = value.toLowerCase();

    if (nameOfValue.length === 0) {
      const response = await Promise.all(pokemonPromise);
      return response;
    } else {
      const response = await getPokemonId(nameOfValue);
      return response;
    }
  };

  const { data, isSuccess, error, isError, isFetching, isLoading } = useQuery(
    ["getPokemon", searchPokemon],
    () => getPokemon(searchPokemon),
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 2000,
    }
  );

  return (
    <Fragment>
      {isFetching && (
        <ImSpinner9 size="40px" className="animate-spin text-cyan-600" />
      )}

      {isLoading && <div className="text-2xl font-semibold">Loading...</div>}

      {isError && <ErrorCustom error={error} />}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-x-7 gap-y-28 mt-40"
      >
        {isSuccess &&
          searchPokemon.length === 0 &&
          data?.map((pokemon) => {
            return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
          })}

        {isSuccess && searchPokemon.length !== 0 && (
          <CardPokemon pokemon={data} />
        )}
      </div>
    </Fragment>
  );
};

export default ContentCard;
