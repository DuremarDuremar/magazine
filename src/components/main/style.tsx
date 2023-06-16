import styled from "styled-components";

export const Content = styled.section`
  article {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Title = styled.div<{
  res1080: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 50%;
  z-index: 1;

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
  }
  h5 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 300;
    margin: 10px 0 20px;
  }
  button {
    width: 179px;
    height: 53px;
    background: linear-gradient(95.2deg, #b90160 2.23%, #2e3192 99.51%);
    border-radius: 7px;
    color: #ffffff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    padding: 15px 0;
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
`;
