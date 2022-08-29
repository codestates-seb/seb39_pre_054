import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import LeftSide from "../components/LeftSide";
import QuestionsViewHeader from "../components/QuestionsViewHeader";
import RightSide from "../components/RightSide";
import axios from "axios";
import QuestionsViewContent from "../components/QuestionsViewContent";

const QuestionView = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/questions/${id}`)
      .then((res) => setQuestion(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MainContainer>
        <Left>
          <LeftSide />
        </Left>
        <ContentContainer>
          <QuestionsViewHeader
            questionTitle={question.title}
            questionCreatedAt={question.createdAt}
          ></QuestionsViewHeader>
          <Content>
            <QuestionsViewContent
              questionTitle={question.title}
              questionBody={question.body}
              questionCreatedAt={question.createdAt}
              questionAuthor={question.author}
              id={question.id}
            ></QuestionsViewContent>
            <RightSide />
          </Content>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default QuestionView;

const Left = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

const MainContainer = styled.div`
  top: 0;
  display: grid;
  justify-content: center;
  grid-template-columns: 0.32fr 1fr 0.26fr;
  margin: 0 auto;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  border-left: 1px solid #e3e6e8;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
