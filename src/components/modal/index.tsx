import React, { FC } from "react";
import { Wrapper, Content } from "./style";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IProps> = ({ setModal }) => {
  return (
    <Content onClick={() => setModal(false)}>
      <Wrapper onClick={(e) => e.stopPropagation()}>Modal</Wrapper>
    </Content>
  );
};

export default Modal;
