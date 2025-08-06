function Props1(props) {
  // 객체로 넘어옴
  console.log(props);
  // 비구조 할당 (구조 분해)
  // 변수명 그대로 써야함 (키니까)
  const { a, b } = props;
  return (
    <div>
      <p>a라는 데이터 - {a}</p>
      <p>b라는 데이터 - {b}</p>
    </div>
  );
}

export default Props1;
