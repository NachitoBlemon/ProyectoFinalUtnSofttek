import React from "react";
import { useFetchTypePokemon } from "../../hooks/useFetchTypePokemon";
import { Container, Text } from "./styles/Dashboard.Styled";

const StrengthsAndWeaknesses = () => {
  const { damage_relations } = useFetchTypePokemon();

  const doubleDamageFrom = damage_relations?.double_damage_from
    .map((e) => e.name)
    .join(", ");

  const doubleDamageTo = damage_relations?.double_damage_to
    .map((e) => e.name)
    .join(", ");

  const halfDamageFrom = damage_relations?.half_damage_from
    .map((e) => e.name)
    .join(", ");

  const halfDamageTo = damage_relations?.half_damage_to
    .map((e) => e.name)
    .join(", ");
  return (
    <>
      <Container>
        <Text>Strengths: {doubleDamageTo}</Text>
        <Text>Weakness: {halfDamageTo}</Text>
        <Text>Resistant: {halfDamageFrom}</Text>
        <Text>Vulnerable: {doubleDamageFrom}</Text>
      </Container>
    </>
  );
};

export default StrengthsAndWeaknesses;
