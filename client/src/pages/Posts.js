import React from "react";
import LeftSide from "../components/LeftSide";
import PostsContent from "../components/PostsContent";
import PostsRight from "../components/PostsRight";
import { Left, MainContainer } from "./Main";
import useScrollTop from "../util/useScrollTop"

const Posts = () => {

  useScrollTop();
  
  return (
    <>
      <MainContainer>
        <Left>
          <LeftSide />
        </Left>
        <PostsContent />
        <PostsRight />
      </MainContainer>
    </>
  );
};

export default Posts;
