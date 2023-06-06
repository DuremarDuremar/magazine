import styled from "styled-components";
import Slider from "react-slick";

export const Content = styled.div`
  max-width: 1360;
  padding: 50px 278px 0;
`;

export const Wrapper = styled(Slider)`
  text-align: center;
  padding: 20px;
  div {
    width: 536px;
    height: 247px;
    padding: 0;
  }
  p {
    /* transition: all 0.2s ease; */
    background: red;
    /* width: 100%;
    height: 80px;
    margin: 30px 0; */
    /* transition: all 0.5s; */
  }

  .slick-track {
    display: flex;
  }
  .slick-center {
    z-index: 1;
    p {
      background: yellow;
      margin: 0;

      max-width: initial;
    }
  }
  .slick-current {
  }
`;
