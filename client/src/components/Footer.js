// import axios from 'axios';
import React from "react";
// import styled from 'styled-components';
import "./Footer.css";
import { ReactComponent as Stackoverflow } from "../assets/stack-overflow-brands.svg";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="logo">
          <Stackoverflow width="30" height="35"></Stackoverflow>
        </div>
        <div class="row">
          <div class="col">
            <h5>STACK OVERFLOW</h5>
            <ul>
              <li>
                <a href="http://localhost:3001/">Questions</a>
              </li>
              <li>
                <a href="http://localhost:3001/">Help</a>
              </li>
            </ul>
          </div>
          <div class="col">
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
          </div>
          <div class="col">
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
          </div>
          <div class="col">
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
          </div>
        </div>

        <div class="row-right">
          {/* <div class='col grow'></div> */}
          <div class="col">
            {/* <div class='row text-right'> */}
            <ul class="row">
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
              <p>
                Site design / logo © 2022 Stack Exchange Inc; user contributions
                licensed under CC BY-SA. rev 2022.8.24.42908
              </p>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
