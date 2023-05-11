import axios from "axios";
import api from "../api/api";

const renderPage = async (currentPage = 0, value = "") => {
  if (value.length === 0 || value === "") {
    let checkCurrentPage = currentPage < 0 ? 0 : currentPage;
    const response = await api.get(
      `pokemon?limit=10&offset=${checkCurrentPage * 10}`
    );
    const pokemon = await Promise.all(
      response?.data?.results?.map(async (poke) => await axios.get(poke?.url))
    );

    return pokemon;
  } else {
    const namePokemon = value.toLocaleLowerCase();
    const pokemon = await getPokemonId(namePokemon);
    return [pokemon];
  }
};

const getPokemonId = (id) =>
  api.get(`pokemon/${id}`).then((response) => response.data);

export { getPokemonId, renderPage };
