import React, { useState } from "react";
import styled from "styled-components";

const step1_1 = [
  {
    title: "1. Summarize the problem",
    content: [
      "Include details about your goal",
      "Describe expected and actual results",
      "Include any error messages",
    ],
  },
  {
    title: "2. Describe what you've tried",
    content: [
      "IShow what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.",
    ],
  },
  {
    title: "3. show some code",
    content: [
      "When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)",
    ],
  },
];

const QuestionAskRight = () => {
  const [select, setSelect] = useState(false);

  const clicked = (idx) => {
    if (idx === select) {
      setSelect(false);
    } else {
      setSelect(idx);
    }
  };

  return (
    <>
      <AskRight>
        <RoleContainer>
          <Title>Step 1: Draft your question</Title>
          <Content>
            The community is here to help you with specific coding, algorithm,
            or language problems. <br />
            <br />
            Avoid asking opinion-based questions. <br />
            <br />
            {step1_1.map((el, idx) => {
              return (
                <Ol key={idx} onClick={(e) => clicked(idx)}>
                  <li className="li-title">
                    {el.title}
                    <div>
                      {el.content.map((el, idx2) => {
                        return (
                          <Ul
                            key={idx2}
                            display={select === idx ? "block" : "none"}
                          >
                            <li>{el}</li>
                          </Ul>
                        );
                      })}
                    </div>
                  </li>
                </Ol>
              );
            })}
          </Content>
        </RoleContainer>
      </AskRight>
    </>
  );
};

export default QuestionAskRight;

const AskRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 314px;
  height: 100%;
  margin-left: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #f7faf9;
`;

const Content = styled.div`
  padding: 12px 15px;
  font-size: 13px;
  background-color: #fff;
`;

const Ol = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;

  .li-title {
    font-weight: bold;
    padding: 12px 0;
  }
`;

const Ul = styled.ul`
  list-style-type: disc;

  li {
    font-weight: normal;
    padding: 3px 0;
    display: ${(props) => props.display || "none"};
  }
`;
