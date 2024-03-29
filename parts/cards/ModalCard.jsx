import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubTitle from "../../components/text/SubTitle";
import Image from "next/image";
import Paragraf from "../../components/text/Paragraf";
import Button from "../../components/button/Button";
import Close from "../../icon/Close";
import { ModalContext } from "../../context/ModalProvider";
import ImgLoad from "../../icon/ImgLoad";

const ModalCard = ({ className }) => {
  const { setIsOpen, dataPokemon, color } = useContext(ModalContext);
  const { ref: resize, entry } = useInView();

  const width = entry?.boundingClientRect?.width;
  const logic = width >= 640 ? 50 : 10;
  const addClass = className || "";

  const speed = dataPokemon.stats[0].base_stat;
  const specialDefense = dataPokemon?.stats[0]?.base_stat * 2;
  const specialAttack = dataPokemon?.stats.reduce(
    (acc, base) => acc + base.base_stat,
    0
  );
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

  const name =
    dataPokemon?.name?.[0]?.toUpperCase() + dataPokemon?.name?.slice(1);
  const slash = dataPokemon?.types?.length >= 2;

  const typeOne = dataPokemon?.types?.[0]?.type?.name;
  const typeTwo = slash && dataPokemon?.types?.[1]?.type?.name;

  const image =
    dataPokemon?.sprites?.other?.dream_world?.front_default ||
    dataPokemon?.sprites?.other?.dream_world?.back_default ||
    false;
  const ability = dataPokemon?.abilities?.[0]?.ability?.name?.toUpperCase();

  const parentModal = {
    show: {
      y: 0,
      transition: {
        ease: "linear",
        when: "beforeChildren",
        type: "spring",
        stiffness: 300,
      },
    },
    hidden: {
      y: "-100%",
    },

    out: {
      x: "-100%",
      transition: {
        duration: 0.8,
      },
    },
  };

  const childModal = {
    show: {
      opacity: 1,
      y: "-50%",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: "100%",
    },

    out: {
      y: "100%",
      transition: {
        duration: 1,
      },
    },
  };

  const bgColorIdx = {
    0: "bg-yellow-500",
    1: "bg-orange-500/80",
    2: "bg-green-600",
    3: "bg-orange-500/80",
    4: "bg-yellow-500",
  };

  return (
    <motion.div
      variants={parentModal}
      key="Modal"
      initial="hidden"
      animate="show"
      exit="out"
      className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-black/50 ${addClass}`}
    >
      <motion.div
        variants={childModal}
        ref={resize}
        style={{
          boxShadow: "0px 0px 25px 12px rgba(0,0,0,0.3) inset",
          WebkitBoxShadow: "0px 0px 25px 12px rgba(0,0,0,0.3) inset",
        }}
        className={`relative z-50 bg-white/80 left-0 w-11/12 right-0 top-1/2 -translate-y-1/2 rounded-lg pt-8 pb-6 sm:py-10 lg:py-12 lg:px-10 xl:px-20 gap-10 lg:gap-14 shadow-slate-600/50 grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto`}
      >
        <div className="bg-white/80 w-4/5 sm:w-2/3 md:w-1/2 lg:w-full rounded-xl relative shadow-lg mx-auto">
          <div className="bg-white rounded-full h-14 w-14 sm:h-16 sm:w-16 absolute sm:-right-3 sm:-top-5 shadow-md flex items-center -bottom-5 -right-2 justify-center p-4">
            <SubTitle className="text-sm sm:text-base">
              {dataPokemon?.weight}Kg
            </SubTitle>
          </div>

          <article className="text-center py-5 sm:py-8 space-y-4">
            <div className="mx-auto w-2/6 xl:w-1/4">
              {image ? (
                <Image
                  src={image}
                  alt={dataPokemon?.name}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  priority
                />
              ) : (
                <ImgLoad className={`w-32 h-32 animate-pulse mx-auto`} />
              )}
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

            <div>
              <div className="flex justify-center items-center gap-2">
                <SubTitle className="text-lg text-red-800">Fighting</SubTitle>
                <div className="w-2 h-2 bg-slate-500/75 rounded-full"></div>
                <SubTitle
                  className="text-lg"
                  style={{
                    color: `${color === "" ? "rgb(0, 0, 0)" : color}`,
                  }}
                >
                  {ability}
                </SubTitle>
              </div>
              <Paragraf>Skill test</Paragraf>
            </div>
          </article>

          <div className="bg-white rounded-full h-14 w-14 sm:h-16 sm:w-16 absolute -left-3 -top-5 shadow-md flex items-center justify-center p-4">
            <Paragraf className="text-base font-semibold tracking-wide">
              {dataPokemon?.height}m
            </Paragraf>
          </div>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          className="absolute -top-6 right-1/2 translate-x-1/2 sm:-top-4 sm:right-3 rounded-full bg-white w-12 h-12 flex justify-center items-center shadow-md"
        >
          <Close className="w-8 h-8 fill-pink-700/80 stroke-2 transition duration-100 ease-in hover:fill-red-700 hover:drop-shadow-lg hover:shadow-pink-600" />
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
                <SubTitle className="col-span-2 text-left sm:text-right justify-items-end text-black/50">
                  {poke.agility}
                </SubTitle>
                <Paragraf className="col-span-1 text-left sm:text-center text-black/60 font-medium">
                  {poke.value}
                </Paragraf>
                <div className="bg-black/20 shadow-inner w-full h-3 md:h-4 rounded-md overflow-hidden col-span-3">
                  <div
                    style={{
                      width: `${
                        percentage
                          ? percentage.toString() + "%"
                          : poke.value.toString() + "px"
                      }`,
                    }}
                    className={`${bgColorIdx[idx]} h-3 md:h-4`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalCard;
