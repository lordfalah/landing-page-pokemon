import React, { useContext } from "react";
import { DataContext, ThemeCards } from "../../../pages";
import { GoPrimitiveDot } from "react-icons/go";
import Button from "../../button/Button";
import Paragraf from "../../text/Paragraf";
import SubTitle from "../../text/SubTitle";
import Image from "next/image";
import Close from "../../../icon/Close";
import resizeWindow from "../../../hooks/rezizeWindow";
import Container from "../../Content/Container";

const ModalCard = ({ className }) => {
  const { width } = resizeWindow();
  const logic = width >= 640 ? 50 : 10;
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
      className={`fixed top-0 bottom-0 left-0 right-0 z-30 
      bg-black/50 transition duration-300 ease-in-out ${addClass}`}
    >
      <Container
        style={{
          boxShadow: "0px 0px 40px 0px rgba(0,0,0,0.25) inset",
          WebkitBoxShadow: "0px 0px 40px 0px rgba(0,0,0,0.25) inset",
          MozBoxShadow: "0px 0px 40px 0px rgba(0,0,0,0.25) inset",
        }}
        className={`relative z-50 bg-white/80 left-0 w-11/12
        right-0 top-1/2 -translate-y-1/2 rounded-lg py-10
        lg:py-12 lg:px-10 xl:px-20 gap-10 lg:gap-14 shadow-slate-600/50 
        grid grid-cols-1 lg:grid-cols-2 items-center`}
      >
        <div
          className="bg-white/80 w-4/5 sm:w-2/3 md:w-1/2 lg:w-full rounded-xl 
          relative shadow-lg mx-auto"
        >
          <div
            className="bg-white rounded-full h-14 w-14 sm:h-16 sm:w-16 
            absolute sm:-right-3 sm:-top-5 shadow-md flex items-center 
            -bottom-5 -right-2 justify-center p-4"
          >
            <SubTitle className="text-sm sm:text-base">
              {dataPokemon?.weight}Kg
            </SubTitle>
          </div>

          <article className="text-center py-8 space-y-4">
            <div className="mx-auto w-2/6 xl:w-1/4">
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

            <div>
              <SubTitle className="text-2xl xl:text-3xl text-green-900/90">
                {name}
              </SubTitle>
              <div className="flex justify-center gap-3">
                <Paragraf>{typeOne}</Paragraf>
                {slash >= 2 && <span>/</span>}
                {slash >= 2 && <Paragraf>{typeTwo}</Paragraf>}
              </div>
            </div>

            <div className="">
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
              <Paragraf>Skill test</Paragraf>
            </div>
          </article>

          <div
            className="bg-white rounded-full h-14 w-14 sm:h-16 sm:w-16  
            absolute -left-3 -top-5 shadow-md flex items-center 
            justify-center p-4"
          >
            <Paragraf className="text-base font-semibold tracking-wide">
              {dataPokemon?.height}m
            </Paragraf>
          </div>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          className="absolute -top-6 right-1/2 translate-x-1/2
          sm:-top-4 sm:right-3 rounded-full bg-white
          w-12 h-12 flex justify-center items-center shadow-md"
        >
          <Close
            className="w-8 h-8 fill-pink-700/80 stroke-2 transition 
            duration-100 ease-in hover:fill-red-700 hover:drop-shadow-lg 
            hover:shadow-pink-600"
          />
        </Button>

        <div className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-full px-5">
          {detailsPokemons.map((poke, idx) => {
            const percentage =
              width !== undefined &&
              Math.ceil(((width / 100) * poke.value) / logic);

            return (
              <div
                key={idx}
                className="grid grid-cols-6 items-center my-3 gap-4 sm:gap-0"
              >
                <SubTitle
                  className="col-span-2 text-left sm:text-right 
                  justify-items-end text-black/50"
                >
                  {poke.agility}
                </SubTitle>
                <Paragraf
                  className="col-span-1 text-left sm:text-center
                  text-black/60 font-medium
                "
                >
                  {poke.value}
                </Paragraf>
                <div
                  className="bg-black/20 shadow-inner w-full h-3 md:h-4 rounded-md
                  overflow-hidden col-span-3"
                >
                  <div
                    style={{
                      width: `${
                        percentage
                          ? percentage.toString() + "%"
                          : poke.value.toString() + "px"
                      }`,
                    }}
                    className={`bg-red-600 h-3 md:h-4`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ModalCard;
