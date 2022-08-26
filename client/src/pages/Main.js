import React from 'react';
import styled from 'styled-components';
import QuestionList from '../components/QuestionList';
// 메인 페이지
const Main = () => {
  return (
    <>
      <MainContainer>
        <Left />
        <QuestionList />
        <Right />
      </MainContainer>
    </>
  );
};

export default Main;

const Left = styled.div``;
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
