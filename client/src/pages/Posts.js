import React from "react";
import LeftSide from "../components/LeftSide";
import PostsContent from "../components/PostsContent";
import PostsRight from "../components/PostsRight";
import { Left, MainContainer } from "./Main";

const Posts = () => {
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
