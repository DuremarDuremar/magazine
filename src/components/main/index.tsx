import React from "react";

import { Content, Logo, Title, Shape } from "./style";
import { ReactComponent as SvgLogo } from "../../assets/logo.svg";

const Main = () => {
  return (
    <Content>
      <Logo>
        <div>
          <SvgLogo />
          <h2>EVARUGS</h2>
        </div>
        <ul>
          <li>отзывы</li>
          <li>что это?</li>
          <li>контакты</li>
        </ul>
      </Logo>
      <article>
        <Title>2</Title>
        <Shape>3</Shape>
      </article>
    </Content>
  );
};

export default Main;
