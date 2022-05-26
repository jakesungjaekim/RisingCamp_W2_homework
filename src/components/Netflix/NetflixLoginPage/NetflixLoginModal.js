import React from "react";
import { Fragment } from "react";

import classes from "./NetflixLoginModal.module.css";

const NetflixLoginModal = (props) => {
  return (
    <div className={classes["login-box"]}>
      <h2>로그인</h2>
      <form>
        <input placeholder="이메일 주소 또는 전화번호" />
        <input placeholder="비밀번호" />
        <button>로그인</button>
        <div className={classes["checkbox-wrap"]}>
          <input
            type="checkbox"
            name="로그인 정보 저장"
            value="로그인 정보 저장"
          />
          <label for="로그인 정보 저장">로그인 정보 저장</label>
        </div>
        <h4>
          Netflix 회원이 아닌가요? <span>지금 가입하세요</span>
        </h4>
        <p>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
          확인합니다.
        </p>
      </form>
    </div>
  );
};

export default NetflixLoginModal;
