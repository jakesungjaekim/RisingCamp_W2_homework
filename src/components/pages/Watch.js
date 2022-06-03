import NetflixWatchHeader from "../Netflix/NeflixWatchPage/NetflixWatchHeader";
import Footer from "../../components/Layout/Footer";
import { Fragment } from "react";
import NetflixWatchMain from "../Netflix/NeflixWatchPage/NetflixWatchMain";

const Watch = () => {
  return (
    <Fragment>
      <NetflixWatchHeader />
      <NetflixWatchMain />
      <Footer />
    </Fragment>
  );
};

export default Watch;
