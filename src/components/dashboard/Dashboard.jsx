import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import StatsPokemon from "./StatsPokemon";
import pokemonContext from "../../context/pokemonContext";
import StrengthsAndWeaknesses from "./StrengthsAndWeaknesses";
import DashboardNameType from "./Dashboard.NameType";
import Dashboardimg from "./Dashboard.img";


import {
  ContainerImgDashboard,
  ContainerNameDashboard,
  ContainerWeaknessDashboard,
  MainContainerDashboard,
  ButtonContainerDashboard,
  ContainerStatsDashboard,
} from "./styles/Dashboard.Styled";

const Dashboard = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}/`
  );

  return (
    <pokemonContext.Provider
      value={{ counter, increment, decrement, loading, data }}
    >
      <div>
        <div>
          {loading ? (
            <div></div>
          ) : (
            <MainContainerDashboard>
              <div>
                <ContainerNameDashboard>
                  <DashboardNameType />
                </ContainerNameDashboard>

                <ContainerWeaknessDashboard>
                  <StrengthsAndWeaknesses />
                </ContainerWeaknessDashboard>
              </div>

              <div>
                <ContainerImgDashboard>
                  <Dashboardimg />

                  <ButtonContainerDashboard>
                    <button
                      className="btn btn-light btn-lg"
                      onClick={decrement}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-light btn-lg"
                      onClick={increment}
                    >
                      Next
                    </button>
                  </ButtonContainerDashboard>
                </ContainerImgDashboard>
              </div>

              <div>
                <ContainerStatsDashboard>
                  <StatsPokemon />
                </ContainerStatsDashboard>
              </div>
            </MainContainerDashboard>
          )}
        </div>
      </div>
    </pokemonContext.Provider>
  );
};

export default Dashboard;
