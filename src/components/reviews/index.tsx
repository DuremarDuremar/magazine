import React from "react";

import { Content, Wrapper } from "./style";

const Reviews = () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // initialSlide: 0,
    // slidesToShow: 1,
    // speed: 500,
    // slidesToScroll: 1,
    focusOnSelect: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "15%",
    speed: 500,
    arrows: false,
  };

  return (
    <Content>
      <Wrapper {...settings}>
        <div>
          <p>1111111111</p>
        </div>
        <div>
          <p>2222222222222</p>
        </div>
        <div>
          <p>33333333333333</p>
        </div>
      </Wrapper>
    </Content>
  );
};

export default Reviews;
