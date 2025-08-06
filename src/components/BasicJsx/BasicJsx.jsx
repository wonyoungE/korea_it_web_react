/**
 * Jsx?
 * JavaScript와 HTML을 결합한 문법
 *
 *
 */

function BasicJsx() {
  // 1. 태그가 열리면 꼭 닫아야 함
  const jsx1 = (
    <div>
      <p>JSX의 특징</p>
      <input type="text" placeholder="입력하세용~" />
    </div>
  );

  // 2. 두 개 이상의 태그는 하나의 태그로 감싸야 함.
  // 그니까 걍 한 덩어리여야함
  const jsx2 = (
    <div>
      <div></div>
      <div></div>
    </div>
    // <div></div> <= 불가능
  );

  // 3. 변수, 상수, 리스트, 값 등을 표현하려면 {}로 감싸서 표현
  // 단, 자바스크립트 표현식만 들어갈 수 있음
  // if, for, while 등 대신 map, filter, 삼항연산자 등을 사용
  const name = "손원영";
  const age = 26;
  const jsx3 = (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{age >= 20 ? "성인" : "미성년자"}</h3>
    </div>
  );

  // 4. 2번에서 2개 이상의 태그는 하나로 감싸야한다고 했음
  //    이 때, 그룹을 위해 만들어진 태그가 있음
  //    <></>
  const jsx4 = (
    <>
      <div></div>
      <div></div>
    </>
  );

  const jsx5 = (
    <>
      <div></div>
      <div></div>
    </>
  );

  const jsx6 = (
    <div>
      {jsx4}
      {jsx5}
    </div>
  );

  // 5. 배열의 요소로 태그를 넣을 수 있음
  const nameList = [
    <div>손원영</div>,
    <div>손원일</div>,
    <div>손원이</div>,
    <div>손원삼</div>,
    <div>손원사</div>,
  ];

  const nameList2 = ["손원영", "손원일", "손원이", "손원삼", "손원사"];

  return (
    <div>
      {jsx1}
      {jsx2}
      {jsx3}
      {jsx6}
      {nameList}
      {nameList2}
    </div>
  );
}

export default BasicJsx;
