import styled from "styled-components";
import bc from "../../assets/backModal.jpg";

export const Content = styled.div`
  position: fixed;
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
  width: 100%;
  margin: 0 7px;
  padding: 0 7px;
  @media (min-width: 1080px) {
    height: 392px;
    max-width: 1180px;
  }
  @media (max-width: 1080px) {
    height: 401px;
    max-width: 635px;
  }
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
    width: 100%;
    padding-left: 21px;
    padding-top: 10px;
    @media (min-width: 1080px) {
      max-width: 749.73px;
      height: 81px;
    }
    @media (max-width: 1080px) {
      max-width: 432px;
      height: 95px;
    }
  }
  input {
    width: 100%;
    height: 50.72px;
    padding-left: 21px;
    padding-bottom: 6px;
    @media (min-width: 1080px) {
      max-width: 362px;
    }
    @media (max-width: 1080px) {
      max-width: 432px;
    }
  }
  button {
    background: linear-gradient(96.12deg, #d4145a -21.03%, #3d5bf5 103.56%);
    border-radius: 9px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
    padding-bottom: 3px;

    @media (min-width: 1080px) {
      margin-top: 42px;
      width: 169px;
      height: 35px;
    }
    @media (max-width: 1080px) {
      margin-top: 20px;
      width: 137px;
      height: 27px;
    }
    transition: all 1s ease;
    :hover {
      box-shadow: 0px 3px 6px 1px #3d5bf5;
      transform: translateY(-3px);
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1080px) {
    flex-direction: row;
    column-gap: 25px;
    justify-content: center;
    margin-top: 45px;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    row-gap: 25px;
    align-items: center;
    margin-top: 25px;
  }
`;
