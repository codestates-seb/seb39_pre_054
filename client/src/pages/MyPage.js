import React from "react";
import styled from "styled-components";
import LeftSide from "../components/LeftSide";

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
            hi
          </Namediv>
        </Profil>
        
      </Topdiv>
    </div>

  </RightContainer>


</MainContainer>
  );
};

export default MyPage;


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
margin: 10px;
`