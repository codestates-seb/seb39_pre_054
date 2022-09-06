import React from "react";
import LeftSide from "../components/LeftSide";
import AnswerEditContent from "../components/AnswerEditContent";
import PostsRight from "../components/PostsRight";
import { Left, MainContainer } from "./Main";
import useScrollTop from "../util/useScrollTop";

const AnswerEdit = () => {
  useScrollTop();

  return (
    <>
      <MainContainer>
        <Left>
          <LeftSide />
        </Left>
        <AnswerEditContent />
        <PostsRight />
      </MainContainer>
    </>
  );
};

export default AnswerEdit;
