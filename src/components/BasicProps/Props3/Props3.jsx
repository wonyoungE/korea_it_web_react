// 자식 요소 전달
// 매개변수로 자식요소 html을 받겠음
/**
 * 자식 요소 전달법
 * 1. props 속성 이용
 * 2. props에 내장되어있는 children 속성 이용
 */
function Props3({ ch1, children }) {
  //   const ch1 = <div>자식요소1</div>;
  console.log(ch1);
  return <div>{children}</div>;
}

export default Props3;
