import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserLink from './UserLink';

// QuestionList.js로부터 받은 값
const QuestionRow = ({ title, id, author, createdAt }) => {
  return (
    <StyledQuestionRow>
      <QuestionStat>
        0<span>votes</span>
      </QuestionStat>
      <QuestionStat>
        1<span>answers</span>
      </QuestionStat>
      <QuestionStat>
        6<span>views</span>
      </QuestionStat>

      <QuestionTitleArea>
        <QuestionLink to={`/questions/${id}`}>{title}</QuestionLink>
        <WhoAndWhen>
          <UserLink id={author}>{author}</UserLink>

          <CreatedAtLink to={`/questions/${id}`}>{createdAt}</CreatedAtLink>
        </WhoAndWhen>
      </QuestionTitleArea>
    </StyledQuestionRow>
  );
};

export default QuestionRow;

const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color: #555555;
  margin-top: 7px;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;
const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;
const QuestionLink = styled(Link)`
  text-decoration: none;
  color: #0074cc;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
  &:hover {
    color: #0a95ff;
  }
`;

const StyledQuestionRow = styled.div`
  padding: 15px 15px 10px;
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #e3e6e8;
`;
const WhoAndWhen = styled.div`
  display: flex;
  font-size: 0.8rem;
  float: right;
  padding: 10px 0;
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
