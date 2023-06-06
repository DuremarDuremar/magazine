import styled from "styled-components";

export const Content = styled.div`
  max-width: 1360;
  height: 1580px;
  padding: 50px 78px 0;
  position: relative;
`;

export const Back = styled.div`
  position: absolute;
  left: 39%;
  top: 12%;
  background-size: cover;
`;

export const Dot = styled.div<{
  top: string;
  left: string;
}>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;
