import styled from "styled-components";

export const BlueButton = styled.button`
  height: ${(props) => props.height || "70%"};
  width: ${(props) => props.width || "100%"};
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid #2584f4;
  background: #0a95ff;
  color: #ffffff;
  font-weight: bold;
  margin: ${(props) => props.margin || "4px"};
  cursor: pointer;

  &:hover {
    background: #2584f4;
  }
`;

export const LightBlueButton = styled.button`
  height: 70%;
  width: 100%;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid #2584f4;
  background: #e1ecf4;
  color: #0a95ff;
  font-weight: bold;
  margin: 4px;
  cursor: pointer;

  &:hover {
    background: #c6d3dc;
  }
`;

