import React from "react";
import { Header, Main, Info } from "../components";

import { Global, Content } from "./style";

const App = () => {
  return (
    <>
      <Global />
      <Content>
        <Header />
        <Main />
        <Info />
      </Content>
    </>
  );
};

export default App;
