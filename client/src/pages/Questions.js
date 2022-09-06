import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BlueButton } from "../components/ui/Button";
import { ReactComponent as Filter } from "../assets/filter.svg";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";

const Questions = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]); // 질문들

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/v1/questions${location.search}`)
      .then((res) => setQuestions(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  // json server 테스트 용 - 쿼리파라미터
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/questions${location.search}`)
  //     .then((res) => setQuestions(res.data));
  // }, [location.search]);
  // 쿼리스트링이 바뀔 때마다 useEffect 를 실행해야 함

  // console.log(location.search);
  // console.log(questions);

  return (
    <MainContainer>
      <Left>
        <LeftSide />
      </Left>
      <Container>
        <Row1>
          <Header1>All Questions</Header1>
          <StyledLink to="/questions/ask">
            <BlueButton margin="0">Ask Question</BlueButton>
          </StyledLink>
        </Row1>
        <Row2>
          <AllQuestions>{questions.length} questions</AllQuestions>

          <FilterGroup>
            <button className="filter-button1">Newest</button>
            <button className="filter-button2">Active</button>
            <button className="filter-button3">
              Bountied<span>300</span>
            </button>
            <button className="filter-button4">Unanswered</button>
            <button className="filter-button5">More</button>
            <button className="filter-button6">
              <div>
                <Filter fill="#39739d"></Filter>
              </div>
              Filter
            </button>
          </FilterGroup>
        </Row2>

        <Pagination data={questions} />
      </Container>
      <RightSide />
    </MainContainer>
  );
};

export default Questions;

const Left = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-start;
  height: 100%;
`;

const MainContainer = styled.div`
  top: 0;
  display: grid;
  grid-template-columns: 1fr 755px 1.7fr;
  /* grid-template-columns: 1.1fr 750px 1.8fr; */
  margin: 0 auto;
  width: 100%;
`;

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
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0 0 13px;
  padding-left: 1.4rem;
`;

const AllQuestions = styled.div`
  font-size: 17px;
  font-weight: 450;
  color: #232629;
  margin: 0 12px 0 0;
`;

const FilterGroup = styled.div`
  display: flex;

  .filter-button1 {
    padding: 0 0.6rem;
    height: 2.3rem;
    color: #333333;
    margin-right: -1px;
    border: 1px solid #888888;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 12px;

    &:hover {
      cursor: pointer;
    }
  }
  .filter-button2 {
    padding: 0 0.6rem;
    height: 2.3rem;
    color: #555555;
    margin-right: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    font-size: 12px;

    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
  }

  .filter-button3 {
    padding: 0 0.6rem;
    height: 2.3rem;
    color: #555555;
    margin-right: -1px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    font-size: 12px;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
    span {
      margin: 0 0 0 4px;
      padding: 1.1px 5.5px;
      background-color: #0074cc;
      color: #ffffff;
      font-size: 11px;
      border-radius: 3px;
    }
  }
  .filter-button4 {
    padding: 0 0.6rem;
    height: 2.3rem;
    color: #555555;
    margin-right: -3px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    font-size: 12px;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
  }
  .filter-button5 {
    padding: 0 0.6rem;
    height: 2.3rem;
    color: #555555;
    margin-left: 2px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #888888;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 12px;
    &:hover {
      background-color: #f8f9f9;
      color: #333333;
      cursor: pointer;
    }
  }

  .filter-button6 {
    display: flex;
    padding: 0 0.6rem;
    height: 2.3rem;
    color: #39739d;
    margin-left: 1rem;
    background: #e1ecf4;
    border: 1px solid #39739d;
    border-radius: 3px;
    align-items: center;
    text-align: right;
    font-size: 12px;
    &:hover {
      background-color: #b3d4ea;
      cursor: pointer;
    }

    div {
      width: 18px;
      height: 18px;
      padding-right: 3px;
      border-radius: 20%;
    }
  }
`;
