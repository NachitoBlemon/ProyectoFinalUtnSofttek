import React, { useContext } from "react";
import pokemonContext from "../../context/pokemonContext";
import { Container, TitleName, Text } from "./styles/Dashboard.Styled";

const DashboardNameType = () => {
  const { data } = useContext(pokemonContext);
  const nombre = `${data.name}`.toUpperCase();
  const id = data.id;
  const weight = data.weight;

  //   .join(", ")

  const typePokemon = data.types
    .map((type) => type.type.name)
    .join(" - ")
    .toUpperCase();

  return (
    <>
      <Container >
        <TitleName>{nombre}</TitleName>
        <Text>ID: {id}</Text>
        <Text>WEIGHT: {weight} KG.</Text>
        <Text>TYPE: {typePokemon}</Text>
      </Container>
    </>
  );
};

export default DashboardNameType;
