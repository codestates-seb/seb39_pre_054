import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BlueButton } from "../components/ui/Button";
import { ReactComponent as Filter } from "../assets/filter.svg";
import QuestionRow from "../components/QuestionRow";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import ReactPaginate from "react-paginate";

const Questions = () => {
  const [questions, setQuestions] = useState([]); // 질문들

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions", { withCredentials: true })
      .then((response) => setQuestions(response.data));
  }, []);

  // const handlePageClick = () => {
  //   console.log("d");
  // };

  return (
    <MainContainer>
      <Left>
        <LeftSide />
      </Left>
      <Container>
        <Row1>
          <Header1>Top Questions</Header1>
          <StyledLink to="/questions/ask">
            <BlueButton margin="0">Top Question</BlueButton>
          </StyledLink>
        </Row1>

        <Row2>
          <FilterGroup>
            <button className="filter-button1">Interesting</button>
            <button className="filter-button2">
              <span>300</span>
              Bountied
            </button>
            <button className="filter-button3">Hot</button>
            <button className="filter-button4">Week</button>
            <button className="filter-button5">Month</button>
            <button className="filter-button6">
              <div>
                <Filter fill="#39739d"></Filter>
              </div>
              Filter
            </button>
          </FilterGroup>
        </Row2>
        {questions.map((question) => (
          <QuestionRow
            key={question.id}
            id={question.id}
            title={question.title}
            body={question.body}
            createdAt={question.createdAt}
            author={question.author}
          />
        ))}
        <Row3>
          {/* <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={15}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          ></ReactPaginate> */}

          <div className="pagination-left">
            <a href="http://localhost:3001/">1</a>
            <a href="http://localhost:3001/">2</a>
            <a href="http://localhost:3001/">3</a>
            <a href="http://localhost:3001/">4</a>
            <a href="http://localhost:3001/">5</a>
            <span>...</span>
            <a href="http://localhost:3001/">1529170</a>
            <a href="http://localhost:3001/">Next</a>
          </div>
          <div className="pagination-right">
            <a href="http://localhost:3001/">15</a>
            <a href="http://localhost:3001/">30</a>
            <a href="http://localhost:3001/">50</a>
            <span>per page</span>
          </div>
        </Row3>
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

const Row2 = styled.div``;

const FilterGroup = styled.div`
  padding-bottom: 1rem;
  display: flex;
  margin-left: 19rem;
  /* margin-right: 0; */
  /* float: right; */

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

  .filter-button6 {
    display: flex;
    padding: 0 0.7rem;
    height: 2.3rem;
    color: #39739d;
    margin-left: 1rem;
    background: #e1ecf4;
    border: 1px solid #39739d;
    border-radius: 3px;
    align-items: center;
    text-align: right;
    &:hover {
      background-color: #b3d4ea;
      cursor: pointer;
    }

    div {
      width: 18px;
      height: 18px;
      padding-right: 3px;
      border-radius: 20%;
      /* text-align: right; */
    }
  }
`;

const Row3 = styled.div`
  border-top: 1px solid #e3e6e8;
  padding: 5rem 1.5rem 3rem 1.5rem;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  .pagination-left {
    /* background-color: skyblue; */
    /* float: left; */
    text-align: left;
    /* margin: 20px 0; */
    /* align-items: center; */

    a {
      height: 27px;
      border: 1px solid #d6d9dc;
      border-radius: 3px;
      text-decoration: none;
      color: inherit;
      margin: 0px 2px;
      padding: 5px 8px;
      &:hover {
        background-color: #d6d9dc;
      }
    }

    span {
      height: 27px;
      margin: 0px 2px;
      padding: 5px 8px;
    }
  }
  .pagination-right {
    /* background-color: bisque; */
    /* float: right; */
    text-align: right;

    a {
      height: 27px;
      border: 1px solid #d6d9dc;
      border-radius: 3px;
      text-decoration: none;
      color: inherit;
      margin: 0px 2px;
      padding: 5px 8px;
      &:hover {
        background-color: #d6d9dc;
      }
    }
    span {
      height: 27px;
      margin: 0px 2px;
      padding: 5px 8px;
    }
  }
`;
