import React, { FC } from "react";

import { Content, Logo, Title, Shape } from "./style";
import { ReactComponent as SvgLogo } from "../../assets/logo.svg";
import shape from "../../assets/shape.png";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  res1080: boolean;
}

const Main: FC<IProps> = ({ setModal, res1080 }) => {
  return (
    <Content>
      <Logo>
        <div>
          <SvgLogo />
          <h1>EVARUGS</h1>
        </div>
        {res1080 && (
          <ul>
            <li>отзывы</li>
            <li>что это?</li>
            <li>контакты</li>
          </ul>
        )}
      </Logo>
      <article>
        <Title>
          <h2>Инновационные коврики для автомобиля</h2>
          <h5>в вашем городе</h5>
          <button onClick={() => setModal(true)}>ЗАКАЗАТЬ</button>
        </Title>
        <Shape>
          <img src={shape} alt="shape" />
        </Shape>
      </article>
    </Content>
  );
};

export default Main;
