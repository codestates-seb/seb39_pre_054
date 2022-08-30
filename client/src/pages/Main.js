import React from "react";
import styled from "styled-components";
import MainQuestionList from "../components/MainQuestionList";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

// 메인 페이지
const Main = () => {
  return (
    <>
      <MainContainer>
        <Left>
          <LeftSide />
        </Left>
        <MainQuestionList />
        <RightSide />
      </MainContainer>
    </>
  );
};

export default Main;

const Left = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-start;
  height: 100%;
`;

const MainContainer = styled.div`
  top: 0;
  display: grid;
  grid-template-columns: 1fr 755px 1.7fr;
  margin: 0 auto;
  width: 100%;
`;
