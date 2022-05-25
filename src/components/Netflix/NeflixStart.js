import React from "react";
import { Fragment } from "react";
import NeflixQuestion from "./NeflixQuestion";

import classes from "./NetflixStart.module.css";

const NeflixStart = (props) => {
  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes["main-content"]}>
          <h2>영화와 시리즈를 무제한으로.</h2>
          <h3>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h3>
          <form>
            <p>
              시청할 준비가 되셨나요? 멤버쉽을 등록하거나 재시자가려면 이메일
              주소를 입력하세요.
            </p>
            <div>
              <input placeholder="이메일주소" />
              <button>시작하기</button>
            </div>
          </form>
        </div>
      </main>
      <NeflixQuestion />
    </Fragment>
  );
};

export default NeflixStart;
