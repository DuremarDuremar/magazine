import React from "react";

import Fon from "./fon";
import { Content, Logo, Title, Shape } from "./style";
import { ReactComponent as SvgLogo } from "../../assets/logo.svg";
import shape from "../../assets/shape.png";

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
        <Fon />
      </article>
    </Content>
  );
};

export default Main;
