import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MainQuestionRow from "./MainQuestionRow";
import { BlueButton } from "./ui/Button";

const MainQuestionList = () => {
  const [questions, setQuestions] = useState([]); // 질문들

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions", { withCredentials: true })
      .then((response) => setQuestions(response.data));
  }, []);
  return (
    <Container>
      <Row1>
        <Header1>Top Questions</Header1>
        <StyledLink to="/questions/ask">
          <BlueButton margin="0">Ask Question</BlueButton>
        </StyledLink>
      </Row1>

      <Row2>
        <FilterGroup>
          <button className="filter-button1">Interesting</button>
          <button className="filter-button2">
            <span classname="box">300</span>
            Bountied
          </button>
          <button className="filter-button3">Hot</button>
          <button className="filter-button4">Week</button>
          <button className="filter-button5">Month</button>
        </FilterGroup>
      </Row2>
      {questions.map((question) => (
        <MainQuestionRow
          key={question.id}
          id={question.id}
          title={question.title}
          body={question.body}
          createdAt={question.createdAt}
          author={question.author}
        />
      ))}

      {/* <BottomText>
        Looking for more? Browse the complete list of questions, or popular
        tags. Help us answer unanswered questions.
      </BottomText> */}
    </Container>
  );
};

export default MainQuestionList;

const Container = styled.main`
  border-left: 1px solid #e3e6e8;
`;

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 2rem 0 0.4rem 1.4rem;
`;

const Header1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 7rem;
  height: 3.5rem;
  text-decoration: none;
  color: #000000;
`;

const Row2 = styled.div`
  padding-bottom: 1rem;
  text-align: right;
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
    margin-right: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;

    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }

    span {
      margin: 0 5px 0 0;
      padding: 2.2px 5.5px 2.75px;
      background-color: #0074cc;
      color: #ffffff;
      font-size: 12px;
      border-radius: 2px;
    }
  }

  .filter-button3 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    margin-right: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
  }
  .filter-button4 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    margin-right: -3px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
  }
  .filter-button5 {
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #555555;
    margin-left: 2px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
  }
`;

// const BottomText = styled.div`
//   padding: 3rem 2rem 3rem 1.5rem;
//   font-size: 17.5px;
//   font-weight: 400;
// `;
