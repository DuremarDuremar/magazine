import styled from "styled-components";

export const Content = styled.header`
  height: 77px;
  padding: 0 80px;
  background: linear-gradient(
    269.91deg,
    rgba(46, 49, 146, 0.7) 0%,
    rgba(212, 20, 90, 0.7) 98.16%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  div:not(:first-child) {
    cursor: pointer;
  }
`;

export const Block = styled.div<{ cg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: ${({ cg }) => `${cg}px`};
  font-size: 15px;
  flex: 33%;

  ${(props) =>
    props.cg === "12" &&
    `
    justify-content:start;
    span{
        cursor: pointer;
    }
    `}

  ${(props) =>
    props.cg === "15" &&
    `
    font-size:14px;
    justify-content:end;
    span{
        max-width: 100px;
    }
   
    `}
`;
