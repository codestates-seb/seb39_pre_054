import React from "react";
import styled from "styled-components";

const PostsRight = () => {
  return (
    <Sidebarwidget1>
      <div className="header">How to Edit</div>
      <li className="body">
        <div className="text">
          <ul className="text-ul">
            <li>Correct minor typos or mistakes</li>
            <li>Clarify meaning without changing it</li>
            <li>Add related resources or links</li>
            <li>Always respect the author’s intent</li>
            <li>Don’t use edits to reply to the author</li>
          </ul>
        </div>
      </li>
    </Sidebarwidget1>
  );
};

export default PostsRight;

const Sidebarwidget1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 13rem;
  background-color: #fdf7e2;
  width: 19rem;
  margin: 2rem 0 0 1.5rem;
  border: 1px solid hsl(47, 65%, 84%);
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
  border-radius: 3px;

  .header {
    background-color: #fbf3d5;
    border-top: 1px solid hsl(47, 65%, 84%);
    border-bottom: 1px solid hsl(47, 65%, 84%);
    color: #525960;
    font-size: 15px;
    font-weight: 700;
    padding: 12px 15px;
  }

  .body {
    background-color: #fdf7e2;
    color: #232629;
    font-size: 13px;
    margin: 12px 0px;
    padding: 0px 16px;
    display: flex;
  }

  .text {
    padding-left: 0.4rem;
    line-height: 1.1rem;
  }

  .text-ul {
    margin: 0;
    padding: 0.5rem;

    li {
      padding-bottom: 0.5rem;
    }
  }
`;
