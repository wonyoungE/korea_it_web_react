import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
  // let count = 0;
  console.log("countState 렌더링");

  const [count, setCount] = useState(0); // useState()에는 초기값 넣어주기

  const onClickHandler = (event) => {
    const num = parseInt(event.target.value);
    setCount(num + count); // 현재 상태 값을 바꿔주는 것

    // 메모리에 화면 그대로 복사해두고 set함수가 호출되었을 때 변경된 부분 비교해서 갈아끼움
    // 화면 전체를 다시 불러오지 않고 바뀐 부분만 재렌더링

    // count += num;
    // document.querySelector("h1").innerText = count;
  };
  /**
   * state란 컴포넌트가 가질 수 있는 상태를 의미
   * state를 사용해서 컴포넌트가 렌더링될 때 데이터를 보유하고,
   * 이 데이터를 업데이트해 화면을 재렌더링할 수 있음
   * useState는 배열을 반환
   * -> 첫번째 요소는 현재 상태의 값, 두번째 요소는 상태를 업데이트해주는 함수 반환
   * 자동 재렌더링되어 state 데이터들이 변경되면 html에도 자동적으로 변경사항이 적용
   * 상태가 변경돼도 새로고침을 할 필요가 없어짐
   *
   */

  return (
    <div>
      <CountHeader count={count}></CountHeader>
      <CountButton value={1} onClick={onClickHandler} text={"+1"}/>
      <CountButton value={-1} onClick={onClickHandler} text={"-1"}/>
    </div>
  );
}

export default CountState;

/**
 * 리액트의 동작원리
 * 1. 가상돔(Virtual DOM)
 * 우리가 실제로 보는 화면 돔(DOM)이라는 트리 구조로 관리
 * 화면에 변화가 생길 때마다 이 실제 돔을 직접 조작하는 것은 비효율적
 * 그래서 실제 돔의 구조를 그대로 복사한 가상 돔을 메모리에 만듦
 * 상태(state)에 변화가 생기면, 리액트는 실제 돔을 바로 건드리지 않고 메모리에 새 가상돔을 만듦
 * 이전 가상돔과 상태가 바뀐 새 가상돔과 비교하여 무엇이 바뀌었는지 그 차이점(diff)을 빠르게 찾아냄
 * 찾아낸 다음 변경된 부분만 모아서 실제돔에게 이 부분만 바뀌었으니 여기만 바꾸라고 최종 업데이트 요청
 * 
 * 이 부분의 정확한 순서는 다음과 같습니다.

    상태(state)가 변경되면, 리액트는 새로운 가상돔을 메모리에 만듭니다.

    리액트는 이전 가상돔과 새로 만든 가상돔을 비교합니다. (이 과정을 '비교 알고리즘' 또는 'Diffing'이라고 불러요.)

    두 가상돔의 차이점을 발견하면, 바뀐 부분만 찾아서 실제 돔(Real DOM)에 한 번에 적용합니다.

    즉, '새 가상돔을 실제 돔에 먼저 반영하는' 것이 아니라, **'이전 가상돔과 새 가상돔을 비교해서 달라진 부분만 실제 돔에 반영'**하는 것이죠.

 * 2. 컴포넌트
 * 재사용이 가능한 레고 블럭
 * 재사용이 가능하도록 ui를 만들고 여러 조각으로 나누어서 관리하는데, 이 조각 하나하나를 컴포넌트라고 함
 * 한 화면은 여러 컴포넌트들을 조합해서 하나의 화면을 만듦
 */
