import styled from "styled-components";
import bc from "../../assets/backModal.jpg";

export const Content = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  z-index: 2;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  background: url(${bc});
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 1180.27px;
  height: 392.18px;
  border: 1px solid black;
  h2 {
    margin-top: 42px;
  }
  input,
  textarea {
    border: 1px solid #a2a2a2;
    border-radius: 9px;
    font-size: 14px;
    line-height: 16px;
    color: #989898;
  }
  textarea {
    margin-top: 17px;
    width: 749.73px;
    height: 81.65px;
    padding-left: 21px;
    padding-top: 10px;
  }
  input {
    width: 362.49px;
    height: 50.72px;
    padding-left: 21px;
    padding-bottom: 6px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  column-gap: 25px;
  margin-top: 60px;
`;
