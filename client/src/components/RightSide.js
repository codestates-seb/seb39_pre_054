// import axios from 'axios';
import React from "react";
import styled from "styled-components";
import { ReactComponent as Pencil } from "../assets/pencil.svg";
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
            <img
              src={`${process.env.PUBLIC_URL}/img/speech_balloon.png`}
              alt="speech_balloon"
            ></img>
          </div>
          <div className="text">
            <a href="http://localhost:3001/">
              Recent site instablity, major outages - July/August 2022
            </a>
          </div>
        </li>
        <li className="body">
          <div className="icon">
            <img
              src={`${process.env.PUBLIC_URL}/img/speech_balloon.png`}
              alt="speech_balloon"
            ></img>
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
            <div className="icon-spotsearch">
              <Spotsearch width="48" height="48" fill="#0a95ff"></Spotsearch>
            </div>
            <p>Watch tags to curate your list of questions.</p>
            <div className="button">
              <StyledLink to="http://localhost:3001/">
                <LightBlueButton2>
                  {/* <div className="icon-eye">
                    <Eye fill="#39739d"></Eye>
                  </div> */}
                  <div>Watch a tag</div>
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
        </div>
      </Sidebarwidget4>

      <Sidebarwidget5>
        <div className="header">
          Collectives
          <a
            className="sidebarwidget5-action"
            href="https://stackoverflow.com/collectives-all"
          >
            see all
          </a>
        </div>
        <div className="sidebarwidget-items">
          <div className="box-stretch">
            <div className="box">
              <div className="item1">
                <div className="avatar">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/gitlab_logo.png`}
                    alt="gitlab_logo"
                  ></img>
                </div>
              </div>
              <div className="item2">
                <a href="https://stackoverflow.com/collectives/gitlab">
                  GitLab
                </a>
                <div className="caption">18k Members</div>
              </div>
              <div className="itme3">
                <form>
                  <button className="btn-outlined">Join</button>
                </form>
              </div>
            </div>
          </div>
          <p className="break-word">
            GitLab is the open DevOps platform, delivered as a single
            application. Our open source collaboration is a great place to share
            and learn information about version control, CI/CD, DevSecOps, and
            all-remote workflows.
          </p>
        </div>

        <div className="sidebarwidget-items">
          <div className="box-stretch">
            <div className="box">
              <div className="item1">
                <div className="avatar">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/gitlab_logo.png`}
                    alt="gitlab_logo"
                  ></img>
                </div>
              </div>
              <div className="item2">
                <a href="https://stackoverflow.com/collectives/intel">Intel</a>

                <div className="caption">6k Members</div>
              </div>
              <div className="itme3">
                <form>
                  <button className="btn-outlined">Join</button>
                </form>
              </div>
            </div>
          </div>
          <p className="break-word">
            A space for developers to collaborate on Intel software tools,
            libraries, and resources. Share knowledge and connect with Intel
            product experts. Find the information you need to drive innovation
            and simplify development from edge to cloud with Intel.
          </p>
        </div>

        <div className="sidebarwidget-items">
          <div className="box-stretch">
            <div className="box">
              <div className="item1">
                <div className="avatar">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/gitlab_logo.png`}
                    alt="gitlab_logo"
                  ></img>
                </div>
              </div>
              <div className="item2">
                <a href="https://stackoverflow.com/collectives/twilio">
                  Twilio
                </a>

                <div className="caption">4k Members</div>
              </div>
              <div className="itme3">
                <form>
                  <button className="btn-outlined">Join</button>
                </form>
              </div>
            </div>
          </div>
          <p className="break-word">
            Twilio has democratized channels like voice, text, chat, video, and
            email by virtualizing the world’s communications infrastructure
            through APIs that are simple enough for any developer, yet robust
            enough to power the world’s most demanding applications.
          </p>
        </div>
      </Sidebarwidget5>
    </Aside>
  );
};

export default RightSide;

const Aside = styled.aside``;

const Sidebarwidget1 = styled.div`
  list-style: none;
  background-color: #fdf7e2;
  width: 19rem;
  margin: 1.9rem 0 0 1.5rem;
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
  }

  .container {
    .icon-spotsearch {
      text-align: center;
    }

    p {
      color: #6a737c;
      font-size: 13px;
      margin: 14px 12px 11px 12px;
      text-align: center;
    }

    .button {
      width: 6rem;
      height: 35px;
      margin: auto;
      padding: 9.5px 9.5px 0 9.5px;
      font-size: 12px;
      /* .icon-eye {
        width: 18px;
        height: 18px;
      } */
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
  margin: 1rem 0 0 1.5rem;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    font-weight: 500;
    color: #525960;
  }

  .sidebarwidget5-action {
    font-size: 11px;
    color: #0074cc;
    margin: 0 0 4px 8px;
    text-decoration: none;
    float: right;
    line-height: 19.5px;
    :hover {
      color: #0a95ff;
    }
  }

  .sidebarwidget-items {
    padding: 16px 15px;
    border-top: 1px solid #d6d9dc;
  }

  .box-stretch {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .box {
    display: flex;
    /* flex: 1 auto; */
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
  .item1 {
    margin-right: 12px;
  }
  .avatar {
    width: 32px;
    height: 32px;
    display: flex;
    /* text-align: center; */
  }
  img {
    width: 17px;
    height: 17px;
    justify-content: center;
    margin: auto;
  }

  .item2 {
    /* flex: 1 auto; */
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }

  a {
    font-size: 15px;
    font-weight: 500;
    color: #6a737c;
    text-decoration: none;
  }

  .caption {
    font-size: 12px;
    margin: 0 0 8px;
    color: #3b4045;
  }

  .item3 {
    background-color: blue;
  }

  form {
  }

  .btn-outlined {
    position: relative;
    display: inline-block;
    padding: 9.6px;
    color: #0074cc;
    font-size: 12px;
    background-color: #ffffff;
    border: 1px solid #0074cc;
    border-radius: 3px;
    :hover {
      background-color: #f0f8ff;
      cursor: pointer;
    }
  }

  .break-word {
    white-space: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 268px;
    height: 34px;
    color: #3b4045;
    font-size: 13px;
    margin: 0;
    line-height: 16px;
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
