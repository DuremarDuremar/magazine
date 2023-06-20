import styled from "styled-components";
import Slider from "react-slick";

export const Content = styled.section`
  max-width: 1360px;
  @media (min-width: 1080px) {
    height: 357px;
  }
  @media (max-width: 1080px) {
    height: 948px;
  }

  background: linear-gradient(
    94.31deg,
    rgba(212, 20, 90, 0.25) 0.96%,
    rgba(46, 49, 146, 0.25) 104.83%
  );
  overflow: hidden;
  margin-top: 60px;
`;

export const Wrapper = styled(Slider)`
  text-align: center;
  position: relative;
  @media (min-width: 1080px) {
    top: 25%;
    margin: 0 26%;
  }
  @media (max-width: 1080px) {
    top: 10%;
  }

  .slick-track {
    display: flex;
    @media (min-width: 1080px) {
      flex-direction: row;
      column-gap: 70px;
    }
    @media (max-width: 1080px) {
      flex-direction: column;
      row-gap: 109px;
    }
  }
  .slick-slide {
  }
  .slick-center {
    z-index: 1;
    div {
      opacity: 1;
    }
    p {
    }
  }
  .slick-current {
  }
`;

export const Review = styled.div`
  max-width: 536px;
  width: 100%;
  min-height: 187px;
  background-color: #fff;
  @media (min-width: 1080px) {
    display: flex !important;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 565px) {
    max-width: 267px;
    min-height: 210px;
  }

  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  @media (min-width: 1080px) {
    opacity: 0.4;
  }
  @media (max-width: 1080px) {
    opacity: 1;
  }

  p {
    max-width: 445px;
    width: 100%;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    padding: 0 4px;
    @media (min-width: 1080px) {
    }
    @media (max-width: 1080px) {
      padding-top: 63px;
      margin: 0px auto;
    }
    @media (max-width: 565px) {
      font-size: 15px;
      line-height: 17px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -35%;
    @media (min-width: 1080px) {
    }
    @media (max-width: 1080px) {
      left: 50%;
      transform: translateX(-50%);
    }
    width: 95px;
    height: 108px;
    background: #d4145a;
    box-sizing: border-box;
    -webkit-clip-path: polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
  img {
    position: absolute;
    top: 1px;
    width: 93px;
    height: 106px;
    -webkit-clip-path: polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
  h6 {
    position: absolute;
    bottom: 10%;
    color: #8e8e8e;
    @media (min-width: 1080px) {
    }
    @media (max-width: 1080px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  p:after {
    content: "";
    width: 130px;
    height: 5px;
    background: linear-gradient(
      94.31deg,
      rgba(212, 20, 90, 0.25) 0.96%,
      rgba(46, 49, 146, 0.25) 104.83%
    );
    display: block;
    position: absolute;
    bottom: 22%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
