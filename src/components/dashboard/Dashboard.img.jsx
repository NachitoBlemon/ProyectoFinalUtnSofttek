import React, { useContext } from "react";
import pokemonContext from "../../context/pokemonContext";
import { CircleImgGlassContainer } from "./styles/Dashboard.Styled";

const Dashboardimg = () => {
  const { data } = useContext(pokemonContext);
  return (
    <CircleImgGlassContainer>
      <div>
      <img src={data.sprites.other.home.front_default} className="img-fluid" alt={data.name} />
      </div>
    </CircleImgGlassContainer>
  );
};

export default Dashboardimg;
