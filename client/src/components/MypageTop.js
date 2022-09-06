import React from "react";
import styled from "styled-components";
import BirthdayIcon from "../assets/cake-candles-solid.svg"
import Pen from "../assets/pen-solid.svg"
import seicon from "../assets/se-icon.svg"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const MypageTop = () =>{ 
  const { id } = useParams();
  const [myname , setMyname] = useState("")
  const [mydate , setMydate] = useState("")
  const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("authorization")}`,
      };

  axios.get(`${process.env.REACT_APP_API_URI}/v1/members/${id}`,
    { headers: headers })
    .then((res) =>{
      setMyname(res.data.name)
      setMydate(res.data.creation_date)
      

    });
  const now = new Date();
  const last = new Date(mydate);
  const current = now.getTime() - last.getTime();
  const current1 = Math.round(current / (1000*60*60*24))+1
  
  

  return(
    <Topdiv>
    <Profil>
      <a href={`/users/${id}`}>
        <ProfilImg />
      </a>
      <Namediv>
        <Mypagediv className="namebox">
          <Mypagediv className="name"> 
          {myname}
          </Mypagediv>
          </Mypagediv>
          <Forname>
            <Logo src={BirthdayIcon}></Logo>
            <Mypagediv className="days">Member for {current1} days</Mypagediv>
            </Forname>

      </Namediv>
     </Profil>
     <Mypagediv className="editbox">
       <Link to ={`/users/edit/${id}`}>
       <Edit>
         <Logo2 src={Pen}></Logo2>
         Edit profile
       </Edit>
       </Link>
       <Edit>
       <Logo3 src={seicon}></Logo3>
         Network profile
       </Edit>   
     </Mypagediv> 
 </Topdiv>
  )
}
export default MypageTop

const Topdiv = styled.div`
margin: 12px;
display: flex;
justify-content: space-between;
  `
const Profil = styled.div`
margin: -8px;
display: flex;
`
export const ProfilImg = styled.img`
width: 128px;
height: 128px;
border-radius: 5px;
background-color: #636b74;

`
const Namediv = styled.div`
margin: 20px 8px 8px 13px;
width: 500px;

`
const Mypagediv = styled.div`

.editbox{
  margin: -3px;
  display: flex;
  flex-direction: column;
}

.namebox{
  margin: -4px;
 
}
.name{
  margin: 4px 4px 12px;
  font-size: 34px;
}
.days{
  margin: 0px 2px;
}

`
const Forname = styled.div`
color: #6A737C;
display: flex;
flex-direction: row;
margin: 3px;
`
const Logo = styled.img`
height: 14px;
width: 17px;
margin: 0px 5px 0px 0px;
`
const Edit = styled.button`
color:#6A737C;
font-size: 12px;
margin:-10px 3px 3px 3px;
padding: 9.6px;
border: 1px solid #BABFC3;
border-radius: 3px;
background-color: white;
:hover{
  background-color: #F1F2F3;
}
`
const Logo2 = styled.img`
margin: -3.6px 3px;
width: 14px;
height: 14px;
`
const Logo3 = styled.img`
width : 18px;
height: 18px;
margin: -3.6px 2px -3.6px -2px;
`