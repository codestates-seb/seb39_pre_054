import React from "react";
import styled from "styled-components";

import { ReactComponent as VoteUp } from "../assets/vote-up.svg";
import { ReactComponent as VoteDown } from "../assets/vote-down.svg";
import { ReactComponent as History } from "../assets/history.svg";
import { ReactComponent as BookMark } from "../assets/book-mark.svg";

const Vote = () => {
  return (
    <VoteContainer>
      <VoteUp fill="#babfc5" />0<VoteDown fill="#babfc5" />
      <BookMark fill="#babfc5" />
      <History fill="#babfc5" />
    </VoteContainer>
  );
};

export default Vote;

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  padding-right: 10px;
  svg{
    cursor: pointer;
  }
`;
