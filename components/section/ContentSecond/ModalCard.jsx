import React, { useContext } from "react";
import { DataContext, ThemeCards } from "../../../pages";
import { GoPrimitiveDot } from "react-icons/go";
import Button from "../../button/Button";
import Paragraf from "../../text/Paragraf";
import SubTitle from "../../text/SubTitle";
import Image from "next/image";
import Close from "../../../icon/Close";

const ModalCard = ({ className }) => {
  const addClass = className ? className : "";

  const { setIsOpen } = useContext(ThemeCards);
  const { dataPokemon, color } = useContext(DataContext);

  const speed = dataPokemon.stats[0].base_stat;
  const specialDefense = dataPokemon?.stats[0]?.base_stat * 2;
  const specialAttack = dataPokemon?.stats
    .map((base) => base.base_stat)
    .reduce((acc, arr) => acc + arr);
  const defense = dataPokemon.weight + dataPokemon.height;
  const attack =
    dataPokemon?.base_experience / 2 + dataPokemon?.stats[0]?.base_stat;

  const detailsPokemons = [
    { agility: "Speed", value: speed },
    { agility: "Special Defense", value: specialDefense },
    { agility: "Special Attack", value: Math.floor(specialAttack / 3 - 50) },
    { agility: "Defense", value: Math.floor(defense / 4) },
    { agility: "Attack", value: Math.floor(attack) },
  ];

  const name = dataPokemon?.name[0]?.toUpperCase() + dataPokemon?.name.slice(1);
  const slash = dataPokemon?.types !== undefined && dataPokemon?.types.length;

  const typeOne = dataPokemon?.types[0]?.type?.name;
  const typeTwo = slash >= 2 && dataPokemon?.types[1]?.type?.name;

  const ability = dataPokemon?.abilities[0]?.ability?.name.toUpperCase();

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-black/50 
    transition duration-300 ease-in-out ${addClass}`}
    >
      <div
        style={{
          boxShadow: "0px 0px 40px 0px rgba(0,0,0,0.25) inset",
          WebkitBoxShadow: "0px 0px 40px 0px rgba(0,0,0,0.25) inset",
          MozBoxShadow: "0px 0px 40px 0px rgba(0,0,0,0.25) inset",
        }}
        className={`fixed z-50 w-4/5 bg-white/80 mx-auto left-0 
        right-0 top-1/2 -translate-y-1/2 rounded-lg py-8 px-20 gap-14
        shadow-slate-600/50 grid grid-cols-2 items-center`}
      >
        <div
          className="bg-white/80 w-full rounded-xl relative 
          shadow-lg"
        >
          <div
            className="bg-white rounded-full h-16 w-16 absolute -right-3
            -top-5 shadow-md flex items-center justify-center p-4"
          >
            <SubTitle className="text-base">{dataPokemon?.weight}Kg</SubTitle>
          </div>

          <article className="text-center py-8">
            <div className="mx-auto w-1/4">
              <Image
                src={`${
                  dataPokemon?.sprites?.other?.dream_world?.front_default !==
                  undefined
                    ? dataPokemon?.sprites?.other?.dream_world?.front_default
                    : "https://source.unsplash.com/400x350?notfound"
                }`}
                alt={dataPokemon?.name}
                width="100%"
                height="100%"
                layout="responsive"
                priority
              />
            </div>

            <SubTitle className="text-2xl">{name}</SubTitle>
            <div className="flex justify-center gap-3">
              <Paragraf>{typeOne}</Paragraf>
              {slash >= 2 && <span>/</span>}
              {slash >= 2 && <Paragraf>{typeTwo}</Paragraf>}
            </div>

            <div className="flex justify-center items-center gap-2">
              <SubTitle className="text-lg text-red-800">Fighting </SubTitle>
              <GoPrimitiveDot size="15px" className="text-slate-500/75" />
              <SubTitle
                className="text-lg"
                style={{ color: `${color === "" ? "rgb(0, 0, 0)" : color}` }}
              >
                {ability}
              </SubTitle>
            </div>
            <p>Skill test</p>
          </article>

          <div
            className="bg-white rounded-full h-16 w-16 absolute -left-3
            -top-5 shadow-md flex items-center justify-center p-4"
          >
            <Paragraf className="text-base font-semibold tracking-wide">
              {dataPokemon?.height}m
            </Paragraf>
          </div>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          className="absolute -right-4 -top-4 rounded-full bg-white 
          w-12 h-12 flex justify-center items-center shadow-md"
        >
          <Close
            className="w-8 h-8 fill-pink-700/80 stroke-2 transition 
            duration-100 ease-in hover:fill-red-700 hover:drop-shadow-lg 
            hover:shadow-pink-600"
          />
        </Button>

        <div className="flex gap-10 w-full">
          <article className="text-right space-y-3 w-4/5">
            {detailsPokemons.map((poke, idx) => {
              return <SubTitle key={idx}>{poke.agility}</SubTitle>;
            })}
          </article>
          <div className="flex gap-8 w-full">
            <div className="space-y-3">
              {detailsPokemons.map((poke, idx) => {
                return <Paragraf key={idx}>{poke.value}</Paragraf>;
              })}
            </div>

            <div className="w-full flex flex-col gap-5 items-center justify-center">
              {detailsPokemons.map((poke, idx) => (
                <div
                  key={idx}
                  className="bg-black w-full h-4 rounded-md overflow-hidden"
                >
                  <div
                    style={{ width: `${poke.value}px` }}
                    className="bg-red-600 h-4"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
