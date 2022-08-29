import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Search from "./Search";
import { BlueButton, LightBlueButton } from "./ui/Button";
import { ReactComponent as Stackoverflow } from "../assets/stack-overflow-brands.svg";

const Nav = () => {
  const [productsClick, setProductsClick] = useState(false);
  // 로그인 유무 판별
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header>
        <Container>
          <LogoContainer>
            <StyledLink to="/">
              <Stackoverflow width="30" height="35"></Stackoverflow>
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
        </Container>
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
          ) : null}
        </ButtonContainer>
      </Header>
    </>
  );
};

export default Nav;

const Header = styled.header`
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-column-gap: 10px;
  margin: 0 auto;
  height: 50px;
  width: 100%;
  min-width: auto;
  position: fixed;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  background: #f8f9f9;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27); */
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

  i {
    font-size: 20px;
    color: #f48023;
    padding-right: 2px;
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
    font-size: 14px;
    border-radius: 1000px;
    background: #f8f9f9;
    /* background: ${(productsClick) =>
      productsClick ? "orange" : "#F8F9F9"}; */
    /* color: ${(productsClick) => (productsClick ? "#FFF" : "#F8F9F9")}; */
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
  width: 100%;
  height: 100%;
`;
