import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import QuestionRow from "./QuestionRow";
import { BlueButton } from "./ui/Button";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]); // 질문들

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions", { withCredentials: true })
      .then((response) => setQuestions(response.data));
  }, []);
  return (
    <Container>
      <HeaderRow1>
        <Header1>Top Questions</Header1>
        <StyledLink to="/questions/ask">
          <BlueButton>Ask Question</BlueButton>
        </StyledLink>
      </HeaderRow1>

      <HeaderRow2>
        <div></div>
        <FilterGroup>
          <button className="filter-button1">Interesting</button>
          <button className="filter-button2">Bountied</button>
          <button className="filter-button3">Hot</button>
          <button className="filter-button4">Week</button>
          <button className="filter-button5">Month</button>
        </FilterGroup>
      </HeaderRow2>
      {questions.map((question) => (
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

const HeaderRow1 = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 2rem 0 1rem 1.4rem;
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

const HeaderRow2 = styled.div`
  padding: 0 0 1.1rem 28.3rem;
`;

const FilterGroup = styled.div`
  .filter-button1 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #333333;
    margin-right: -1px;
    border: 1px solid #888888;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    &:hover {
      cursor: pointer;
    }
  }
  .filter-button2 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
    }
  }
  .filter-button3 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    margin-left: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
    }
  }
  .filter-button4 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    margin-left: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
    }
  }
  .filter-button5 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    margin-left: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
    }
  }
`;
