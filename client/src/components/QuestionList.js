import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import QuestionRow from './QuestionRow';
import { BlueButton } from './ui/Button';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]); // 질문들

  useEffect(() => {
    axios
      .get('http://localhost:3001/questions', { withCredentials: true })
      .then((response) => setQuestions(response.data));
  }, []);
  return (
    <Container>
      <HeaderRow>
        <Header1>Top Questions</Header1>

        <StyledLink to='/questions/ask'>
          <BlueButton>Ask Question</BlueButton>
        </StyledLink>
      </HeaderRow>
      {questions &&
        questions.length > 0 &&
        questions.map((question) => (
          <QuestionRow
            key={question.id}
            title={question.title}
            id={question.id}
            createdAt={question.createdAt}
            author={question.author}

            // tags={question.tags}
          />
        ))}
    </Container>
  );
};

export default QuestionList;

const Container = styled.main`
  border-left: 1px solid #e3e6e8;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 4.5rem 1.5rem 4rem 1.5rem;
`;

const Header1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 7rem;
  height: 3.5rem;
  text-decoration: none;
  color: #000000;
`;
