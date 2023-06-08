import React from "react";
import { Header, Main, Info, Layout, Reviews, Footer } from "../components";

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
        <Reviews />
        <Footer />
      </Content>
    </>
  );
};

export default App;
