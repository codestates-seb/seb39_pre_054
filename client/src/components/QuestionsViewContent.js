import React from "react";
import styled from "styled-components";
import AnswerPost from "./AnswerPost";
import QuestionAnswersView from "./QuestionAnswersView";

import Vote from "./Vote";

const QuestionsViewContent = ({
  questionTitle,
  questionBody,
  questionCreatedAt,
  questionAuthor,
  id,
}) => {
  return (
    <Container>
      <div className="question-container">
        <Vote></Vote>
        {/* 질문 뷰어 */}
        <QuestionAnswersView
          questionTitle={questionTitle}
          questionBody={questionBody}
          questionCreatedAt={questionCreatedAt}
          questionAuthor={questionAuthor}
          id={id}
        ></QuestionAnswersView>
      </div>
      <div className="answer-container">
        <div className="answer-title">Answer</div>
        <div className="answer-content">
          <Vote></Vote>
          {/* 답변 데이터 만들것 */}
          <QuestionAnswersView
            questionTitle={questionTitle}
            questionBody={questionBody}
            questionCreatedAt={questionCreatedAt}
            questionAuthor={questionAuthor}
            id={id}
          ></QuestionAnswersView>
        </div>
      </div>
      <div className="answer-post-container">
        <div className="answer-title">Your Answer</div>
        <AnswerPost></AnswerPost>
      </div>
    </Container>
  );
};

export default QuestionsViewContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .question-container {
    display: flex;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #e3e6e8;
  }

  .answer-container {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #e3e6e8;

    .answer-content {
      display: flex;
    }
  }

  .answer-title {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

  .answer-post-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
`;
