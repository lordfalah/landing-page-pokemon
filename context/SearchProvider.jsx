import React, { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchPokemon, setSearchPokemon] = useState("");

  return (
    <SearchContext.Provider value={{ searchPokemon, setSearchPokemon }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
