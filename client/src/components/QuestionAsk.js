import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import QuestionAskRight from "./QuestionAskRight";
import { BlueButton } from "./ui/Button";

const QuestionAsk = () => {
  const navigate = useNavigate();
  const memberid = localStorage.getItem('memberid');
  const [questionPost, setQuestionPost] = useState({
    title: "",
    body: "",
    // 아이디값 유동적으로 바꾸기
    memberId: memberid,
  });

  const [validations, setValidations] = useState({
    title: true,
    body: true,
  });

  const titleChange = (el) => {
    setQuestionPost({ ...questionPost, title: el });
  };

  const bodyChange = (el) => {
    setQuestionPost({ ...questionPost, body: el });
  };

  const onPostClick = () => {
    if (questionPost.title !== "" && questionPost.body !== "") {
      setValidations({ title: false, body: false });
      const headers = {
        "Content-Type": "application/json",
        "Authorization":
          `${localStorage.getItem("authorization")}`,
      };
      axios
        .post(`${process.env.REACT_APP_API_URI}/v1/questions`, questionPost, {
          headers: headers,
        })
        .then((res) => navigate(`/questions/${res.data.questionId}`))
        .catch((err) => console.log(err));
    }

    if (questionPost.title === "") {
      setValidations((prev) => {
        return { ...prev, title: false };
      });
    } else {
      setValidations((prev) => {
        return { ...prev, title: true };
      });
    }
    if (questionPost.body === "") {
      setValidations((prev) => {
        return { ...prev, body: false };
      });
    } else {
      setValidations((prev) => {
        return { ...prev, body: true };
      });
    }
  };

  return (
    <>
      <AskContainer>
        <ContentContainer>
          <form>
            <TextContianer>
              <label htmlFor="title">
                Title
                <div>
                  Be specific and imagine you’re asking a question to another
                  person
                </div>
              </label>
              <InputContainer>
                <TitleTags
                  id="title"
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  onChange={(el) => titleChange(el.target.value)}
                ></TitleTags>
                {validations.title || <span>Title is empty.</span>}
              </InputContainer>
            </TextContianer>
            <TextContianer>
              <label htmlFor="body">
                Body
                <div>
                  Include all the information someone would need to answer your
                  question
                </div>
              </label>
              <InputContainer>
                <BodyInput
                  id="body"
                  onChange={(el) => bodyChange(el.target.value)}
                ></BodyInput>
                {validations.body || <span>Body is empty.</span>}
              </InputContainer>
            </TextContianer>
            <TextContianer>
              <label htmlFor="tags">
                Tags
                <div>
                  Add up to 5 tags to describe what your question is about
                </div>
              </label>
            </TextContianer>
            <InputContainer>
              <TitleTags
                id="tags"
                placeholder="e.g. (postgresql sql c++)"
              ></TitleTags>
            </InputContainer>
          </form>
          <ButtonContainer>
            <BlueButton
              width="135px"
              height="38px"
              margin="0"
              onClick={onPostClick}
            >
              Post your question
            </BlueButton>
          </ButtonContainer>
        </ContentContainer>
        <RightContainer>
          <QuestionAskRight></QuestionAskRight>
        </RightContainer>
      </AskContainer>
    </>
  );
};

export default QuestionAsk;

const AskContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    margin: 0;
    padding: 0;
    width: 844px;
    height: 100%;
    padding: 16px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    background-color: #fff;
  }

  label {
    font-weight: bold;
    cursor: pointer;
  }
`;

const TextContianer = styled.div`
  width: 100%;
  margin: 0 0 4px;
  margin-bottom: 6px;

  div {
    font-size: 12px;
    margin: 2px 0 0;
    font-weight: normal;
  }
`;

const InputContainer = styled.div`
  width: 100%;

  span {
    color: red;
  }
`;

const TitleTags = styled.input`
  padding: 7px 9px;
  width: 822px;
  border: 1px solid #babfc3;
  border-radius: 5px;

  :focus {
    outline: 1px solid #6bbbf7;
    box-shadow: #d7e5f2 0px 0px 0px px;
  }

  ::placeholder {
    color: #babec4;
  }
`;

const BodyInput = styled.textarea`
  padding: 7px 9px;
  width: 822px;
  height: 283px;
  border: 1px solid #babfc3;
  border-radius: 5px;
  resize: none;
  font-size: 15px;

  :focus {
    outline: 1px solid #6bbbf7;
    box-shadow: #d7e5f2 0px 0px 0px px;
  }
`;

const ButtonContainer = styled.div`
  padding: 16px;
  padding-left: 0;
`;

// 오른쪽 사이드 바
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
