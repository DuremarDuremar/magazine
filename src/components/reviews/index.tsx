import React from "react";

import { Content, Wrapper, Review } from "./style";
import rev1 from "../../assets/otz1.png";
import rev2 from "../../assets/otz2.png";
import rev3 from "../../assets/otz3.png";

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
          <div>
            <img src={rev2} alt="img" />
          </div>
          <p>
            Покупала у ребят коврики для Хундай солярис в подарок молодому
            человеку. Все очень понравилось. Буду советовать только вас.
          </p>
          <h6>Вера К.</h6>
        </Review>
        <Review>
          <div>
            <img src={rev3} alt="img" />
          </div>
          <p>
            Спасибо, все приехало, поставил. Результатом доволен, в машине
            супер! Заказывал на Ниссан.
          </p>
          <h6>Николай П.</h6>
        </Review>
        <Review>
          <div>
            <img src={rev1} alt="img" />
          </div>
          <p>
            Коврики супер!!! Качество на высшем уровне!!! Удачи и побольше
            заказов вам!!! Большое спасибо!
          </p>
          <h6>Константин В.</h6>
        </Review>
      </Wrapper>
    </Content>
  );
};

export default Reviews;
