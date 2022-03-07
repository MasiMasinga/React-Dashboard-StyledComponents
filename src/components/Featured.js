import React from "react";
import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedTitle,
  FeaturedMoneyContainer,
  FeaturedSub,
} from "../styles/Featured.styled";
import { featuredData } from "../dummyData";
import { ArrowUpward } from "@material-ui/icons";

const Featured = () => {
  return (
    <FeaturedContainer>
      {featuredData &&
        featuredData.map((item, index) => (
          <FeaturedItem key={index}>
            <FeaturedTitle>{item.title}</FeaturedTitle>
            <FeaturedMoneyContainer>
              <span className="featuredMoney">{item.money}</span>
              <span className="featuredMoneyRate">
                {item.moneyRate} <ArrowUpward className="featuredIcon" />
              </span>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to Previous Month</FeaturedSub>
          </FeaturedItem>
        ))}
    </FeaturedContainer>
  );
};

export default Featured;
