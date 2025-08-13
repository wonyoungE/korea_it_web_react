/** @jsxImportSource @emotion/react */
//
import * as s from "./styles"; // styles에 있는 모든 것을 s로 시작해서 부르겠다
// 즉. s.@@%$@

// 컴포넌트를 하나 만들려면
// 폴더 하나 만들어서 컴포넌트jsx 하나, styles.js 하나 만들기
function Emotion2() {
  return (
    <div>
      <div css={s.box1}></div>
      <div css={s.box2("gray")}></div>
    </div>
  );
}

// 내보내기 하고 있음
export default Emotion2;
