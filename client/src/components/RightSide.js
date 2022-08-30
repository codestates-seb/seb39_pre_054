// import axios from 'axios';
import React from "react";
import styled from "styled-components";
import { ReactComponent as Pencil } from "../assets/pencil.svg";
import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as Spotsearch } from "../assets/spotsearch.svg";
import { Link } from "react-router-dom";
import { LightBlueButton2 } from "./ui/Button";

const RightSide = () => {
  return (
    <Aside>
      <Sidebarwidget1>
        <li className="header">The Overflow Blog</li>
        <li className="body">
          <div className="icon">
            <Pencil width="14" height="14"></Pencil>
          </div>
          <div className="text">
            <a href="http://localhost:3001/">
              Open source and accidental innovation
            </a>
          </div>
        </li>

        <li className="body">
          <li className="icon">
            <Pencil width="14" height="14"></Pencil>
          </li>
          <li className="text">
            <a href="http://localhost:3001/">
              The luckiest guy in AI (Ep. 477)
            </a>
          </li>
        </li>

        <li className="header">Featured on Meta</li>

        <li className="body">
          <div className="icon">
            <img src={`${process.env.PUBLIC_URL}/img/speech_balloon.png`} alt="speech_balloon"></img>
          </div>
          <div className="text">
            <a href="http://localhost:3001/">
              Recent site instablity, major outages - July/August 2022
            </a>
          </div>
        </li>
        <li className="body">
          <div className="icon">
            <img src={`${process.env.PUBLIC_URL}/img/speech_balloon.png`} alt="speech_balloon"></img>
          </div>
          <div className="text">
            <a href="http://localhost:3001/">
              Please welcome Valued Associate #1301 - Emerson
            </a>
          </div>
        </li>
        <li className="body">
          <div className="icon-stackoverflow_logo_black">
            <img
              src={`${process.env.PUBLIC_URL}/img/stackoverflow_logo_black.png`}
              alt="stackoverflow_logo_black"
            ></img>
          </div>
          <div className="text">
            <a href="http://localhost:3001/">
              Staging Ground Workflow: Question Lifecycle
            </a>
          </div>
        </li>

        <li className="header">Hot Meta Posts</li>

        <li className="body">
          <div className="num">12</div>
          <div className="text">
            <a href="http://localhost:3001/">
              How can/should we broaden questions where the same problem can
              manifest in...
            </a>
          </div>
        </li>
      </Sidebarwidget1>

      <Sidebarwidget2>
        <div className="header">Custom Filters</div>
        <ul>
          <li>
            <a href="http://localhost:3001/">Create a custom filter</a>
          </li>
        </ul>
      </Sidebarwidget2>
      <Sidebarwidget3>
        <div className="header">Watched Tags</div>
        <div className="body">
          <div className="container">
            <div className="icon">
              <Spotsearch width="48" height="48" fill="#0a95ff"></Spotsearch>
            </div>
            <p>Watch tags to curate your list of questions.</p>
            <div className="button">
              <StyledLink to="http://localhost:3001/">
                <LightBlueButton2>
                  <div className="icon">
                    <Eye fill="#2c5877"></Eye>
                  </div>
                  Watch a tag
                </LightBlueButton2>
              </StyledLink>
            </div>
          </div>
        </div>
      </Sidebarwidget3>
      <Sidebarwidget4>
        <div className="header">Ignored Tags</div>
        <div>
          <StyledLink to="http://localhost:3001/">
            <LightBlueButton2>Add an ignored tag</LightBlueButton2>
          </StyledLink>
          {/* <button>Add an ignored tag</button> */}
        </div>
      </Sidebarwidget4>
      <Sidebarwidget5>
        <div className="header">
          <a></a>Collectives
        </div>
        <div>
          <div>
            <div>
              <div className="icon">
                <div>
                  <h1>
                    <a></a>
                  </h1>
                </div>
                <button></button>
              </div>
            </div>
          </div>
          <span></span>
        </div>

        <div></div>
        <div></div>
      </Sidebarwidget5>
    </Aside>
  );
};

const Aside = styled.aside`
  /* width: 25rem; */
  /* background-color: blueviolet; */
`;

const Sidebarwidget1 = styled.div`
  list-style: none;
  background-color: #fdf7e2;
  width: 19rem;
  margin: 4.8rem 0 0 1.5rem;
  border: 1px solid hsl(47, 65%, 84%);
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
  border-radius: 3px;

  .header {
    background-color: #fbf3d5;
    border-top: 1px solid hsl(47, 65%, 84%);
    border-bottom: 1px solid hsl(47, 65%, 84%);
    color: #525960;
    font-size: 12px;
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

  img {
    width: 18px;
    height: 18px;
  }

  li .icon-stackoverflow_logo_black img {
    width: 13px;
    height: 13px;
    padding-left: 0.2rem;
  }

  li .num {
    width: 13px;
    height: 13px;
    padding-left: 0.2rem;
    color: #525960;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Sidebarwidget2 = styled.div`
  width: 19rem;
  margin: 1rem 0 0 1.5rem;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
    font-weight: 500;
    color: #525960;
  }
  ul {
    list-style: none;
    padding: 2px 15px;
  }

  li {
    font-size: 13px;
    font-weight: 500;
    color: #0074cc;

    &:hover {
      font-weight: 500;
      color: #0a95ff;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Sidebarwidget3 = styled.div`
  width: 19rem;
  height: 14.3rem;
  margin: 1rem 0 0 1.5rem;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
    font-weight: 500;
    color: #525960;
  }

  .body {
    padding: 16px 15px;
    margin: 6px 20px;
  }

  .container {
    .icon {
      text-align: center;
    }

    p {
      color: #6a737c;
      font-size: 13px;
      margin: 8px 0;
      text-align: center;
    }

    .button {
      display: flex;
      flex-wrap: wrap;
      width: 8rem;
      margin: auto;
      padding: 9.5px;
      font-size: 12px;
      .icon {
        text-align: center;
        width: 18px;
        height: 18px;
      }
    }
  }
`;
const Sidebarwidget4 = styled.div`
  width: 19rem;
  margin: 1rem 0 0 1.5rem;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
    font-weight: 500;
    color: #525960;
  }
  div {
    padding: 16px 15px;
  }
  button {
    margin: 0 71px;
    padding: 9.5px;
    font-size: 12px;
  }
`;
const Sidebarwidget5 = styled.div`
  width: 19rem;
  height: 25rem;
  margin: 1rem 0 0 1.5rem;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
    font-weight: 500;
    color: #525960;
  }
  div {
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

export default RightSide;
