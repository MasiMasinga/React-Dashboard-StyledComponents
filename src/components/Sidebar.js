import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  MyLineStyle,
  MyTimeline,
  MyTrendingUp,
  MyPermIdentity,
  MyStorefront,
  MyDrafts,
  MyAssessment,
  MyLocalAtm,
  MyFeedback,
  MyForum,
  MyWork,
  MyReceipt,
  MyPieChart,
} from "../styles/Sidebar.styled";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/" className="link">
              <SidebarListItem>
                <MyLineStyle />
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MyTimeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <MyTrendingUp />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>All Menu</SidebarTitle>
          <SidebarList>
            <Link to="/users">
              <SidebarListItem>
                <MyPermIdentity />
                Users
              </SidebarListItem>
            </Link>
            <Link to="/products">
              <SidebarListItem>
                <MyStorefront />
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MyAssessment />
              Reports
            </SidebarListItem>
            <SidebarListItem>
              <MyLocalAtm />
              Transactions
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Connect</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyDrafts />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <MyFeedback />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <MyForum />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Employees</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyWork />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <MyPieChart />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <MyReceipt />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
