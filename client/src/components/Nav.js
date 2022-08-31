import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Search from "./Search";
import { BlueButton, LightBlueButton } from "./ui/Button";
import { ReactComponent as Stackoverflow } from "../assets/stack-overflow-brands.svg";
import { ReactComponent as Inbox } from "../assets/inbox.svg";
import { ReactComponent as TrophyStar } from "../assets/trophy-star.svg";
import { ReactComponent as Question } from "../assets/circle-question.svg";
import { ReactComponent as StackExchange } from "../assets/stack-exchange.svg";

const Nav = () => {
  const [productsClick, setProductsClick] = useState(false);
  const [optionClick, setOptionClick] = useState(true);
  // 로그인 유무 판별
  const [isLogin, setIsLogin] = useState(true);

  const stackExchangeClick = () => {
    setOptionClick(!optionClick);
    console.log(optionClick);
  };

  return (
    <>
      <HeaderTop></HeaderTop>
      <Header>
        <Container>
          <LogoContainer>
            <StyledLink to="/">
              <Stackoverflow width="26" height="31"></Stackoverflow>

              <span>
                stack<b>overflow</b>
              </span>
            </StyledLink>
          </LogoContainer>
          {!isLogin && (
            <Tab>
              <span>About</span>
            </Tab>
          )}
          <Tab onClick={() => setProductsClick(!productsClick)}>
            <span>Products</span>
          </Tab>
          {!isLogin && (
            <Tab>
              <span>ForTeams</span>
            </Tab>
          )}
          <Search />

          <ButtonContainer>
            {!isLogin ? (
              <>
                <StyledLink to="/users/login">
                  <LightBlueButton>Login</LightBlueButton>
                </StyledLink>
                <StyledLink to="/users/signup">
                  <BlueButton>Sign up</BlueButton>
                </StyledLink>
              </>
            ) : (
              <Ol>
                <li>
                  <Profile>
                    <StyledLink to="/users/1">
                      <img />
                    </StyledLink>
                    <div className="">1</div>
                  </Profile>
                </li>
                <li>
                  <Inbox />
                </li>
                <li>
                  <TrophyStar />
                </li>
                <li>
                  <Question />
                </li>
                <li onClick={stackExchangeClick}>
                  <StackExchange />
                </li>
                <li className="dropdown">
                  {optionClick && (
                    <Dropdown>
                      <div className="dropdown-title">CURRENT COMMUNITY</div>
                      <div>
                        <div><Stackoverflow width="16px" height="21px"></Stackoverflow> Stack Overflow</div>
                      </div>
                    </Dropdown>
                  )}
                </li>
              </Ol>
            )}
          </ButtonContainer>
        </Container>
      </Header>
    </>
  );
};

export default Nav;

const HeaderTop = styled.div`
  position: fixed;
  background: #f48024;
  width: 100%;
  height: 2px;
  top: 0;
  z-index: 1000;
`;

const Header = styled.header`
  position: fixed;
  top: 2px;
  display: flex;
  justify-content: center;
  /* grid-template-columns: 1fr 240px;
  grid-column-gap: 10px; */
  margin: 0 auto;
  height: 50px;
  width: 100%;
  min-width: auto;
  position: fixed;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  background: #f8f9f9;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 84.8rem;
  height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;

  :hover {
    background: #e3e6e8;
  }

  span {
    padding-left: 3px;
    font-size: 1.2rem;
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 7.5px;
  cursor: pointer;

  span {
    padding: 7.5px;
    border-radius: 1000px;
    background: #f8f9f9;
    font-size: 14px;
  }

  span:hover {
    background: #e3e6e8;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 100%;
  padding: 0 0.75rem;
`;

const Ol = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 0.75rem;
    float: left;
    flex-grow: 1;
  }

  li:hover {
    background: #e3e6e8;
  }

  .dropdown {
    display: flex;
    justify-content: flex-end;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    background-color: #000;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  display: block;
  background-color: #f1f2f3;
  max-width: 1300px;
  width: 20rem;
  top: 50px;

  .dropdown-title {
    display: flex;
    align-items: center;
    padding: 6px;
    color: #0074cc;
    font-size: 11px;
    font-weight: bold;
    height: 1.2rem;
  }

  .dropdown-content {
  }
`;
