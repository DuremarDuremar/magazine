import React from "react";

import { Content, Logo, Title, Shape, Back } from "./style";
import { ReactComponent as SvgLogo } from "../../assets/logo.svg";
import shape from "../../assets/shape.png";
import back from "../../assets/back.png";

const Main = () => {
  return (
    <Content>
      <Logo>
        <div>
          <SvgLogo />
          <h1>EVARUGS</h1>
        </div>
        <ul>
          <li>отзывы</li>
          <li>что это?</li>
          <li>контакты</li>
        </ul>
      </Logo>
      <article>
        <Title>
          <h2>Инновационные коврики для автомобиля</h2>
          <h5>в вашем городе</h5>
          <button>ЗАКАЗАТЬ</button>
        </Title>
        <Shape>
          <img src={shape} alt="shape" />
        </Shape>
        <Back>
          <img src={back} alt="back" />
        </Back>
      </article>
    </Content>
  );
};

export default Main;
