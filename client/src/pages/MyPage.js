import React from "react";
import styled from "styled-components";
import LeftSide from "../components/LeftSide";
import MypageTop from "../components/MypageTop";


// 마이페이지
const MyPage = () => {
  return (  
    
 <MainContainer>
  <Left>
  <LeftSide />
  </Left>
  <RightContainer>
    <div>
      <MypageTop></MypageTop>
     <Mypagediv className="bar">
       <Barnav>
         <ProfileNav>Profile</ProfileNav>
         <ActivityNav>Activity</ActivityNav>
         <ProfileNav>Settings</ProfileNav>
       </Barnav>
     </Mypagediv>
    <Underdiv>
      <Navdiv>
       <Navul>
         <Navlism>Summary</Navlism>
         <Navli>Answers</Navli>
         <Navli>Questions</Navli>
         <Navli>TAgs</Navli>
         <Navli>Articles</Navli>
         <Navli>Badges</Navli>
         <Navli>Bookmarks</Navli>
         <Navli>Following</Navli>
         <Navli>Bounties</Navli>
         <Navli>Reputation</Navli>
         <Navli>All actions</Navli>
         <Navli>Responses</Navli>
         <Navli>Votes</Navli>
       </Navul>
      </Navdiv>
      <H2>Summary</H2>

    </Underdiv>

  </div>
  </RightContainer>


</MainContainer> 
  );
};

export default MyPage;

const Mypagediv = styled.div`
.bar{
  margin: 0px 0px 16px;
  display: flex;
}
`
const Underdiv = styled.div`
margin: 0px 0px 48px;
display: flex;
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
const Navdiv = styled.nav`
margin: 0px 10px 0px 0px;
background-color: white;
`
const Navlism = styled.li`
padding: 6px 48px 6px 12px;
font-size: 13px;
border-radius : 70px;
background-color: #F1F2F3;
`
const H2 = styled.h2`
font-weight: 400;
font-size: 21px;
`
