import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BlueButton, WhiteBox } from "./ui/Button";

const AnswerPost = ({ questionid, answerId }) => {
  const [answerPost, setAnswerPost] = useState({
    body: "",
  });
  const [answerNumber, setAnswerNumber] = useState({
    answer_id: [],
  });

  useEffect(() => {
    if (answerId !== undefined && answerId.length !== 0) {
      setAnswerNumber({ answer_id: [...answerId] });
    }
  }, [answerId]);

  const bodyChange = (el) => {
    setAnswerPost({ body: el });
  };

  const cancleClick = () => {
    setAnswerPost({ body: "" });
  };

  const postAnswerClick = () => {
    if (answerPost.body !== "") {
      axios
        .post(`http://localhost:3001/answer`, answerPost)
        .then((res) =>
          axios
            .patch(`http://localhost:3001/questions/${questionid}`, {
              answer_id: [res.data.id, ...answerNumber.answer_id],
            })
            .then((res) => console.log(res.data.answer_id)).then(window.location.reload())
            .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <ContentInfo>
        <form>
          <div className="body-container">
            <textarea
              id="body"
              defaultValue={answerPost.body}
              onChange={(el) => bodyChange(el.target.value)}
            />
          </div>
          <div className="button-container">
            <BlueButton
              type="button"
              height="40px"
              width="10rem"
              onClick={postAnswerClick}
            >
              Post Your Answer
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

export default AnswerPost;

const Container = styled.main`
  display: flex;
  width: 42rem;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .body-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;

    textarea {
      padding: 7px 9px;
      border: 1px solid #babfc3;
      height: 12rem;
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
