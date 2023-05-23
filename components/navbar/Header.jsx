import React from "react";
import Search from "../../icon/Search";
import Container from "../Content/Container";
import Image from "next/image";
import DotGrid from "../../icon/DotGrid";

const Header = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <header className={`${addClass}`}>
      <Container>
        <nav className="flex justify-between">
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

            <DotGrid className="w-[35px] h-[35px] stroke-white" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
