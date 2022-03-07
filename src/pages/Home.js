import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import { HomeContainer, HomeWidgets } from "../styles/Home.styled";
import { userData } from "../dummyData";
import SmWidget from "../components/SmWidget";
import LgWidget from "../components/LgWidget";

const Home = () => {
  return (
    <HomeContainer>
      <Featured />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <HomeWidgets>
        <SmWidget />
        <LgWidget />
      </HomeWidgets>
    </HomeContainer>
  );
};

export default Home;
