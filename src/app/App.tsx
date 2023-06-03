import React from "react";
import { Header, Main } from "../components";

import { Global, Content } from "./style";

const App = () => {
  return (
    <>
      <Global />
      <Content>
        <Header />
        <Main />
      </Content>
    </>
  );
};

export default App;
