import { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

function Component1() {
  // 동적 파라미터
  /**
   * useParam은 Route의 path에 설정된 동적 파라미터를 객체 형태로 가져온다
   * 비구조 할당으로 가져오기 가능
   */
  const { name } = useParams();
  return <h1>Path Parameter는 {name}입니다.</h1>;
}

function Component2() {
  // useSearchParams는 현재 search params, params를 변경하는 함수 형태의 배열 반환
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const entries = searchParams.entries();
    let searchParamObj = {};
    for (const [key, value] of entries) {
      searchParamObj[key] = value;
    }
    console.log(searchParamObj);

    // .get()으로 특정 키의 값 하나만 가져올 수 있다
    const nameParam = searchParams.get("name"); // 키를 적어주면 값만 가져올 수 있음
    console.log(nameParam);

    // http://localhost:5173/param2/?name=손원영&&age=26&&address=김해&&address=부산&&address=서울
    // .getAll()로 해당 키에 대한 값이 여러개이면 배열 형태로 가져올 수 있음
    console.log("address => ", searchParams.getAll("address"));
  }, [searchParams]);

  const onClickHandler = () => {
    // 이 함수를 호출하게 되면 URL이 바뀌고, 해당 컴포넌트가 재렌더링 됨
    setSearchParams((prev) => {
      // prev.set(key, value)를 사용해서 파라미터를 추가하거나 수정할 수 있다.
      prev.set("address", "대전");
      return prev;
    });
  };

  return (
    <>
      <div>
        <button onClick={onClickHandler}>URL에 'address=대전' 추가/변경</button>
      </div>
    </>
  );
}

function Router4() {
  return (
    <div>
      <Routes>
        {/* path에 콜론을 사용하면 해당 위치의 URL 일부를 name이라는 변수로 받겠다는 의미 */}
        <Route path="/param1/:name" element={<Component1 />} />
        {/* http://localhost:5173/param2/?name=손원영&&age=26&&address=김해 */}
        <Route path="/param2" element={<Component2 />} />
      </Routes>
    </div>
  );
}

export default Router4;
