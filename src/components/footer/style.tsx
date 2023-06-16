import styled from "styled-components";

export const Content = styled.footer`
  margin: 20px auto 10px;
  padding: 160px 20px 0px;
  max-width: 1295px;
  width: 100%;
  height: 284px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Blocks = styled.div`
  max-width: 935px;
  width: 100%;
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

export const Dot = styled.div<{
  top: string;
  left: string;
}>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;
