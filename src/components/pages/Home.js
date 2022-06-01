import Header from "../Layout/Header";
import NeflixStart from "../Netflix/NeflixStart";
import Footer from "../Layout/Footer";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <NeflixStart />
      <Footer />
    </Fragment>
  );
};

export default Home;
