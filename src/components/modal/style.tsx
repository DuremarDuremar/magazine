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
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 1180.27px;
  height: 392.18px;
  box-shadow: 0px 0px 35px rgba(212, 20, 90, 0.25);
  border-radius: 15px;
  cursor: default;
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
  button {
    width: 169.49px;
    height: 42.06px;
    background: linear-gradient(96.12deg, #d4145a -21.03%, #3d5bf5 103.56%);
    border-radius: 9px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
    padding-bottom: 3px;
    margin-top: 42px;
    transition: all 1s ease;
    :hover {
      box-shadow: 0px 3px 6px 1px #3d5bf5;
      transform: translateY(-3px);
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  column-gap: 25px;
  margin-top: 60px;
  margin-top: 45px;
`;
