import styled from "styled-components";

export const Content = styled.footer`
  margin: 20px auto 10px;

  @media (min-width: 1080px) {
    padding: 160px 20px 0px;
  }
  @media (max-width: 1080px) {
    padding: 60px 10px 0px;
  }
  @media (max-width: 760px) {
    padding: 30px 10px 0px;
  }
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
  column-gap: 6px;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    div:first-child {
      order: 1;
    }
    div:last-child {
      order: 2;
    }
  }
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media (max-width: 760px) {
    svg {
      margin: 0px auto;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    @media (max-width: 760px) {
      text-align: center;
    }
  }
  p {
    max-width: 224px;
    font-size: 14px;
    line-height: 16px;
    @media (max-width: 760px) {
      text-align: center;
    }
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
