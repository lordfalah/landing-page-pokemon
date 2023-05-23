import axios from "axios";
import api from "../api/api";

const renderPage = async (currentPage = 0, value = "") => {
  if (value.length === 0 || value === "") {
    const checkCurrentPage = Math.max(currentPage, 0);
    const response = await api.get(
      `pokemon?limit=10&offset=${checkCurrentPage * 10}`
    );
    const pokemonUrls = response?.data?.results?.map((poke) => poke?.url);
    const pokemon = await Promise.all(pokemonUrls.map((url) => axios.get(url)));

    return pokemon;
  } else {
    const namePokemon = value.toLowerCase();
    const pokemon = await getPokemonById(namePokemon);
    return [pokemon];
  }
};

const getPokemonById = async (id) => {
  const response = await api.get(`pokemon/${id}`);
  return response.data;
};

export { getPokemonById, renderPage };
