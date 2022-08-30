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
  <div>hi</div>

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
  grid-template-columns: 1fr 4.7fr;
  margin: 0 auto;
  width: 100%;
  `;