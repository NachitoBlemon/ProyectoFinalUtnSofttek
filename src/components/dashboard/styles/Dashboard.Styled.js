import styled from "styled-components";

/* DASHBOARD */
// export const = styled.div``

export const MainContainerDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerNameDashboard = styled.div`
  margin-left: 3em;
  width: 32vw;
`;

export const ContainerImgDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 32vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ContainerWeaknessDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 3em;
  width: 32vw;
`;

export const ContainerStatsDashboard = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  width: 33vw;
  justify-content: center;
  align-items: center;
`;

/* END DASHBOARD */
export const Container = styled.div`
  width: 27em;
  display: flex;
  flex-flow: column wrap;
  padding-left: 1em;
  padding-top: 1em;
  padding-bottom: 1.3em;
  margin-top: 5em;
  line-height: 1.5;
  color: white;

  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export const TitleName = styled.h3`
  letter-spacing: 2px;
  font-size: 36px;
`;

export const Text = styled.p`
  letter-spacing: 1px;
  font-size: 18px;
  color: #ffffff;
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: #ffffff;
  width: 70%;
  padding: 1em;
  /* height: 15em; */
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export const TitleStats = styled.h3``;

export const ButtonContainerDashboard = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 1em;
`;

export const CircleImgGlassContainer = styled.div`
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1em;
  background: rgba(255, 255, 255, 0.27);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.8px);
  -webkit-backdrop-filter: blur(9.8px);
`;
