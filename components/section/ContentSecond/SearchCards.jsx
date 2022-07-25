import React, { useContext } from "react";
import Search from "../../../icon/Search";
import { StateContext } from "../../../pages";

const SearchCards = () => {
  const { searchPokemon, setSearchPokemon } = useContext(StateContext);

  return (
    <label className="relative block w-1/2 overflow-hidden">
      <button
        className="bg-red-400 absolute inset-y-0 right-0 flex 
        items-center p-3 overflow-hidden rounded-tr-md rounded-br-md"
      >
        <Search className="h-5 w-5" />
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
