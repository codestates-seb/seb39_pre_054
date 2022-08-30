import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const QuestionAnswersView = ({
  questionTitle,
  questionBody,
  questionCreatedAt,
  questionAuthor,
  id,
}) => {
  const navigate = useNavigate();

  const deleteClick = () => {
    const result = window.confirm("Delete this post?");
    if (result === true) {
      axios
        .delete(`http://localhost:3001/questions/${id}`)
        .then((res) => navigate(`/`))
        .catch((err) => console.log(err));
    } else {
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
      <pre>{questionBody}</pre>
      <div className="view-container">
        <div className="view-button-container">
          <div className="view-button share">
            <span onClick={shareClick}>Share</span>
          </div>
          <div className="view-button edit">
            <StyledLink
              to={`/posts/${id}`}
              state={{ title: questionTitle, body: questionBody, id: id }}
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
            <div>{questionCreatedAt}</div>
            <div className="view-user-info">
              <img className="view-user-img" />
              <div className="view-user-name">{questionAuthor}</div>
            </div>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
};

export default QuestionAnswersView;

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
