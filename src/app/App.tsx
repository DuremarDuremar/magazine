import React, { useState } from "react";
import {
  Header,
  Main,
  Info,
  Layout,
  Reviews,
  Footer,
  Modal,
} from "../components";

import { Global, Content } from "./style";

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Global />
      <Content modal={modal}>
        <Header />
        <Layout>
          <Main setModal={setModal} />
          <Info />
        </Layout>
        <Reviews />
        <Footer />
        {modal && <Modal />}
      </Content>
    </>
  );
};

export default App;
