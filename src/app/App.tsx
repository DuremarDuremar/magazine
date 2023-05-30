import React from "react";
import Header from "../components/header/header";

import { Global, Content } from "./style";

const App = () => {
  return (
    <>
      <Global />
      <Content>
        <Header />
      </Content>
    </>
  );
};

export default App;
