import { Fragment } from "react";

import classes from "./NetflixWatchMain.module.css";

const NetflixWatchMain = (props) => {
  return (
    <Fragment>
      <div className={classes["watch-main"]}>
        <div className={classes["watch-main-text"]}>
          <img
            alt="ready-player-one-logo"
            src="https://occ-0-988-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcx2ObuRmhjjZqyDIl4G_QlYTzkgozwlGnzMX8hAzlgNj8F2w37lVONf51xIm-a8ctI3ZGAWEOvaNW-rMN2gAXagSyQJczw-c9erDcPxGn5W.webp?r=f89"
          />
          <p>
            붕괴 직전의 암울한 세상. 재능있는 게이머가 거대한 가상 현실 세계의
            <br /> 소유권을 얻기 위한 도전에 앞장선다. 모두의 꿈과 희망을 지키기
            위해!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default NetflixWatchMain;
