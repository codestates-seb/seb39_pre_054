import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]); // 현재 창에 보여지는 아이템들
  const [pageCount, setPageCount] = useState(0); // 총 페이지 수
  const [itemOffset, setItemOffset] = useState(0); // 현재 창의 가장 첫번째 아이템의 인덱스
  // const itemsPerPage = 2;
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage; // 현재 창의 가장 마지막 아이템의 인덱스
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset); // itemOffset을 업데이트
  };

  const changeItemsPerPage = (e) => {
    setItemsPerPage(e);
  };

  return (
    <>
      <QuestionsPagination>
        {currentItems.map((question) => (
          <QuestionRow
            key={question.id}
            id={question.id}
            title={question.title}
            body={question.body}
            createdAt={question.createdAt}
            author={question.author}
            answer_id={question.answer_id}
          />
        ))}
      </QuestionsPagination>

      <Row3>
        <div className="pagination-left">
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
        </div>
        <div className="pagination-right">
          <ul>
            <li
              onClick={() => {
                changeItemsPerPage(2);
              }}
            >
              2
            </li>

            <li
              onClick={() => {
                changeItemsPerPage(5);
              }}
            >
              5
            </li>
            <li
              onClick={() => {
                changeItemsPerPage(10);
              }}
            >
              10
            </li>
            <li className="perpage">per page</li>
          </ul>
        </div>
      </Row3>
    </>
  );
};
export default Pagination;

const QuestionsPagination = styled.div``;

const Row3 = styled.div`
  border-top: 1px solid #e3e6e8;
  padding: 4.7rem 0.7rem 3rem 1.6rem;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  .pagination-left {
    text-align: left;

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      .active {
        background-color: #f48225;
        color: #ffffff;
        border: 1px solid #f48225;
      }
    }

    li {
      height: 14px;
      border: 1px solid #d6d9dc;
      border-radius: 3px;
      margin: 0px 2px;
      padding: 4px 8px 6px 8px;
      &:hover {
        background-color: #d6d9dc;
        cursor: pointer;
      }
    }
  }
  .pagination-right {
    text-align: right;

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      .active {
        background-color: #f48225;
        color: #ffffff;
        border: 1px solid #f48225;
      }
    }

    li {
      height: 14px;
      border: 1px solid #d6d9dc;
      border-radius: 3px;
      margin: 0px 2px;
      padding: 4px 8px 6px 8px;
      &:hover {
        background-color: #d6d9dc;
        cursor: pointer;
      }
    }

    .perpage {
      padding: 4px;
      border: none;
      &:hover {
        background-color: #ffffff;
        cursor: default;
      }
    }
  }
`;
