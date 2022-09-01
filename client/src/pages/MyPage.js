import React from "react";
import styled from "styled-components";
import LeftSide from "../components/LeftSide";
import BirthdayIcon from "../assets/cake-candles-solid.svg"
import Pen from "../assets/pen-solid.svg"

// 마이페이지
const MyPage = () => {
  return (  
    
 <MainContainer>
  <Left>
  <LeftSide />
  </Left>
  <RightContainer>
    <div>
      <Topdiv>
        <Profil>
          <a href="/users/:id">
            <ProfilImg />
          </a>
          <Namediv>
            <Mypagediv className="namebox">
              <Mypagediv className="name"> {/* 수정예정 */}
                haeji
              </Mypagediv>
              </Mypagediv>
              <Forname>
                <Logo src={BirthdayIcon}></Logo>
                <Mypagediv className="days">Member for {} days</Mypagediv>
                </Forname>

          </Namediv>

         </Profil>
         <div>
           <Edit>
             <Logo2 src={Pen}></Logo2>
             Edit profile
           </Edit>
         </div> 
     </Topdiv>
     <Mypagediv className="bar">
       
     </Mypagediv>
  </div>
  </RightContainer>


</MainContainer> 
  );
};

export default MyPage;
const Mypagediv = styled.div`

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
.bar{
  margin: 40px 0px 16px 0px;
}

`
const Forname = styled.div`
color: #6A737C;
display: flex;
flex-direction: row;
margin: 3px;
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
const Topdiv = styled.div`
margin: 12px;
display: flex;
justify-content: space-between;
  `
const Profil = styled.div`
margin: -8px;
display: flex;
`
const ProfilImg = styled.img`
width: 128px;
height: 128px;
border-radius: 5px;
background-color: #636b74;

`
const Namediv = styled.div`
margin: 20px 8px 8px 13px;
width: 500px;

`
const Logo = styled.img`
height: 14px;
width: 17px;
margin: 0px 5px 0px 0px;
`
const Logo2 = styled.img`
margin: -1.5px 5px 0px 0px;
width: 14px;
height: 14px;
`
const Edit = styled.a`
color:#6A737C;
font-size: 12px;
margin: -15px 600px 3px 3px;
padding: 9.6px;
border: 1px solid #BABFC3;
border-radius: 5px;
display: flex;

`