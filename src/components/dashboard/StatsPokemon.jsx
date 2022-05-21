import React, { useContext } from "react";
import pokemonContext from "../../context/pokemonContext";
import { ContainerStats, Text, TitleStats } from "./styles/Dashboard.Styled";

const StatsPokemon = () => {
  const { data } = useContext(pokemonContext);

  const hpStats = `${data.stats[0].stat.name.toUpperCase()}: ${
    data.stats[0].base_stat
  }`;
  const attackStats = `${data.stats[1].stat.name.toUpperCase()}: ${
    data.stats[1].base_stat
  }`;
  const defenseStats = `${data.stats[2].stat.name.toUpperCase()}: ${
    data.stats[2].base_stat
  }`;
  const specialAttackStats = `${data.stats[3].stat.name.toUpperCase()}: ${
    data.stats[3].base_stat
  }`;
  const specialDefenseStats = `${data.stats[4].stat.name.toUpperCase()}: ${
    data.stats[4].base_stat
  }`;
  const speedStats = `${data.stats[5].stat.name.toUpperCase()}: ${
    data.stats[5].base_stat
  }`;

  const hpBar = `${data.stats[0].base_stat}`;
  const attackBar = `${data.stats[1].base_stat}`;
  const defenseBar = `${data.stats[2].base_stat}`;
  const specialAttackBar = `${data.stats[3].base_stat}`;
  const specialDefenseBar = `${data.stats[4].base_stat}`;
  const speedBar = `${data.stats[5].base_stat}`;

  return (
    <ContainerStats >
      <TitleStats>STATS</TitleStats>
      <div>
        <Text>{hpStats}</Text>
        <div
          className="progress"
          style={{ background: "none", marginBottom: "1em", }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${hpBar}%`, borderRadius: "1em", width: "50%"}}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="300"
          >
            {hpStats}
          </div>
        </div>
      </div>
      <div>
        <Text>{attackStats}</Text>
        <div
          className="progress"
          style={{ background: "none", marginBottom: "1em" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${attackBar}%`, borderRadius: "1em" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="300"
          >
            {attackStats}
          </div>
        </div>
      </div>

      <div>
        <Text>{defenseStats}</Text>
        <div
          className="progress"
          style={{ background: "none", marginBottom: "1em" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${defenseBar}%`, borderRadius: "1em" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="300"
          >
            {defenseStats}
          </div>
        </div>
      </div>

      <div>
        <Text>{specialAttackStats}</Text>
        <div
          className="progress"
          style={{ background: "none", marginBottom: "1em" }}
        >
          {" "}
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${specialAttackBar}%`, borderRadius: "1em" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="300"
          >
            {specialAttackStats}
          </div>
        </div>
      </div>

      <div>
        <Text>{specialDefenseStats}</Text>
        <div
          className="progress"
          style={{ background: "none", marginBottom: "1em" }}
        >
          {" "}
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${specialDefenseBar}%`, borderRadius: "1em" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="300"
          >
            {specialDefenseStats}
          </div>
        </div>
      </div>

      <div>
        <Text>{speedStats}</Text>
        <div
          className="progress"
          style={{ background: "none", marginBottom: "1em" }}
        >
          {" "}
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${speedBar}%`, borderRadius: "1em" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="300"
          >
            {speedStats}
          </div>
        </div>
      </div>
    </ContainerStats>
  );
};

export default StatsPokemon;
