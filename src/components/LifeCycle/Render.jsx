import { useState } from "react";

function Render() {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  };
  // 렌더링이라는 것은 해당 컴포넌트의 내용물이 새로운 값으로 교체되는 것을 의미
  // 예를 들어서 컴포넌트가 건물이라고 한다면, 렌더링은 건물 내부의 인테리어를 바꾸는 것
  return (
    <div>
      <h1>현재 숫자: {count}</h1>
      <button onClick={onClickHandler}>숫자 증가</button>
    </div>
  );
}

export default Render;
