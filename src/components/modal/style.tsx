import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  z-index: 2;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
