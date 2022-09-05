import React from "react";
import styled from "styled-components";
import AnswerPost from "./AnswerPost";
import AnswerViewer from "./AnswerViewer";
import QuestionViewer from "./QuestionViewer";

import Vote from "./Vote";

const QuestionsViewContent = ({
  questionTitle,
  questionBody,
  questionCreatedAt,
  questionAuthor,
  answerId,
  questionId,
}) => {
  return (
    <Container>
      <div className="question-container">
        <Vote></Vote>
        {/* 질문 뷰어 */}
        <QuestionViewer
          title={questionTitle}
          body={questionBody}
          createdAt={questionCreatedAt}
          author={questionAuthor}
          questionId={questionId}
        ></QuestionViewer>
      </div>
      <div className="answer-container">
        <div className="answer-title">Answer</div>
        {answerId !== undefined &&
          answerId.length !== 0 &&
          answerId.map((el, idx) => {
            return (
              <div className="answer-content" key={idx}>
                <Vote></Vote>
                <AnswerViewer
                  author={questionAuthor}
                  questionId={questionId}
                  id={el}
                ></AnswerViewer>
              </div>
            );
          })}
      </div>
      <div className="answer-post-container">
        <div className="answer-title">Your Answer</div>
        <AnswerPost questionId={questionId} answerId={answerId}></AnswerPost>
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

    .answer-content {
      display: flex;
      padding-bottom: 2rem;
      padding-top: 1rem;
      border-bottom: 1px solid #e3e6e8;
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
