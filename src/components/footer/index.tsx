import React from "react";
import { Content, Blocks, Block } from "./style";
import { ReactComponent as SvgFooterInsta } from "../../assets/footerInsta.svg";

const Footer = () => {
  return (
    <Content>
      <Blocks>
        <Block>
          <h3>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h3>
          <SvgFooterInsta />
        </Block>
        <Block>
          <h3>КОНТАКТНЫЕ ТЕЛЕФОНЫ</h3>
          <p>
            +375 29 292-29-29 (VEL) <br />
            +375 33 333-33-33 (МТС)
          </p>
        </Block>
        <Block>
          <h3>О НАС</h3>
          <p>Индивидуальное изготовление EVA ковриков для вашего автомобиля</p>
          <p>ваш город</p>
        </Block>
      </Blocks>
    </Content>
  );
};

export default Footer;
