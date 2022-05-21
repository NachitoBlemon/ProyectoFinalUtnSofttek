import { useEffect, useState, useContext } from "react";
import pokemonContext from "../context/pokemonContext";

export const useFetchTypePokemon = () => {
  const { data } = useContext(pokemonContext);

  const [typePokemon, setTypePokemon] = useState({});

  /* TYPE*/
  const url = data.types[0].type.url;

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((datas) => setTypePokemon(datas));
  }, [data]);

  return typePokemon;

  /* END TYPE*/
};
