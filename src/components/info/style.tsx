import styled from "styled-components";

export const Content = styled.section``;

export const Title = styled.div`
  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 50px;
    line-height: 59px;
    a {
      background-color: #b90160;
      background-image: linear-gradient(45deg, #b90160, #3d5bf5);
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
`;

export const Desc = styled.div`
  display: flex;
  column-gap: 61px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 1px solid #fff;
  border-radius: 9px;
  box-shadow: 0px 0px 40px rgba(184, 0, 95, 0.2);
  overflow: hidden;
`;
