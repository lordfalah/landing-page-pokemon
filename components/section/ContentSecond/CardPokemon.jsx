import Image from "next/image";
import React from "react";
import Paragraf from "../../text/Paragraf";
import DetailsCard from "./DetailsCard";

const CardPokemon = ({ pokemon }) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const startDust = pokemon.game_indices
    .map((data) => data.game_index)
    .reduce((acc, arr) => acc + arr);

  const candy = pokemon.stats
    .map((base) => base.base_stat)
    .reduce((acc, arr) => acc + arr);

  return (
    <div
      className="bg-white relative rounded-md p-8 shadow-lg"
      key={pokemon.name}
    >
      <div className="absolute left-0 right-0 -top-20 w-1/2 mx-auto">
        <Image
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={pokemon?.name}
          width="100%"
          height="100%"
          layout="responsive"
          priority
        />
      </div>

      <div className="flex flex-col gap-6 items-center mt-28">
        <h2 className="text-xl">{name}</h2>
        <span
          className="block w-4/5 h-3 rounded-full
      bg-green-400/60"
        ></span>
        <div className="flex items-end gap-3">
          <Paragraf>
            HP {pokemon.stats[0].base_stat}/{pokemon.stats[1].base_stat}
          </Paragraf>
          <span
            className="inline-block border-t border-t-black w-6 h-3
            rotate-90 origin-top"
          ></span>
          <Paragraf className="tracking-wide">
            Xp {pokemon.base_experience}
          </Paragraf>
        </div>
      </div>

      <DetailsCard name={pokemon.name} />

      <div className="w-full text-center space-y-4">
        <div className="flex justify-between">
          <div>
            <Paragraf className="font-medium text-slate-500">
              {pokemon.types[0].type.name}
              {pokemon.types.length > 1 && <span> / </span>}
              {pokemon.types.length > 1 && pokemon.types[1].type.name}
            </Paragraf>
            <span className="text-sm">Type</span>
          </div>

          <div>
            <Paragraf className="font-medium text-slate-500">
              {pokemon.weight}kg
            </Paragraf>
            <span>Weight</span>
          </div>

          <div>
            <Paragraf className="font-medium text-slate-500">
              {pokemon.height}m
            </Paragraf>
            <span className="text-sm">Height</span>
          </div>
        </div>

        <span
          className="block w-full border border-slate-200
        rounded-full"
        ></span>

        <div className="flex justify-around">
          <div>
            <Paragraf className="font-medium text-slate-500">
              {startDust}
            </Paragraf>
            <span className="text-sm">Stardust</span>
          </div>

          <div>
            <Paragraf className="font-medium text-slate-500">{candy}</Paragraf>
            <span className="text-sm">{name} Candy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;
