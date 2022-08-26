import React from 'react';
import styled from 'styled-components';
import LeftSide from '../components/LeftSide';
import QuestionList from '../components/QuestionList';
// 메인 페이지
const Main = () => {
  return (
    <>
      <MainContainer>
        <Left><LeftSide/></Left>
        <QuestionList />
        <Right />
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
  grid-template-columns: 1fr 900px 1fr;
  margin: 0 auto;
  width: 100%;
`;

const Right = styled.div`
  background-color: beige;
`;
