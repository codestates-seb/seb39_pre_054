import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlueButton, WhiteBox } from "./ui/Button";

const PostsContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [questionPost, setQuestionPost] = useState({
    title: location.state.title,
    body: location.state.body,
  });

  const titleChange = (el) => {
    setQuestionPost({ ...questionPost, title: el });
  };

  const bodyChange = (el) => {
    setQuestionPost({ ...questionPost, body: el });
  };

  const saveClick = () => {
    axios
      .patch(
        `http://localhost:3001/questions/${location.state.id}`,
        questionPost
      )
      .then((res) => navigate(`/questions/${location.state.id}`))
      .catch((err) => console.log(err));
  };

  const cancleClick = () => {
    navigate(`/questions/${location.state.id}`);
  };

  return (
    <Container>
      <ContentInfo>
        <div className="content-info-hint">
          Your edit will be placed in a queue until it is peer reviewed. <br />
          <br />
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.Í
        </div>
        <form>
          <div className="title-container">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              defaultValue={location.state.title}
              onChange={(el) => titleChange(el.target.value)}
            />
          </div>
          <div className="body-container">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              defaultValue={location.state.body}
              onChange={(el) => bodyChange(el.target.value)}
            />
          </div>
          <div className="button-container">
            <BlueButton type="button" height="40px" width="100px" onClick={saveClick}>
              Save edits
            </BlueButton>
            <WhiteBox height="40px" width="100px" onClick={cancleClick}>
              Cancel
            </WhiteBox>
          </div>
        </form>
      </ContentInfo>
    </Container>
  );
};

export default PostsContent;

const Container = styled.main`
  border-left: 1px solid #e3e6e8;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.4rem;

  .content-info-hint {
    padding: 1rem;
    background-color: #fdf7e2;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;

    label {
      font-size: 15px;
      font-weight: bold;
      padding: 0.5rem 0;
      cursor: pointer;
    }

    input {
      padding: 7px 9px;
      border: 1px solid #babfc3;
      border-radius: 5px;

      :focus {
        outline: 1px solid #6bbbf7;
        box-shadow: #d7e5f2 0px 0px 0px px;
      }
    }
  }

  .body-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;

    label {
      font-size: 15px;
      font-weight: bold;
      padding: 0.5rem 0;
      cursor: pointer;
    }

    textarea {
      padding: 7px 9px;
      border: 1px solid #babfc3;
      height: 25rem;
      border-radius: 5px;
      resize: none;
      font-size: 15px;

      :focus {
        outline: 1px solid #6bbbf7;
        box-shadow: #d7e5f2 0px 0px 0px px;
      }
    }
  }

  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
