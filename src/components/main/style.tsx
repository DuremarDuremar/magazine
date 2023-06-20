import styled from "styled-components";

export const Content = styled.section`
  article {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    justify-content: center;
  }
  div,
  ul {
    display: flex;
    align-items: center;
  }
  h1 {
    font-style: italic;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    padding-left: 11px;

    @media (max-width: 760px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
  ul {
    column-gap: 25px;
    font-size: 18px;
    line-height: 21px;
    color: #737373;
    li {
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 50%;
  z-index: 1;
  @media (max-width: 760px) {
    align-items: center;
    text-align: center;
    padding-top: 38px;
  }

  h2 {
    max-width: 676px;
    font-weight: 900;
    @media (min-width: 1080px) {
      font-size: 50px;
      line-height: 59px;
    }
    @media (max-width: 1080px) {
      font-size: 40px;
      line-height: 49px;
    }
    @media (max-width: 565px) {
      font-size: 25px;
      line-height: 25px;
      max-width: 194px;
      text-align: center;
    }
  }
  h5 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 300;
    margin: 10px 0 20px;
    @media (max-width: 565px) {
      font-size: 20px;
      line-height: 23px;
      text-align: center;
    }
  }
  button {
    @media (min-width: 1080px) {
      width: 179px;
      height: 53px;
      font-size: 20px;
      line-height: 23px;
      padding: 15px 0;
    }
    @media (max-width: 1080px) {
      width: 141px;
      height: 42px;
      font-size: 15px;
      line-height: 18px;
      padding: 6px 0;
    }
    @media (max-width: 565px) {
      width: 93px;
      height: 28px;
      font-size: 10px;
      line-height: 12px;
    }
    background: linear-gradient(95.2deg, #b90160 2.23%, #2e3192 99.51%);
    border-radius: 7px;
    color: #ffffff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;

    transition: all 1s ease;
    :hover {
      box-shadow: 0px 3px 6px 1px #3d5bf5;
      transform: translateY(-3px);
    }
  }
`;

export const Shape = styled.div`
  flex: 50%;
  z-index: 1;

  img {
  }
`;
