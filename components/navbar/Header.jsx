import React from "react";
import Search from "../../icon/Search";
import Container from "../Content/Container";
import { TbGridDots } from "react-icons/tb";
import Image from "next/image";

const Header = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <header className={`${addClass}`}>
      <Container>
        <nav className="px-5 sm:px-0 flex justify-between">
          <Image
            src="/img/pokemon.png"
            alt="pokemon text"
            width={200}
            height={100}
            layout="intrinsic"
            objectFit="contain"
            priority
          />

          <div className="flex items-center">
            <label className="hidden md:block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Search className="h-5 w-5" />
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block 
			bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm 
			focus:outline-none focus:border-sky-500 focus:ring-sky-500 
			focus:ring-1 sm:text-sm rounded-full w-5/6"
                placeholder="Search for anything..."
                autoComplete="off"
                type="text"
                name="search"
              />
            </label>

            <TbGridDots size="35px" className="text-white cursor-pointer" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
