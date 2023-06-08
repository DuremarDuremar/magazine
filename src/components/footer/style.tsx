import styled from "styled-components";
export const Content = styled.footer`
  margin: 20px auto 10px;
  width: 1255px;
  height: 264px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Blocks = styled.div`
  max-width: 935px;
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  }
  p {
    max-width: 224px;
    font-size: 14px;
    line-height: 16px;
  }
  svg {
    cursor: pointer;
  }
`;
