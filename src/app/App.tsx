import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
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
  const res1080 = useMediaQuery({ query: "(min-width: 1080px)" });
  const res730 = useMediaQuery({ query: "(min-width: 730px)" });
  const res520 = useMediaQuery({ query: "(min-width: 520px)" });

  const [modal, setModal] = useState(false);

  return (
    <>
      <Global />
      <Content modal={modal}>
        <Header res1080={res1080} />
        <Layout>
          <Main setModal={setModal} res1080={res1080} />
          <Info />
        </Layout>
        <Reviews res1080={res1080} />
        <Footer />
        {modal && <Modal setModal={setModal} />}
      </Content>
    </>
  );
};

export default App;
