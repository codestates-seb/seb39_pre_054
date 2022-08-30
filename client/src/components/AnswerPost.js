import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlueButton, WhiteBox } from "./ui/Button";

const AnswerPost = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const [questionPost, setQuestionPost] = useState({
  //   title: location.state.title,
  //   body: location.state.body,
  // });

  // const titleChange = (el) => {
  //   setQuestionPost({ ...questionPost, title: el });
  // };

  // const bodyChange = (el) => {
  //   setQuestionPost({ ...questionPost, body: el });
  // };

  // const saveClick = () => {
  //   axios
  //     .patch(
  //       `http://localhost:3001/answer/${location.state.id}`,
  //       questionPost
  //     )
  //     .then((res) => navigate(`/answer/${location.state.id}`))
  //     .catch((err) => console.log(err));
  // };

  // const cancleClick = () => {
  //   navigate(`/answer/${location.state.id}`);
  // };

  return (
    <Container>
      <ContentInfo>
        <form>
          <div className="body-container">
            <textarea
              id="body"
              // defaultValue={location.state.body}
              // onChange={(el) => bodyChange(el.target.value)}
            />
          </div>
          <div className="button-container">
            <BlueButton
              type="button"
              height="40px"
              width="10rem"
              // onClick={saveClick}
            >
              Post Your Answer
            </BlueButton>
            <WhiteBox height="40px" width="100px" 
            // onClick={cancleClick}
            >
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
  width: 38rem;
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
