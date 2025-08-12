import { useEffect, useState } from "react";

function Effect1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [h1Name, setH1Name] = useState("");
  const [h1Age, setH1Age] = useState("");

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageOnChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const nameOnClickHandler = () => {
    setH1Name(name);
    // set함수는 즉시 실행이 아님 => 이벤트 핸들러 함수가 모두 끝나면, h1Name의 값을 name의 값으로 바꿔서
    // 다시 컴포넌트를 렌더링 해주세요 라고 예약해두는 것
    // console.log(h1Name);
    // 리액트는 일괄 처리
    // 상태 업데이트 요청이 들어오면 모아서 한 번에 처리
    // 만약 set함수를 즉시 실행한다면 작은 변화에도 컴포넌트를 다시 렌더링하기 때문에 느려짐
    // 그래서 콘솔 처음 찍으면 h1Name 안나오고 이름을 한 번 더 입력하면 이전에 입력한 이름이 콘솔창에 뜸
  };

  const ageOnClickHandler = () => {
    setH1Age(age);
    // console.log(h1Age);
  };

  // useEffect로 바로 확인할 수 있음
  // 첫번째 인자 -> callback: 함수의 매개변수로 들어가는 함수
  useEffect(() => {
    console.log("마운트 됨");
    console.log(h1Name);
    console.log(h1Age);
    return () => {
      console.log("언마운트 됨");
    };
  }, [h1Name, h1Age]);

  return (
    <div>
      <h1>이름: {h1Name}</h1>
      <h1>나이: {h1Age}</h1>
      <input type="text" value={name} onChange={nameOnChangeHandler} />
      <button onClick={nameOnClickHandler}>이름 확인</button>
      <input type="text" value={age} onChange={ageOnChangeHandler} />
      <button onClick={ageOnClickHandler}>나이 확인</button>
    </div>
  );
}

export default Effect1;
