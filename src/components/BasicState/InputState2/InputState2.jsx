import { useState } from "react";

function InputState2() {
  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // inputValue를 수정하지 않는 이유 -> 참조 메모리 주소가 같기 때문에
    // 바뀌었다고 인식 xx
    const newInputValue = {
      ...inputValue,
      // [] 쓰는 이유 -> 그냥 name이라고 하면 변수명 자체가 name이 됨
      // [name] => name 변수가 갖고있는 값을 키로 쓰는 것
      [name]: value, // 같은 키를 갖고있는 요소한테 값 덮어쓰기 => spread 문법??임??
    };
    // 객체 안에서 []를 쓰면 변수 안에 들어있는 문자열 값을 키로 사용할 수 있다.

    setInputValue(newInputValue);
  };

  return (
    <div>
      <h1>{inputValue.t1}</h1>
      <h1>{inputValue.t2}</h1>
      <h1>{inputValue.t3}</h1>
      {/* name으로 구분 */}
      <input name="t1" type="text" onChange={onChangeHandler} />
      <input name="t2" type="text" onChange={onChangeHandler} />
      <input name="t3" type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default InputState2;
