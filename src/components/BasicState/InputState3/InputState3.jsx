import { useState } from "react";

function InputState3() {
  const inputValueEmpty = {
    name: "",
    age: "",
    address: "",
  };

  const [inputValue, setInputValue] = useState(inputValueEmpty);
  const onChangeHandler = (e) => {
    // 구조 분해
    const { name, value } = e.target;
    console.log(name, value);

    // 함수형 업데이트
    // set에 새로운 값을 넣는 게 아니라 setInputValue((이전 상태의 값) => 새로운 값) 형태
    // 여기서 prev는 이 함수를 실행하는 시점에서 가장 최신 상태를 보장함
    // 따라서 항상 최신 상태를 기반으로 다음 상태를 업데이트 하므로 안정적이다
    // 추가 +) 이전 상태(prev)를 받아서 새로운 상태를 계산해주삼
    // 함수들을 대기열(queue)에 넣어두고 상태를 업데이트할 때 이 함수들을 차례대로 실행
    setInputValue((prev) => {
      return {
        // 전에는 inputValue를 넣었음... 그거는 최신 상태를 보장 못해줌
        // ...prev => 이전 상태 객체를 그대로 복사해서 불변성을 지킴
        // [name]: value => 복사된 객체에서 현재 입력이 변경된 속성의 값만 새로 덮어씀
        ...prev,
        [name]: value,
      }; // return이라 객체 반환, prev 쓸거면 화살표 함수 써야함
    });
  };

  return (
    <div>
      <h1>이름: {inputValue.name}</h1>
      <h1>나이: {inputValue.age}</h1>
      <h1>주소: {inputValue.address}</h1>
      <input
        name="name"
        type="text"
        value={inputValue.name}
        onChange={onChangeHandler}
      />
      <input
        name="age"
        type="text"
        value={inputValue.age}
        onChange={onChangeHandler}
      />
      <input
        name="address"
        type="text"
        value={inputValue.address}
        onChange={onChangeHandler}
      />
      {/* inputValueEmpty => 초기값이었음 */}
      <button onClick={() => setInputValue(inputValueEmpty)}>초기화</button>
    </div>
  );
}

export default InputState3;
