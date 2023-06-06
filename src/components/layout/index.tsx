import React, { FC } from "react";
import { Content } from "./style";

import back from "../../assets/back.png";
import { ReactComponent as SvgDot_1 } from "../../assets/dot_1.svg";
import { ReactComponent as SvgDot_2 } from "../../assets/dot_2.svg";
import { ReactComponent as SvgDot_3 } from "../../assets/dot_3.svg";
import { ReactComponent as SvgDot_4 } from "../../assets/dot_4.svg";
import { ReactComponent as SvgDot_5 } from "../../assets/dot_5.svg";

import { Back, Dot } from "./style";

interface IProps {
  children: JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Content>
      {children}
      <>
        <Back>
          <img src={back} alt="back" />
        </Back>
        <Dot top="290" left="370">
          <SvgDot_1 />
        </Dot>
        <Dot top="300" left="390">
          <SvgDot_2 />
        </Dot>
        <Dot top="660" left="140">
          <SvgDot_3 />
        </Dot>
        <Dot top="610" left="110">
          <SvgDot_4 />
        </Dot>
        <Dot top="650" left="65">
          <SvgDot_5 />
        </Dot>
      </>
    </Content>
  );
};

export default Layout;
