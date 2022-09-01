import React, { useState } from "react"
import "../pages.css"
import styled from "styled-components"
import GithubIcon from "../assets/github-brands.svg"
import FacebookIcon from "../assets/square-facebook-brands.svg"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
// import { useDispatch , useSelector} from "react-redux"
import axios from "axios"




// 로그인 페이지
const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  


  const Logincheck = () =>
  {
    axios.post("",{

    }).then((response) =>{
      console.log("ok")
      localStorage.setItem("token" , response.data.jwt);
      navigate(`/`)
    })
  }
  return (<>
<div className="content">
 <div className="login_box">
    <div className="img_box"> </div>
    <div className="icon_box">
    <img src = {process.env.PUBLIC_URL+"/img/login_logo.png"} className ="stack_logo" alt="logo"></img>
    </div>
    <div className="social">
         <GoogleButton><LogoImage src={process.env.PUBLIC_URL+"/img/googleimage.png"}></LogoImage>Log in with Google</GoogleButton>
         <GitHubButton><LogoImage src = {GithubIcon}></LogoImage>Log in with GitHub</GitHubButton>
        <FacebookButton><LogoImage src = {FacebookIcon}></LogoImage>Log in with Facebook</FacebookButton>
    </div>
    <div className="form_container">
        <form id="login-form">
              <Inputdiv>
              <Inputlabel>Email</Inputlabel>
              <InputText type={"email"}></InputText>
              <InputMessage>The email is not a valid email address.</InputMessage>
              </Inputdiv>
              <Inputdiv>
              <Inputlabel>Password</Inputlabel>
              <InputText type={"password"}></InputText>
              <InputMessage>Password cannot be empty.</InputMessage>
            </Inputdiv>
            <LoginButton type="button" onClick={() =>{
            Logincheck();
          }}>Log in</LoginButton>
          </form>
        </div>
      </div>
       <Choicediv>
      Dont' have an account? 
      <br></br>
      <StyledLink to="/users/signup">
        Sign up
      </StyledLink>

    </Choicediv>
    </div>

  </>
  )
};
export default Login;

export const LogoImage = styled.img`
margin: -3.9px 5px;
height: 18px;
width: 18px;

`
export const Inputlabel = styled.label`

margin : 2px 0px;
padding: 0px 2px;
font-size: 15px;
font-weight: 600;
`
export const InputText = styled.input`
padding: 7.8px 9.1px;
border: solid rgb(186, 191, 196);
border-width : 1px;
border-radius: 3px;
`

export const Inputdiv = styled.div`

margin: 6px 0px;
display: flex;
flex-direction: column;
justify-content: space-between;



`

export const SocialButton = styled.button`
width: 100%;
height: 37.8px;
padding: 10.4px;
margin: 4px 0px;
border-radius: 5px;
border: solid rgb(186, 191, 196);
border-width: 1px;
padding: 0.8em;


`
export const GoogleButton = styled(SocialButton)`
background-color: white;
:hover{
    background-color: rgb(248,249,249);
}
`
export const GitHubButton = styled(SocialButton)`
 background-color: rgb(47,52,55);
  :hover{
    background-color:rgb(35,39,41) ;
  }
  color: white;
  font-weight: bolder;
`
export const FacebookButton = styled(SocialButton)`

  background-color: rgb(56,84,153);
  :hover{
    background-color:rgb(54,60,121) ;
  }
  color: white;
  font-weight: bolder;
  
`
export const LoginButton = styled(SocialButton)`
border: 1px solid #2584f4;
background: #0a95ff;
color: white;
font-weight: bold;
margin: 4px 0px;
:hover{
  background: #2584f4;
  }
`;
const InputMessage = styled.p`
margin: 2px 0px;
padding: 2px;
font-size: 12px;
color: #d03932;
display: none;
`
const Choicediv = styled.div`
margin: 0px 0px 24px;
padding : 16px;
font-size: 13px;
text-align: center;


`
const StyledLink = styled(Link)`
  color:rgb(14,149,255);
  text-decoration-line: none;
`

