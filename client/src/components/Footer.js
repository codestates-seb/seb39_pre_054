// import axios from 'axios';
import React from 'react';
// import styled from 'styled-components';
import './Footer.css';
import { ReactComponent as Stackoverflow } from '../assets/stack-overflow-brands.svg';

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className='logo'>
          <Stackoverflow width='30' height='35'></Stackoverflow>
        </div>
        <div class='row'>
          <div class='col'>
            <h5>STACK OVERFLOW</h5>
            <ul>
              <li>
                <a href='#'>Questions</a>
              </li>
              <li>
                <a href='#'>Help</a>
              </li>
            </ul>
          </div>
          <div class='col'>
            <h5>PRODUCTS</h5>
            <ul>
              <li>
                <a href='#'>Teams</a>
              </li>
              <li>
                <a href='#'>Advertising</a>
              </li>
              <li>
                <a href='#'>Collectives</a>
              </li>
              <li>
                <a href='#'>Talent</a>
              </li>
            </ul>
          </div>
          <div class='col'>
            <h5>COMPANY</h5>
            <ul>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Press</a>
              </li>
              <li>
                <a href='#'>Work Here</a>
              </li>
              <li>
                <a href='#'>Legal</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Terms of Service</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
              <li>
                <a href='#'>Cookie Settings</a>
              </li>
              <li>
                <a href='#'>Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div class='col'>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              <li>
                <a href='#'>Technology</a>
              </li>
              <li>
                <a href='#'>Culture & recreation</a>
              </li>
              <li>
                <a href='#'>Life & arts</a>
              </li>
              <li>
                <a href='#'>Science</a>
              </li>
              <li>
                <a href='#'>Professional</a>
              </li>
              <li>
                <a href='#'>Business</a>
              </li>
              <li>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'>API</a>
              </li>
              <li>
                <a href='#'>Data</a>
              </li>
            </ul>
          </div>
        </div>

        <div class='row-right'>
          {/* <div class='col grow'></div> */}
          <div class='col'>
            {/* <div class='row text-right'> */}
            <ul class='row'>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>Twitter</a>
              </li>
              <li>
                <a href='#'>LinkedIn</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
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
