import React from "react";
import { lastTransctionRows } from "../dummyData";
import {
  LgWidgetContainer,
  LgWidgetTitle,
  LgWidgetButton,
  LgWidgetTable,
  LgWidgetTh,
  LgWidgetUser,
  LgWidgetImg,
  LightTd,
} from "../styles/LgWidget.styled";

const LgWidget = () => {
  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Latest Transactions</LgWidgetTitle>
      <LgWidgetTable>
        <tr>
          <LgWidgetTh>Customer</LgWidgetTh>
          <LgWidgetTh>Date</LgWidgetTh>
          <LgWidgetTh>Amount</LgWidgetTh>
          <LgWidgetTh>Status</LgWidgetTh>
        </tr>
        {lastTransctionRows &&
          lastTransctionRows.map((item) => (
            <tr>
              <LgWidgetUser>
                <LgWidgetImg src={item.avatar} alt={item.username} />
                <span>{item.username}</span>
              </LgWidgetUser>
              <LightTd>{item.date}</LightTd>
              <LightTd>{item.transaction}</LightTd>
              <td>
                <LgWidgetButton bgColor={item.color} fdColor={item.fdColor}>
                  {item.type}
                </LgWidgetButton>
              </td>
            </tr>
          ))}
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};

export default LgWidget;
