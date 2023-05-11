import Image from "next/image";
import React from "react";
import Paragraf from "../../text/Paragraf";
import DetailsCard from "./DetailsCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const CardPokemon = ({ pokemon, index = 0 }) => {
  const {
    ref: card,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    rootMargin: "300px",
    triggerOnce: true,
  });

  const name =
    (pokemon &&
      pokemon.name &&
      pokemon.name[0]?.toUpperCase() + pokemon?.name?.slice(1)) ||
    pokemon?.name;

  const startDust =
    pokemon && pokemon.game_indices
      ? pokemon.game_indices
          .map((data) => data?.game_index)
          .reduce((acc, arr) => acc + arr, 0)
      : 0;

  const candy =
    pokemon && pokemon.stats
      ? pokemon.stats
          .map((base) => base?.base_stat)
          .reduce((acc, arr) => acc + arr, 0)
      : 0;

  const image =
    pokemon?.sprites?.other?.dream_world?.front_default ||
    pokemon?.sprites?.other?.dream_world?.back_default;

  return (
    <motion.div
      style={{
        transitionDuration: "0.5s",
        transitionDelay: `${0.1 * index}s`,
      }}
      ref={card}
      variants={container}
      initial="hidden"
      animate="show"
      exit="out"
      className={`bg-white  rounded-md p-8 shadow-lg transition ease-in-out  ${
        inView ? "translate-y-0 !opacity-100" : "translate-y-full !opacity-0"
      }`}
      key={
        pokemon?.name
          ? pokemon?.name
          : `${pokemon?.data?.id}-${pokemon?.name}-${index}`
      }
    >
      <motion.div
        variants={items}
        className={`absolute left-0 right-0 -top-20 mx-auto w-2/5 sm:w-1/2`}
      >
        {image && (
          <Image
            src={image}
            alt={pokemon?.name}
            width="100%"
            height="100%"
            layout="responsive"
            placeholder={pokemon?.name}
            priority
          />
        )}
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
            HP{" "}
            {pokemon &&
              pokemon.stats &&
              pokemon.stats[0] &&
              pokemon.stats[1] &&
              `${pokemon.stats[0].base_stat}/${pokemon.stats[1].base_stat}`}
          </Paragraf>
          <span
            className="inline-block border-t border-t-black w-6 h-3
            rotate-90 origin-top"
          ></span>
          <Paragraf className="tracking-wide">
            Xp {(pokemon && pokemon?.base_experience) || 0}
          </Paragraf>
        </div>
      </div>

      <DetailsCard name={pokemon ? pokemon.name : ""} />

      <div className="w-full text-center space-y-4">
        <div className="flex justify-between">
          <div>
            <Paragraf className="font-medium text-slate-500">
              {pokemon &&
                pokemon.types &&
                pokemon.types[0] &&
                pokemon.types[0].type &&
                pokemon.types[0].type.name}

              {pokemon && pokemon.types && pokemon.types.length > 1 && (
                <span> / </span>
              )}
              {pokemon &&
                pokemon.types &&
                pokemon.types.length > 1 &&
                pokemon.types[1].type.name}
            </Paragraf>
            <span className="text-sm">Type</span>
          </div>

          <div>
            <Paragraf className="font-medium text-slate-500">
              {pokemon ? pokemon?.weight : "0"}kg
            </Paragraf>
            <span>Weight</span>
          </div>

          <div>
            <Paragraf className="font-medium text-slate-500">
              {pokemon ? pokemon?.height : "0"}m
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
