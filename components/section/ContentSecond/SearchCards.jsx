import React, { useContext } from "react";
import SearchBold from "../../../icon/SearchBold";
import { StateContext } from "../../../parts/pokeDex/CatchPokemon";

const SearchCards = ({ className }) => {
  const addClass = className ? className : "";
  const { searchPokemon, setSearchPokemon } = useContext(StateContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label
        className={`relative block w-3/4 md:w-1/2 overflow-hidden ${addClass}`}
      >
        <button
          type="submit"
          className="bg- absolute inset-y-0 right-0 flex bg-green-500/70
        items-center p-3 overflow-hidden rounded-tr-md rounded-br-md"
        >
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
          autoComplete="off"
          placeholder="Search by id or names"
          type="text"
          name="search"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchCards;
