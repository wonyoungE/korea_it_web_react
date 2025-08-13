/**
 * Emotion CSS
 * 라이브러리 설치 => npm i @emotion/react
 * jsx 태그의 css 속성 활성화 => 주석으로 @jsxImportSource @react/emotion
 * css 객체 import => css ``문자열로 작성
 * 확장프로그램으로 vscode-styled-components 설치
 */

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Emotion1() {
  const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
  `;

  const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
  `;
  return (
    <div>
      <div css={box1}></div>
      <div css={box2("gray")}></div>
    </div>
  );
}

export default Emotion1;
