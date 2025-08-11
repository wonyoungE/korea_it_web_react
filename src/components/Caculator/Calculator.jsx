import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const onClickHandler = (e) => {
    const clickedValue = e.target.value;
    const lastChar = input.charAt(input.length - 1);

    // 맨 처음에 연산 기호 안되게
    if (
      input === "0" &&
      (clickedValue === "+" || clickedValue === "-" || clickedValue === "=")
    ) {
      return;
    }

    // 수식 뒤에 수식 불가
    // 수식 뒤에 0이오면 xx => + 02 이런거 안되게
    if (
      (lastChar === "+" || lastChar === "-") &&
      (clickedValue === "0" ||
        clickedValue === "+" ||
        clickedValue === "-" ||
        clickedValue === "=")
    ) {
      return;
    }

    // 초기화
    if (clickedValue === "C") {
      setInput("0");
      setResult(0);
      return;
    }

    // 한글자 지우기
    if (clickedValue === "back") {
      if (input.length === 1) {
        setInput("0");
        return;
      }
      setInput(input.substring(0, input.length - 1));
      return;
    }

    // eval => 문자열이어도 계산해줌
    if (clickedValue === "=") {
      setResult(eval(input));
      setInput("0");
      return;
    }

    if (input === "0") {
      setInput(clickedValue);
    } else {
      setInput(input + clickedValue);
    }
  };
  return (
    <div>
      <h1>입력: {input}</h1>
      <h1>결과: {result}</h1>
      <div>
        <button value={"C"} onClick={onClickHandler}>
          C
        </button>
        <button value={"%"} onClick={onClickHandler}>
          %
        </button>
        <button value={"/"} onClick={onClickHandler}>
          /
        </button>
        <button value={"back"} onClick={onClickHandler}>
          ←
        </button>
      </div>
      <div>
        <button value={7} onClick={onClickHandler}>
          7
        </button>
        <button value={8} onClick={onClickHandler}>
          8
        </button>
        <button value={9} onClick={onClickHandler}>
          9
        </button>
        <button value={"x"} onClick={onClickHandler}>
          x
        </button>
      </div>
      <div>
        <button value={4} onClick={onClickHandler}>
          4
        </button>
        <button value={5} onClick={onClickHandler}>
          5
        </button>
        <button value={6} onClick={onClickHandler}>
          6
        </button>

        <button value={"-"} onClick={onClickHandler}>
          -
        </button>
      </div>
      <div>
        <button value={1} onClick={onClickHandler}>
          1
        </button>
        <button value={2} onClick={onClickHandler}>
          2
        </button>
        <button value={3} onClick={onClickHandler}>
          3
        </button>
        <button value={"+"} onClick={onClickHandler}>
          +
        </button>
      </div>
      <div>
        <button value={0} onClick={onClickHandler}>
          0
        </button>
        <button value={"."} onClick={onClickHandler}>
          .
        </button>
        <button value={"="} onClick={onClickHandler} className="resultBtn">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
