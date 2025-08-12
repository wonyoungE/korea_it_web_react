import { useState } from "react";

// 함수형 컴포넌트
function InputState1() {
  // 똑같은 게 두개씩.. 비효율적인거가틈
  const [inputValue1, setInputValue1] = useState("");
  const [h1Text1, setH1Text1] = useState("");

  const [inputValue2, setInputValue2] = useState("");
  const [h1Text2, setH1Text2] = useState("");

  const inputOnChangeHandler1 = (e) => {
    setInputValue1(e.target.value);
  };

  // 얘는 그냥 자바스크립트 함수
  const inputOnChangeHandler2 = (e) => {
    setInputValue2(e.target.value);
  };

  const onClickHandler = () => {
    setH1Text1(inputValue1);
    setH1Text2(inputValue2);
  };

  return (
    <div>
      <h1>{h1Text1}</h1>
      <h1>{h1Text2}</h1>
      <input type="text" value={inputValue1} onChange={inputOnChangeHandler1} />
      <input type="text" value={inputValue2} onChange={inputOnChangeHandler2} />
      {/* 확인 버튼이 눌리면 h1태그에 각각 넣어줄 거임 */}
      <button onClick={onClickHandler}>확인</button>
    </div>
  );
}

export default InputState1;
