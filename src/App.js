import React from "react";
import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NeflixStart from "./components/Netflix/NeflixStart";

function App() {
  return (
    <Fragment>
      <Header />
      <NeflixStart />
      <Footer />
    </Fragment>
  );
}

export default App;
