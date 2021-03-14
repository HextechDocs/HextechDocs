import React from "react";

import Sidebar from "@components/Sidebar";
import Content from "@components/Content";
import BottomBar from "@components/Bottombar";

import StyledContainer from "./styled";

const Container = (): JSX.Element => {
  const test = "test";
  return (
    <StyledContainer>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </StyledContainer>
  );
};

export default Container;
