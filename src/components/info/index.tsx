import React from "react";
import { Content, Title, Desc, Block } from "./style";
import desk_1 from "../../assets/desk_1.jpg";
import desk_2 from "../../assets/desk_2.jpg";
import desk_3 from "../../assets/desk_3.jpg";

const Info = () => {
  return (
    <Content>
      <Title>
        <h2>
          Что такое <a href="#">EVA</a> коврики?
        </h2>
      </Title>
      <Desc>
        <Block>
          <img src={desk_1} alt="desk_1" />
          <h3>МАТЕРИАЛ</h3>
          <div>
            Коврики EVA всесезонные и отличаются уникальной поверхностью
            материала с ячейками ромбовидной формы. Из-за чего вода не
            проливается при изъятии ковра и не плещется при езде. Коврики воду
            не пропускают.
          </div>
        </Block>
        <Block>
          <img src={desk_2} alt="desk_2" />
          <h3>ОТЛИЧИЯ</h3>
          <div>
            Резиновые коврики загибаются и лезут на педали. EVA коврики такого
            не допустят! Специальные липучки держат его в одном положении. При
            желании, для водителя устанавливается подпятник из рельефного
            алюминия.
          </div>
        </Block>
        <Block>
          <img src={desk_3} alt="desk_3" />
          <h3>РАСЦВЕТКА</h3>
          <div>
            Автомобильные коврики EVA можно заказать и в индивидуальных размерах
            и в разных цветах, которые комбинируется на выбор покупателя с
            такими же цветами окантовочной полипропиленовой ременной ленты.
          </div>
        </Block>
      </Desc>
    </Content>
  );
};

export default Info;
