import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlueButton } from "./ui/Button";

const QuestionsViewHeader = ({
  questionTitle,
  questionCreatedAt,
  questionModifiedAt,
}) => {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  return (
    <Container>
      <TitleContainer>
        <Header1>{questionTitle !== undefined && questionTitle}</Header1>
        {isLogin && (
          <StyledLink to="/questions/ask">
            <BlueButton>Ask Question</BlueButton>
          </StyledLink>
        )}
      </TitleContainer>
      <CreateContainer>
        <span>
          Asked{" "}
          {questionCreatedAt !== undefined && questionCreatedAt.slice(0, 10)}
        </span>
        <span>
          Modified{" "}
          {questionModifiedAt !== undefined && questionModifiedAt.slice(0, 10)}
        </span>
        <span>Viewed 11 times</span>
      </CreateContainer>
    </Container>
  );
};

export default QuestionsViewHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e3e6e8;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const CreateContainer = styled.div`
  display: flex;

  span {
    padding-right: 2rem;
  }
`;

const Header1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 9rem;
  height: 3.5rem;
  text-decoration: none;
  color: #000000;
`;
