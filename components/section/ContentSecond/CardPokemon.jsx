import Image from "next/image";
import React from "react";
import Paragraf from "../../text/Paragraf";
import DetailsCard from "./DetailsCard";
import { motion } from "framer-motion";

const container = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      damping: 15,
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },

  hidden: {
    opacity: 0,
  },

  out: {
    opacity: 0,
  },
};

const items = {
  show: {
    y: 0,
    transition: {
      ease: "linear",
      duration: 0.5,
    },
  },

  hidden: {
    y: "-40%",
  },

  out: { y: "-40%" },
};

const CardPokemon = ({ pokemon }) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const startDust = pokemon.game_indices
    .map((data) => data.game_index)
    .reduce((acc, arr) => acc + arr);

  const candy = pokemon.stats
    .map((base) => base.base_stat)
    .reduce((acc, arr) => acc + arr);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="out"
      className="bg-white relative rounded-md p-8 shadow-lg"
      key={pokemon.name}
    >
      <motion.div
        variants={items}
        className={`absolute left-0 right-0 -top-20 mx-auto w-2/5 sm:w-1/2`}
      >
        <Image
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={pokemon?.name}
          width="100%"
          height="100%"
          layout="responsive"
          placeholder={pokemon?.name}
          priority
        />
      </motion.div>

      <div
        className="flex flex-col gap-6 items-center mt-24 
        sm:mt-20 md:mt-28 lg:mt-24 xl:mt-20 2xl:mt-28"
      >
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
    </motion.div>
  );
};

export default CardPokemon;
