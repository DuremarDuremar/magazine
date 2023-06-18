import React, { FC } from "react";

import { Content, Wrapper, Review } from "./style";
import rev1 from "../../assets/otz1.png";
import rev2 from "../../assets/otz2.png";
import rev3 from "../../assets/otz3.png";

interface IProps {
  res1080: boolean;
}

const Reviews: FC<IProps> = ({ res1080 }) => {
  const settings = {
    focusOnSelect: true,
    slidesToShow: res1080 ? 1 : 3,
    centerMode: res1080 ? true : false,
    speed: 500,
    arrows: false,
    infinite: true,
    vertical: res1080 ? false : true,
    verticalSwiping: res1080 ? false : true,
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
