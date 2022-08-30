import React, { useState  , useEffect} from "react";
import "../pages.css";
import styled from "styled-components";
import { GoogleButton , GitHubButton , FacebookButton , LoginButton , LogoImage , Inputlabel , Inputdiv , InputText} from "./Login"
import GithubIcon from "../assets/github-brands.svg"
import FacebookIcon from "../assets/square-facebook-brands.svg"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")


  //오류확인
  const [nameError , setNameError] = useState({display  :"none"});
  const [nonameError , setnoNameError] = useState({display : "none"})
  const [emailError , setEmailError] = useState({display : "none"})
  const [noemailError , setnoEmailError] = useState({display : "none"})
  const [passwordError , setPasswordError] = useState({display : "none"})
  const [nopasswordError , setnoPasswordError] = useState({display : "none"})
  

  const register = () =>{
    axios.post("http://localhost:3001/signup",{
      name : name ,
      email : email,
      password :password,
    }).then((response) =>{
      console.log(response)
      localStorage.setItem('token' , response.data.jwt)
    })
    .catch(function(error){
      console.log(error)
    })
  }


  
  return(
  <Signupdiv>
    <Signupdiv className="content">
      <Signupdiv className="center">
        <Signupdiv className="body1">
          <h1 className="bodyh1">Join the Stack Overflow community</h1>
          <Body1div><Body1img src={process.env.PUBLIC_URL+"/img/join1.png"}></Body1img>
          <div>Get unstuck — ask a question</div></Body1div>
          <Body1div><Body1img src={process.env.PUBLIC_URL+"/img/join2.png"}></Body1img>
          <div>Unlock new privileges like voting and commenting</div></Body1div>
          <Body1div><Body1img src={process.env.PUBLIC_URL+"/img/join3.png"}></Body1img>
          <div>Save your favorite tags, filters, and jobs</div></Body1div>
          <Body1div><Body1img src={process.env.PUBLIC_URL+"/img/join4.png"}></Body1img>
          <div>Earn reputation and badges</div></Body1div>
          <div className="last">
            Collaborate and share knowledge with a private group for FREE.
            <br></br>
          </div>
        </Signupdiv>
        <Signupdiv className="body2">
          <Signupdiv className="button2">
          <GoogleButton><LogoImage src={process.env.PUBLIC_URL+"/img/googleimage.png"}></LogoImage>Sign up with Google</GoogleButton>
          <GitHubButton><LogoImage src = {GithubIcon}></LogoImage>Sign up with GitHub</GitHubButton>
        <FacebookButton><LogoImage src = {FacebookIcon}></LogoImage>Sign up with Facebook</FacebookButton>
        </Signupdiv>
        <div className="form_container">
        <form id="login-form">
          <Inputdiv>
          <Inputlabel>Display name</Inputlabel>
          <InputText id = "name"type={"text"} 
          value = {name} 
          onChange = {(e) =>{
            setName(e.target.value)
          }}></InputText>
          <ErrorP id="nameError"
          style = {nameError}>
            Name already exists
          </ErrorP>
          <ErrorP id= "nonameError"
          style={nonameError}>
            Name cannot be empty.
          </ErrorP>
          </Inputdiv>

          <Inputdiv>
          <Inputlabel>Email</Inputlabel>
          <InputText type={"email"}
          value = {email}
          onChange = {(e) =>{
            setEmail(e.target.value)
          }}></InputText>
            <ErrorP id="emailError">
            Please check email
          </ErrorP>
          <ErrorP id="noemailError">
            Email cannot be empty.
          </ErrorP>
          </Inputdiv>
          <Inputdiv>
          <Inputlabel>Password</Inputlabel>
          <InputText type={"password"}
          value = {password}
          onChange = {(e) =>{
            setPassword(e.target.value)
          }}></InputText>
          <ErrorP id="pwError">
            Please check password
          </ErrorP>
          <ErrorP id="nopwError">
          Password cannot be empty.
          </ErrorP>
          </Inputdiv>
          <div className="last2">
          Passwords must contain at least eight characters, including at least 1 letter and 1 number.      
          </div>
          <LoginButton type="button" onClick={() =>{
            register();
          }}>Sign up</LoginButton>
        </form>
        </div>

        </Signupdiv>

      </Signupdiv>
    </Signupdiv>
  </Signupdiv>

  )
};

export default Signup;

const Signupdiv = styled.div`
background-color:#F1F2F3 ;
.content{
  padding: 74px 24px 24px 24px;
  display : flex;
  justify-content: center;
  align-items : center;
  height: 100%;

}
.button2{
  margin: -4px 0px 16px;
}
.center{
  display: flex;
}
.body1{
  margin: 0px 48px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.last{
  font-size: 13px;
  color : #6A737C
}
.last2{
  font-size: 12px;
  color : #6A737C;
  margin: 4px 0px ;

}
.body2{
  width: 316px;
}

`
const Body1div = styled.div`
margin: 0px 0px 24px;
display: flex;
font-size: 15px;

`
const Body1img = styled.img`
margin: -2px 0px 0px;
width: 25px;
height: 25px;

`
const ErrorP = styled.p`
margin: 2px 0px;
padding: 2px;
color: #D0393E;
font-size: 12px;


`



