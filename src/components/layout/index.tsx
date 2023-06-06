import React, { FC } from "react";
import { Content } from "./style";

import back from "../../assets/back.png";
import { ReactComponent as SvgDot1 } from "../../assets/dot_1.svg";
import { ReactComponent as SvgDot2 } from "../../assets/dot_2.svg";
import { ReactComponent as SvgDot3 } from "../../assets/dot_3.svg";
import { ReactComponent as SvgDot4 } from "../../assets/dot_4.svg";
import { ReactComponent as SvgDot5 } from "../../assets/dot_5.svg";
import { ReactComponent as SvgDot6 } from "../../assets/dot_6.svg";
import { ReactComponent as SvgDot7 } from "../../assets/dot_7.svg";
import { ReactComponent as SvgDot8 } from "../../assets/dot_8.svg";

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
          <SvgDot1 />
        </Dot>
        <Dot top="300" left="390">
          <SvgDot2 />
        </Dot>
        <Dot top="660" left="140">
          <SvgDot3 />
        </Dot>
        <Dot top="610" left="110">
          <SvgDot4 />
        </Dot>
        <Dot top="650" left="65">
          <SvgDot5 />
        </Dot>
        <Dot top="985" left="-60">
          <SvgDot6 />
        </Dot>
        <Dot top="1450" left="330">
          <SvgDot7 />
        </Dot>
        <Dot top="1200" left="410">
          <SvgDot8 />
        </Dot>
      </>
    </Content>
  );
};

export default Layout;
