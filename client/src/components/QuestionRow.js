import styled from "styled-components";
import { Link } from "react-router-dom";
import UserLink from "./UserLink";

// MainQuestionList.js로부터 받은 값
const QuestionRow = ({ id, title, body, author, createdAt }) => {
  return (
    <StyledQuestionRow>
      <QuestionStats>
        <div className="stats-item-bold">
          <span className="stats-num">0</span>
          <span className="stats-unit">votes</span>
        </div>

        <div className="stats-item">
          <span className="stats-num">
            0{/* {answer_id !== undefined && answer_id.length} */}
          </span>

          <span className="stats-unit">answers</span>
        </div>

        <div className="stats-item">
          <span className="stats-num">6</span>
          <span className="stats-unit">views</span>
        </div>
      </QuestionStats>

      <QuestionTitleArea>
        <QuestionLink to={`/questions/${id}`}>{title}</QuestionLink>
        <QuestionBody>{body}</QuestionBody>
        <WhoAndWhen>
          <UserAvatar />
          <UserLink id={author}>{author}</UserLink>
          <CreatedAtLink to={`/questions/${id}`}>{createdAt}</CreatedAtLink>
        </WhoAndWhen>
      </QuestionTitleArea>
    </StyledQuestionRow>
  );
};

export default QuestionRow;

const StyledQuestionRow = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(1, 125px) 1fr;
  border-top: 1px solid #e3e6e8;
`;

const QuestionStats = styled.div`
  margin: 0 16px 4px 0;

  div {
    font-size: 13px;
    font-weight: 500;
    text-align: right;
    margin: 0.2rem 0 0.6rem 0;
    color: #6b737c;
  }

  .stats-item-bold {
    color: black;
  }

  span {
    font-size: 13px;
    font-weight: 500;
  }

  .stats-num {
    margin-right: 0.2rem;
    font-weight: 600;
  }
`;

const QuestionTitleArea = styled.div``;
const QuestionLink = styled(Link)`
  text-decoration: none;
  color: #0074cc;
  font-size: 1.1rem;
  line-height: 1.4rem;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
  margin: -1.95px 0 5px;
  padding: 0 24px 0 0;

  &:hover {
    color: #0a95ff;
  }
`;

const QuestionBody = styled.div`
  font-size: 13.5px;
  color: #3b4045;
  font-weight: 400;
  margin: -2px 0px 8px;
  height: 33px;

  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WhoAndWhen = styled.div`
  display: flex;
  font-size: 0.8rem;
  float: right;
  padding: 10px 0 3px 0;
`;

const UserAvatar = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: #888888;
  margin-right: 5px;
`;

const CreatedAtLink = styled(Link)`
  text-decoration: none;
  color: #555555;
  font-size: 0.75rem;
  font-weight: 400;
  margin: 1px 0 0 4px;
  &:hover {
    color: #3b3c3c;
    margin: 1px 0 0 4px;
  }
`;
