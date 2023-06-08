import styled from "styled-components";
import Slider from "react-slick";

export const Content = styled.section`
  width: 1360px;
  height: 357px;
  background: linear-gradient(
    94.31deg,
    rgba(212, 20, 90, 0.25) 0.96%,
    rgba(46, 49, 146, 0.25) 104.83%
  );
  overflow: hidden;
`;

export const Wrapper = styled(Slider)`
  text-align: center;
  margin: 0 27%;
  position: relative;
  top: 17%;

  .slick-track {
    display: flex;
    /* column-gap: 70px; */
  }
  .slick-slide {
  }
  .slick-center {
    z-index: 1;
    margin: 0px 70px 0;

    p {
      /* background: yellow; */

      /* max-width: initial; */
    }
  }
  .slick-current {
  }
`;

export const Review = styled.div`
  width: 536px;
  height: 247px;
  background-color: #fff;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  p {
    /* background: red; */
  }
  div {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -20%;
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
`;
