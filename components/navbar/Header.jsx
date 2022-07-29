import React from "react";
import Search from "../../icon/Search";
import Container from "../Content/Container";

const Header = ({ children }) => {
  return (
    <Container>
      <nav className="flex justify-between">
        <div>
          <img
            src="/img/pokemon.png"
            alt="pokemon text"
            width="200px"
            height="200px"
          />
        </div>

        <div className="flex items-center gap-5">
          <label className="relative hidden lg:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search className="h-5 w-5" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block 
               bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm 
               focus:outline-none focus:border-sky-500 focus:ring-sky-500 
               focus:ring-1 sm:text-sm rounded-full w-full"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>

          <div className="bg-black w-7 h-7"></div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
