import React, { Fragment, useContext } from "react";
import { useQuery } from "react-query";
import api from "../../../api/api";
import { StateContext } from "../../../pages";
import CardPokemon from "./CardPokemon";
import { ImSpinner9 } from "react-icons/im";

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
    let response;

    if (nameOfValue.length === 0) {
      response = await Promise.all(pokemonPromise);
      return response;
    } else {
      response = await getPokemonId(nameOfValue);
      console.log(nameOfValue);
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

      <div className="grid grid-cols-4 gap-x-7 gap-y-28">
        {isSuccess &&
          searchPokemon.length === 0 &&
          data?.map((pokemon) => {
            return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
          })}

        {isSuccess && searchPokemon.length !== 0 && (
          <CardPokemon pokemon={data} />
        )}

        {isLoading && <div className="text-2xl font-semibold">Loading...</div>}
      </div>
    </Fragment>
  );
};

export default ContentCard;
