import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as StarVerified } from "../assets/starVerified.svg";
import { ReactComponent as BoardCase } from "../assets/board-case.svg";
import { ReactComponent as QuestionMark } from "../assets/question-mark.svg";

const LeftSide = () => {
  return (
    <>
      <Container>
        <Ol>
          <li className="li-title">
            <StyledLink to="/" className="home">
              Home
            </StyledLink>
          </li>
          <li className="li-title">PUBLIC</li>
          <li>
            <StyledLink to="/">
              <Globe fill="#666d72" />
              Questions
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/tags">
              <div>Tags</div>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/users">
              <div>Users</div>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/jobs/companies">
              <div>Companies</div>
            </StyledLink>
          </li>
          <li className="li-title">
            COLLECTIVES <QuestionMark fill="#666d72" />
          </li>
          <li>
            <StyledLink to="/collectives">
              <StarVerified fill="#f48024" />
              Explore Collectives
            </StyledLink>
          </li>
          <li className="li-title">
            TEAMS <QuestionMark fill="#666d72" />
          </li>
          <li>
            <StyledLink to="/teams/create">
              <div className="boarde-case-bgcolor">
                <BoardCase fill="white" />
              </div>
              Create free Team
            </StyledLink>
          </li>
        </Ol>
      </Container>
    </>
  );
};

export default LeftSide;

const Container = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  height: 100%;
  width: 184px;
  background: #ffffff;
  margin: 0;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
`;

const Ol = styled.ol`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  height: 100%;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
  cursor: pointer;

  li {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 16px;
    width: 100%;
    height: 40px;
    color: #666d72;
  }

  .li-title {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #666d72;

  :hover {
    background: #e3e6e8;
    border-right: 5px solid #f48024;
  }

  div {
    padding-left: 16px;
  }

  .boarde-case-bgcolor {
    display: flex;
    align-items: center;
    padding-left: 0;
    border-radius: 20%;
    background: #f48024;
  }
`;