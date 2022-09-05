import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import LeftSide from "../components/LeftSide";
import MypageTop from "../components/MypageTop";
import {useParams, useNavigate} from "react-router-dom";



const MyPageEdit = () => {
  const [newname , setNewName] = useState({
  })
  const { id } = useParams();
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("authorization")}`,
  };

  const SaveProfile = () =>{
     axios.patch(
    `${process.env.REACT_APP_API_URI}/v1/members/${id}`,
     {name : newname , password :"gpwl3354"},
     { headers: headers}
     ).then((res) =>{
      navigate(`/users/${id}`)
       
     })

  }
  return (  
    
 <MainContainer>
  <Left>
  <LeftSide />
  </Left>
  <RightContainer>
    <div>
      <MypageTop></MypageTop>
     <Mypagediv>
       <Barnav>
         <ProfileNav>Profile</ProfileNav>
         <ProfileNav>Activity</ProfileNav>
         <ActivityNav>Settings</ActivityNav>
       </Barnav>
     </Mypagediv>

    <Underdiv>
      <Navdiv>
       <Navul>
         <Navlism>PERSONAL INFORMATION</Navlism>
         <Navcheck>Edit profile</Navcheck>
         <Navli>Delete profile</Navli>
         <Navli></Navli>
         <Navlism>EMAIL SETTINGS</Navlism>
         <Navli>Edit email settings</Navli>
         <Navli>Tag watching & ignoring</Navli>
         <Navli>Community digests</Navli>
         <Navli>Question subscriptions</Navli>
         <Navli></Navli>
         <Navlism>SITE SETTINGS</Navlism>
         <Navli>preferences</Navli>
         <Navli>Flair</Navli>
         <Navli>Hide communities</Navli>
         <Navli></Navli>
         <Navlism>ACCESS</Navlism>
         <Navli>Your Collectives</Navli>
         <Navli>Your logins</Navli>
         <Navli></Navli>
         <Navlism>APPS & INTEGRATIONS</Navlism>
         <Navli>Authorized applications</Navli>
       </Navul>
      </Navdiv>
      <Editdiv>
        <Profilediv>
        <H1>Edit your profile</H1>
        </Profilediv>
        <Fromdiv>Public information</Fromdiv>
        <Changediv>
          <Profilelabel>Profile image</Profilelabel>
          
          <ProfilImg />
          <Profilelabel>Display name</Profilelabel>
          <Inputname type={"text"} value = {newname} onChange = {(e) =>{
            setNewName(e.target.value)
          }}></Inputname>
        </Changediv>
        <LoginButton onClick={() => {
                  SaveProfile();
                }}>Save Profile</LoginButton>
      </Editdiv>
     </Underdiv>
  </div>
  </RightContainer>


</MainContainer> 
  );
};

export default MyPageEdit;

const Profilelabel = styled.div`
font-size: 15px;
padding: 0px 2px;
font-weight: 700;

`
const Editdiv = styled.div`
width: 100%;
`
const Fromdiv = styled.div`
margin: 0px 0px 8px;
font-size: 21px;
`

const Changediv = styled.div`
padding: 24px;
margin: 0px 0px 48px;
border: 1px solid #BABFC3;
border-radius: 5px;
display: flex;
flex-direction: column;
`
const Profilediv = styled.div`
  margin: 0px 0px 24px;
  padding: 0px;
  border-bottom: 1px solid #BABFC3;
  flex-direction: column;
`

const Mypagediv = styled.div`
  margin: 0px 0px 16px;
  display: flex;

`
const Underdiv = styled.div`
margin: 0px 0px 48px;
display: flex;
flex-direction: row;
`
const Left = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-start;
  height: 100%;
`;

const MainContainer = styled.div`
  top: 0;
  display: grid;
  grid-template-columns: 1fr 7.3fr;
  margin: 0 auto;
  width: 100%;
  `;

const RightContainer = styled.div`
  background-color: #FFFFFF;
  font-size: 13px;
  padding: 24px;

  border-left: 1px solid #BABFC3;
  `;

const Barnav = styled.div`
margin: -2px;
padding: 2px 0px;
display: flex;

`
const ProfileNav = styled.div`
margin: 2px;
padding: 6px 12px;
border-radius: 70px;
:hover{
  background-color: #F1F2F3;
}
/* .activity{
  background-color: #F48225;
} */
`
const ActivityNav = styled.div`
margin: 2px;
padding: 6px 12px;
border-radius: 70px;
color: white;
:hover{
  background-color: rgb(204,110,44);
}
background-color: #F48225;
`
const Navul = styled.ul`
display: flex;
flex-direction: column;
background-color: white;
list-style:none;
padding-left:0px;

`
const Navli = styled.li`
padding: 6px 48px 6px 12px;
font-size: 13px;
border-radius : 70px;
`
const Navcheck = styled.li`
padding: 6px 48px 6px 12px;
font-size: 13px;
border-radius : 70px;
background-color: #F48225;
color: white;
`
const Navdiv = styled.nav`
margin: 0px 32px 0px 0px;
background-color: white;
`
const Navlism = styled.li`
padding: 6px 12px;
font-size: 11px;
border-radius : 70px;
font-weight: 700;
`
const H1 = styled.h1`
font-weight: 500;
font-size: 27px;
`
export const ProfilImg = styled.img`
width: 164px;
height: 164px;
margin: 5px 0px 0px 0px;
border-radius: 5px;
background-color: #636b74;
`
const Inputname = styled.input`
padding: 7.8px 9.1px;
margin: 7px 0px 0px 0px ;
`
export const SocialButton = styled.button`
  width: 120px;
  height: 34px;
  padding: 10.4px;
  margin: 4px 0px;
  border-radius: 5px;
  border: solid rgb(186, 191, 196);
  border-width: 1px;
  padding: 0.8em;
`;
export const LoginButton = styled(SocialButton)`
  border: 1px solid #2584f4;
  background: #0a95ff;
  font-size: 13px;
  color: white;
  font-weight: bold;
  margin: 4px 0px;
  :hover {
    background: #2584f4;
  }
`;