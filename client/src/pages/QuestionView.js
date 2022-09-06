import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import LeftSide from "../components/LeftSide";
import QuestionsViewHeader from "../components/QuestionsViewHeader";
import RightSide from "../components/RightSide";
import axios from "axios";
import QuestionsViewContent from "../components/QuestionsViewContent";
import useScrollTop from "../util/useScrollTop";

const QuestionView = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});

  useScrollTop();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/v1/questions/${id}`)
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
          {question.length !== 0 && (
            <>
              <QuestionsViewHeader
                questionTitle={question.title}
                questionCreatedAt={question.creationDate}
                questionModifiedAt={question.lastEditDate}
              ></QuestionsViewHeader>
              <Content>
                <QuestionsViewContent
                  questionTitle={question.title}
                  questionBody={question.body}
                  questionCreatedAt={question.creationDate}
                  questionAuthor={question.member !== undefined && question.member.name}
                  answerId={question.answerIds}
                  questionId={question.questionId}
                  questionMemberId={question.member !== undefined && question.member.memberId}
                ></QuestionsViewContent>
                <RightSide />
              </Content>
            </>
          )}
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
