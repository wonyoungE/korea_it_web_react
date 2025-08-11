import { useState } from "react";
import LifeCycle from "./LifeCycle";

function LifeCycleApp() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // 여기가 부모 컴포넌트
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      {/* 버튼 누르면 자식 보이고/안보이고 => 상태 갖고있는 useState */}
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        {show ? "컴포넌트 숨기기(언마운트)" : "컴포넌트 보이기(마운트)"};
      </button>
      <button
        onClick={() => {
          // prev -> 안정성
          setCount((prev) => prev + 1);
        }}
      >
        자식이 가지고 있는 카운트 업(재렌더링)
      </button>
      {/* show의 상태에 따라 LifeCycle(자식 컴포넌트) 보여주고 안보여주고
        LifeCycle에 props로 count */}
      {/* show가 false여서 LifeCycle 컴포넌트가 안보임? => 건물 자체를 부순 거..(언마운트)
        그래서 다시 보이게 하면 새로 렌더링 후 마운트 => 건물을 다시 지음 */}
      {show && <LifeCycle count={count} />}
    </div>
  );
}

// 최초의 컴포넌트가 우리 눈에 보일 때 => 렌더링(건물을 지음) 후 마운트
// 상태가 바뀌어서 재렌더링이 일어남 => 건물을 부수고 새로 지은 게 아니라 건물은 그대로 있고 안에 인테리어만 다시 함
// 만약 컴포넌트 자체를 보이게 / 안보이게 하면 => 건물을 부수고 다시 짓는 것과 같음
// => 마운트 / 언마운트

export default LifeCycleApp;
