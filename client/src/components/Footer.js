import React from "react";
import styled from "styled-components";
import { ReactComponent as Stackoverflow } from "../assets/stack-overflow-brands.svg";

const Footer = () => {
  return (
    <FooterBox>
      <FooterContainer>
        <FooterLogo>
          <a href="http://localhost:3001/">
            <Stackoverflow width="32" height="37"></Stackoverflow>
          </a>
        </FooterLogo>
        <FooterNav>
          <FooterCol>
            <h5>STACK OVERFLOW</h5>
            <ul>
              <li>
                <a href="http://localhost:3001/">Questions</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Help</a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol>
            <h5>PRODUCTS</h5>
            <ul>
              <li>
                <a href="http://localhost:3001/">Teams</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Advertising</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Collectives</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Talent</a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol>
            <h5>COMPANY</h5>
            <ul>
              <li>
                <a href="http://localhost:3001/">About</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Press</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Work Here</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Legal</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Privacy Policy</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Terms of Service</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Contact Us</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Cookie Settings</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Cookie Policy</a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              <li>
                <a href="http://localhost:3001/">Technology</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Culture & recreation</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Life & arts</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Science</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Professional</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Business</a>
              </li>
              <li>
                <a href="http://localhost:3001/">API</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Data</a>
              </li>
            </ul>
          </FooterCol>

          <FooterCopyright>
            <ListSocial>
              <li>
                <a href="http://localhost:3001/">Blog</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Facebook</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Twitter</a>
              </li>
              <li>
                <a href="http://localhost:3001/">LinkedIn</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Instagram</a>
              </li>
            </ListSocial>
            <Text>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under <span className="td-underline">CC BY-SA</span>.
              <span className="svnrev"> rev 2022.8.24.42908</span>
            </Text>
          </FooterCopyright>
        </FooterNav>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  background-color: #232629;
  color: #9199a1;
  display: flex;
`;

const FooterContainer = styled.div`
  display: flex;
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
`;

const FooterLogo = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 10px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;
const FooterCol = styled.div`
  flex: 1 0 auto;
  padding: 0 12px 24px 0;

  h5 {
    color: #babfc4;
    margin: 0px 0px 12px;
    font-size: 13px;
    font-weight: bold;
  }
  ul {
    flex-direction: column;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 4px 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
  }

  a {
    text-decoration: none;
    color: #9199a1;
    &:hover {
      color: #babfc4;
    }
  }
`;
const FooterCopyright = styled.div`
  display: flex;
  flex: 1 1 150px;
  flex-direction: column;
`;
const ListSocial = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0 4.3rem 0 0;
  color: #9199a1;
  justify-content: space-between;

  li {
    flex-direction: row;
    display: inline-block;
    padding: 4px 0.7rem 0 0;
    margin: 0;
    font-size: 11px;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: #9199a1;
    &:hover {
      color: #babfc4;
    }
  }
`;

const Text = styled.p`
  font-size: 11px;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 24px;
  line-height: 15px;

  .td-underline {
    text-decoration: underline;
  }

  .svnrev {
    vertical-align: baseline;
  }
`;
