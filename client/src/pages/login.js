import React from 'react';
import '../pages.css';
import styled from 'styled-components';
import GoogleIcon from '../assets/google-brands.svg';
import GithubIcon from '../assets/github-brands.svg';
import FacebookIcon from '../assets/square-facebook-brands.svg';

// 로그인 페이지
const Login = () => {
  return (
    <div className='content'>
      <div className='login_box'>
        <div className='img_box'> </div>
        <div className='icon_box'>
          <img
            src={process.env.PUBLIC_URL + '/img/login_logo.png'}
            className='stack_logo'
            alt='logo'
          ></img>
        </div>
        <div className='social'>
          <GoogleButton>
            <LogoImage src={GoogleIcon}></LogoImage>Log in with Google
          </GoogleButton>
          <GitHubButton>
            <LogoImage src={GithubIcon}></LogoImage>Log in with GitHub
          </GitHubButton>
          <FacebookButton>
            <LogoImage src={FacebookIcon}></LogoImage>Log in with Facebook
          </FacebookButton>
        </div>
        <div className='form_container'>
          <form id='login-form'>
            <Inputdiv>
              <Inputlabel>Email</Inputlabel>
              <InputText></InputText>
              <InputMessage>
                The email is not a valid email address.
              </InputMessage>
            </Inputdiv>
            <Inputdiv>
              <Inputlabel>Password</Inputlabel>
              <InputText></InputText>
              <InputMessage>Password cannot be empty.</InputMessage>
            </Inputdiv>
            <LoginButton>Log in</LoginButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

const LogoImage = styled.img`
  margin: -3.9px 5px;
  height: 18px;
  width: 18px;
`;
const Inputlabel = styled.label`
  margin: 2px 0px;
  padding: 0px 2px;
  font-size: 15px;
  font-weight: 600;
`;
const InputText = styled.input`
  padding: 7.8px 9.1px;
  border: solid rgb(186, 191, 196);
  border-width: 1px;
  border-radius: 3px;
`;

const Inputdiv = styled.div`
  margin: 6px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SocialButton = styled.button`
  width: 100%;
  height: 37.8px;
  padding: 10.4px;
  margin: 4px 0px;
  border-radius: 5px;
  border: solid rgb(186, 191, 196);
  border-width: 1px;
  padding: 0.8em;
`;
const GoogleButton = styled(SocialButton)`
  background-color: white;
  :hover {
    background-color: rgb(248, 249, 249);
  }
`;
const GitHubButton = styled(SocialButton)`
  background-color: rgb(47, 52, 55);
  :hover {
    background-color: rgb(35, 39, 41);
  }
  color: white;
  font-weight: bolder;
`;
const FacebookButton = styled(SocialButton)`
  background-color: rgb(56, 84, 153);
  :hover {
    background-color: rgb(54, 60, 121);
  }
  color: white;
  font-weight: bolder;
`;
const LoginButton = styled(SocialButton)`
  background-color: rgb(14, 149, 255);
  margin: 4px 0px;
  :hover {
    background-color: rgb(59, 95, 194);
  }
`;
const InputMessage = styled.p`
  margin: 2px 0px;
  padding: 2px;
  font-size: 12px;
  color: #d03932;
  display: none;
`;
