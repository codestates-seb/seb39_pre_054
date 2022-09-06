import React from "react";
import LeftSide from "../components/LeftSide";
import QuestionEditContent from "../components/QuestionEditContent";
import PostsRight from "../components/PostsRight";
import { Left, MainContainer } from "./Main";
import useScrollTop from "../util/useScrollTop"

const QuestionEdit = () => {

  useScrollTop();
  
  return (
    <>
      <MainContainer>
        <Left>
          <LeftSide />
        </Left>
        <QuestionEditContent />
        <PostsRight />
      </MainContainer>
    </>
  );
};

export default QuestionEdit;
