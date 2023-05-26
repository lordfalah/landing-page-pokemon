import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import ImgLoad from "../../icon/ImgLoad";
import Paragraf from "../../components/text/Paragraf";
import DetailsCard from "./DetailsCard";

const CardPokemon = ({ pokemon, index = 0, className }) => {
  const addClass = className ? className : "";
  const transitionDelays = [
    "0.2s",
    "0.4s",
    "0.6s",
    "0.8s",
    "1s",
    "1.2s",
    "1.4s",
    "1.6s",
    "1.8s",
    "2s",
  ];
  const {
    ref: card,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    rootMargin: "300px",
    triggerOnce: false,
  });

  const name =
    (pokemon?.name &&
      `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`) ||
    pokemon?.name ||
    "";

  const startDust = (pokemon?.game_indices || [])
    .map((data) => data?.game_index || 0)
    .reduce((acc, arr) => acc + arr, 0);

  const candy = (pokemon?.stats || [])
    .map((base) => base?.base_stat || 0)
    .reduce((acc, arr) => acc + arr, 0);

  const image =
    pokemon?.sprites?.other?.dream_world?.front_default ||
    pokemon?.sprites?.other?.dream_world?.back_default ||
    false;
  return (
    <div
      style={{
        transitionDuration: "0.5s",
        transitionDelay: `${0.1 * index}s`,
      }}
      ref={card}
      className={`bg-white rounded-md p-8 shadow-lg transition ease-in-out ${addClass} sticky top-0 ${
        inView
          ? "translate-y-36 sm:translate-y-52 !opacity-100"
          : "translate-y-full !opacity-0 !delay-[0ms]"
      }`}
      key={
        pokemon?.name
          ? pokemon?.name
          : `${pokemon?.data?.id}-${pokemon?.name}-${index}`
      }
    >
      <div
        style={{
          transitionDelay: transitionDelays[index] || "0s",
        }}
        className={`absolute left-0 right-0 -top-20 mx-auto w-2/5 sm:w-1/2 transition ease-in-out duration-500  ${
          inView ? "translate-y-0" : "-translate-y-[40%] !delay-[0ms]"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={pokemon?.name}
            width="100%"
            height="100%"
            layout="responsive"
            placeholder={pokemon?.name}
            priority
          />
        ) : (
          <ImgLoad className={`w-32 h-32 animate-pulse mx-auto`} />
        )}
      </div>

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
    </div>
  );
};

export default CardPokemon;
