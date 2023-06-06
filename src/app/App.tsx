import React from "react";
import { Header, Main, Info, Layout } from "../components";

import { Global, Content } from "./style";

const App = () => {
  return (
    <>
      <Global />
      <Content>
        <Header />
        <Layout>
          <Main />
          <Info />
        </Layout>
      </Content>
    </>
  );
};

export default App;
