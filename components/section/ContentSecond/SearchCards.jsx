import React, { useContext } from "react";
import Search from "../../../icon/Search";
import SearchBold from "../../../icon/SearchBold";
import { StateContext } from "../../../pages";

const SearchCards = ({ className }) => {
  const addClass = className ? className : "";
  const { searchPokemon, setSearchPokemon } = useContext(StateContext);

  return (
    <label
      className={`relative block w-3/4 md:w-1/2 overflow-hidden ${addClass}`}
    >
      <button
        className="bg- absolute inset-y-0 right-0 flex bg-green-500/70
        items-center p-3 overflow-hidden rounded-tr-md rounded-br-md"
      >
        {/* <Search className="h-5 w-5 stroke-white stroke-2" /> */}
        <SearchBold
          className="h-5 w-5 stroke-white fill-white 
          stroke-1 "
        />
      </button>

      <input
        className="placeholder:italic placeholder:text-slate-400 block 
       bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm 
       focus:outline-none focus:border-sky-500 focus:ring-sky-500 
       focus:ring-inset sm:text-sm rounded-md w-full"
        placeholder="Search for anything..."
        type="text"
        name="search"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
      />
    </label>
  );
};

export default SearchCards;
