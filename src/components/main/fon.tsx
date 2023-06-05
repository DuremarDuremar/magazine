import React from "react";

import back from "../../assets/back.png";
import { ReactComponent as SvgDot_1 } from "../../assets/dot_1.svg";
import { ReactComponent as SvgDot_2 } from "../../assets/dot_2.svg";
import { ReactComponent as SvgDot_3 } from "../../assets/dot_3.svg";
import { ReactComponent as SvgDot_4 } from "../../assets/dot_4.svg";
import { ReactComponent as SvgDot_5 } from "../../assets/dot_5.svg";
import { Back, Dot } from "./style";

const Fon = () => {
  return (
    <>
      <Back>
        <img src={back} alt="back" />
      </Back>
      <Dot top="165" left="290">
        <SvgDot_1 />
      </Dot>
      <Dot top="180" left="310">
        <SvgDot_2 />
      </Dot>
      <Dot top="560" left="60">
        <SvgDot_3 />
      </Dot>
      <Dot top="510" left="35">
        <SvgDot_4 />
      </Dot>
      <Dot top="550" left="-15">
        <SvgDot_5 />
      </Dot>
    </>
  );
};

export default Fon;
