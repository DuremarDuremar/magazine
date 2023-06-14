import React, { FC } from "react";
import { Wrapper, Content, Inputs } from "./style";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IProps> = ({ setModal }) => {
  return (
    <Content onClick={() => setModal(false)}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <h2>ФОРМА ЗАЯВКИ</h2>
        <Inputs>
          <input type="name" placeholder="Ваше имя" />
          <input type="email" placeholder="Ваш e-mail" />
        </Inputs>

        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"
        ></textarea>
      </Wrapper>
    </Content>
  );
};

export default Modal;
