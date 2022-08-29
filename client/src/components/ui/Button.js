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

export const LightBlueButton2 = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  text-decoration: none;
  border: 0.9px solid #2c5877;
  background: #e1ecf4;
  color: #2c5877;
  cursor: pointer;

  &:hover {
    background: #b3d4ea;
  }
`;

export const WhiteBox = styled.button`
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background: #fff;
  color: #0174cc;
  cursor: pointer;

  &:hover {
    background: #b3d4ea;
  }
`;
