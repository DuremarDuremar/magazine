import React from "react";

import { Content, Wrapper, Review } from "./style";

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
    // centerPadding: "15%",
    speed: 500,
    arrows: false,
  };

  return (
    <Content>
      <Wrapper {...settings}>
        <Review>
          <img src="#" alt="" />
          <p>
            Коврики супер!!! Качество на высшем уровне!!! Удачи и побольше
            заказов вам!!! Большое спасибо!
          </p>
          <h6>Константин В.</h6>
        </Review>
        <Review>
          <img src="#" alt="" />
          <p>
            Покупала у ребят коврики для Хундай солярис в подарок молодому
            человеку. Все очень понравилось. Буду советовать только вас.
          </p>
          <h6>Вера К.</h6>
        </Review>
        <Review>
          <img src="#" alt="" />
          <p>
            Спасибо, все приехало, поставил. Результатом доволен, в машине
            супер! Заказывал на Ниссан.
          </p>
          <h6>Николай П.</h6>
        </Review>
      </Wrapper>
    </Content>
  );
};

export default Reviews;
