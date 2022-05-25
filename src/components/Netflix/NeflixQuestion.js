import React from "react";
import { Fragment } from "react";

import classes from "./NeflixQuestion.module.css";

const NeflixQuestion = (props) => {
  return (
    <Fragment>
      <form className={classes.question}>
        <form>
          <h2>자주 묻는 질문</h2>

          {/* <div class="buttons">
            <button class="q-button">넷플릭스란 무엇인가요?
            <img src="../images/plus.png">
            </button>
            <button class="q-button">넷플릭스 요금은 얼마인가요?
            <img src="../images/plus.png">
            </button>
            <button class="q-button">어디에서 시청할 수 있나요?
            <img src="../images/plus.png">
            </button>
            <button class="q-button">멤버쉽을 해지하려면 어떻게 하나요?
            <img src="../images/plus.png">
            </button>
            <button class="q-button">
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
            <img src="../images/plus.png">
            </button>
            <button class="q-button">아이들이 넷플릭스를 봐도 좋을까요?
            <img src="../images/plus.png">
            </button>
          </div> */}

          <div className={classes.onemoretime}>
            <p>
              시청할 준비가 되셨나요? 멤버쉽을 등록하거나 재시자가려면 이메일
              주소를 입력하세요.
            </p>
            <div>
              <input placeholder="이메일주소" />
              <button>시작하기</button>
            </div>
          </div>
        </form>
      </form>
    </Fragment>
  );
};

export default NeflixQuestion;
