import React, { FC } from "react";

import { Block, Content } from "./style";
import { ReactComponent as SvgPhone } from "../../assets/phone.svg";
import { ReactComponent as SvgCity } from "../../assets/city.svg";
import { ReactComponent as SvgInsta } from "../../assets/insta.svg";

interface IProps {
  res1080: boolean;
}

const Header: FC<IProps> = ({ res1080 }) => {
  return (
    <Content>
      {res1080 && (
        <Block cg={"12"}>
          <SvgPhone />
          <span>+375 29 292-29-29 (VEL)</span>
          <span>+375 33 333-33-33 (МТС)</span>
        </Block>
      )}
      <Block cg={"8"}>
        <SvgCity />
        <span>ваш город</span>
      </Block>
      <Block cg={"15"}>
        <SvgInsta />
        <span>посетите нашу страницу</span>
      </Block>
    </Content>
  );
};

export default Header;
