// 매개변수를 비구조 할당으로 바로 받기
// c, d는 나머지로 받을 수 있다
function Props2({ a, b, ...remain }) {
  console.log(remain);
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
    </div>
  );
}

export default Props2;
