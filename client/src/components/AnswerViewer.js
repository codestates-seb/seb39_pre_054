import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AnswerViewer = ({ questionid, answerId, author, id }) => {
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/answer/${id}`)
      .then((res) => setAnswer(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteClick = () => {
    const result = window.confirm("Delete this answer?");
    if (result === true) {
      axios
        .delete(`http://localhost:3001/answer/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      axios
        .patch(`http://localhost:3001/questions/${questionid}`, {answer_id:[...answerId.filter((el) => el !== id)]})
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  const shareClick = () => {
    navigator.clipboard
      .writeText(`http://localhost:3000/questions/${id}`)
      .then(() => {
        window.alert("Link copy complete!");
      });
  };

  return (
    <ViewContainer>
      <pre>{answer.body}</pre>
      <div className="view-container">
        <div className="view-button-container">
          <div className="view-button share">
            <span onClick={shareClick}>Share</span>
          </div>
          <div className="view-button edit">
            <StyledLink
              to={`/posts/${id}`}
              state={{ body: answer.body, id: answer.id }}
            >
              <span>Edit</span>
            </StyledLink>
          </div>
          <div className="view-button delete">
            <span onClick={deleteClick}>Delete</span>
          </div>
        </div>
        <div className="view-user-container">
          <div className="view-user-profile">
            <div>{answer.createdAt}</div>
            <div className="view-user-info">
              <img className="view-user-img" />
              <div className="view-user-name">{author}</div>
            </div>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
};

export default AnswerViewer;

const ViewContainer = styled.div`
  width: 38rem;

  pre {
    font-size: 1rem;
    margin: 0.3rem;
    white-space: pre-line;
  }

  svg {
    cursor: pointer;
    padding: 0.3rem;
  }

  .view-container {
    display: flex;
    justify-content: space-between;
  }

  .view-button-container {
    display: flex;
    margin-top: 4rem;
  }

  .view-button {
    padding-right: 1rem;
    margin: 3px;
    color: #636b74;

    span {
      cursor: pointer;
    }
  }

  .edit {
  }

  .delete {
  }

  .view-user-container {
    display: flex;
    align-items: center;
    width: 12.5rem;
    height: 66px;
    margin-top: 4rem;
    padding: 7px;
    border-radius: 5px;
    background-color: #d9eaf7;
  }

  .view-user-profile {
    width: 100%;
  }

  .view-user-info {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
  }

  .view-user-img {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    background-color: #636b74;
    margin-right: 20px;
  }

  .view-user-name {
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #636b74;
`;
