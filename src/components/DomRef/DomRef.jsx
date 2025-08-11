import { useEffect, useRef } from "react";

function DomRef() {
  // js에서 dom에 접근했던 거 처럼 react에서도 가능
  // 특정 요소에 직접 접근해야할 때 사용
  const inputRef = useRef();

  // 첫번째 인자 => 함수, 두번째 인자 => 배열
  // mount, amount, rendering
  //
  useEffect(() => {
    // 해당 요소 가져오는 법
    console.log(inputRef.current);
    // 최초 렌더링 시 input 태그에 focus 준 거
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* 접근해야 하는 요소에 ref로 주기 */}
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default DomRef;
