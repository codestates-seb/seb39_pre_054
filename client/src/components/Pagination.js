import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Pagination = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]); // 현재 창에 보여지는 아이템들
  const [pageCount, setPageCount] = useState(0); // 총 페이지 수
  const [itemOffset, setItemOffset] = useState(0); // 현재 창의 가장 첫번째 아이템의 인덱스 : page
  const [itemsPerPage, setItemsPerPage] = useState(3); // 쿼리 파라미터 : size
  const [tab, setTab] = useState("curr");

  // 속성값 offset은 각 목록이 시작하는 데이터 순번을 의미 - 이 경우는 page
  // 속성값 limit는 한 페이지에 표현할 최대 개수를 의미 - 이 경우는 size

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage; // 현재 창의 가장 마지막 아이템의 인덱스
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // 왼쪽 버튼들을 누르면 실행되는 함수. 누른 버튼의 값에 따라 itemOffset 갱신
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    updateOffset();
  };

  const updateOffset = () => {
    const queryString = `?size=${itemsPerPage}&page=${itemOffset}`;
    navigate(`${queryString}`);
  };

  // 오른쪽 버튼들을 누르면 실행되는 함수
  const changeItemsPerPage = (e) => {
    setItemsPerPage(e);
    setTab(String(e));
    setItemOffset(0);
    updateOffset();
  };

  console.log(itemsPerPage);
  console.log(itemOffset);
  // console.log(data);
  console.log(currentItems);

  return (
    <>
      <QuestionsPagination>
        {currentItems.map((question) => (
          <QuestionRow
            key={question.questionId}
            id={question.questionId}
            title={question.title}
            body={question.body}
            createdAt={question.creationDate}
            author={question.member.name}
          />
        ))}
      </QuestionsPagination>

      <Row3>
        <PaginationLeft>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-num"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-num"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-num"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-num"}
            activeClassName={"active"}
          ></ReactPaginate>
        </PaginationLeft>
        <PaginationRight>
          <div>
            <div
              className={`btn ${tab === "15" ? "active" : ""}`} // tab 값이 "2"이면 active 클래스를 추가
              onClick={() => {
                changeItemsPerPage(15);
              }}
            >
              15
            </div>

            <div
              className={`btn ${tab === "30" ? "active" : ""}`}
              onClick={() => {
                changeItemsPerPage(30);
              }}
            >
              30
            </div>
            <div
              className={`btn ${tab === "50" ? "active" : ""}`}
              onClick={() => {
                changeItemsPerPage(50);
              }}
            >
              50
            </div>
            <div className="perpage">per page</div>
          </div>
        </PaginationRight>
      </Row3>
    </>
  );
};
export default Pagination;

const QuestionsPagination = styled.div``;

const Row3 = styled.div`
  border-top: 1px solid #e3e6e8;
  padding: 4.7rem 0.7rem 3rem 1.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;
const PaginationLeft = styled.div`
  text-align: left;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    height: 14px;
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    margin: 0px 2px;
    padding: 4px 0px 6px 0px;
    &:hover {
      background-color: #d6d9dc;
      cursor: pointer;
    }
    &.active {
      background-color: #f48225;
      color: #ffffff;
      cursor: pointer;
      border: 1px solid #f48225;
    }
  }

  a {
    height: 14px;
    border-radius: 3px;
    margin: 0px -1px;
    padding: 4px 8px 5px 8px;
  }
`;

const PaginationRight = styled.div`
  text-align: right;
  div {
    display: flex;
  }

  .btn {
    height: 14px;
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    margin: 0px 2px;
    padding: 4px 8px 6px 8px;
  }
  .btn:hover {
    background-color: #d6d9dc;
    cursor: pointer;
  }
  .btn.active {
    background-color: #f48225;
    color: #ffffff;
    cursor: pointer;
    border: 1px solid #f48225;
  }

  .perpage {
    padding: 4px;
    border: none;
    &:hover {
      background-color: #ffffff;
      cursor: default;
    }
  }
`;
