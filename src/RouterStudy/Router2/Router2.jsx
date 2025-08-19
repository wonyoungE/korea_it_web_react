import { Link, Route, Routes } from "react-router-dom";

// 컴포넌트 안에 컴포넌트가 있는 구조
/**
 * 하위 라우트(서브 라우트)
 * 특정 경로의 페이지 안에서 또 다른 내부 경로에 따라 다른 컴포넌트를 보여주는 방법
 * 큰 카테고리 안에 작은 소메뉴가 있는 거랑 비슷
 *
 */
function Page1() {
  return (
    <>
      <div>
        <h1>두번째 컴포넌트 Page1</h1>
        {/* 부모 Route의 path가 /*로 끝났기 때문에 그 뒷부분의 경로를 기준으로 매칭 */}
        <Routes>
          <Route path="/page1" element={<h1>페이지1입니다.</h1>} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h2>마지막 컴포넌트 페이지2입니다.</h2>
      </div>
    </>
  );
}

function Router2() {
  return (
    <div>
      <header>
        <Link to={"/page/page1"}>page1</Link>
        <Link to={"/page/page2"}>page2</Link>
        <Link to={"/name/name1"}>name1</Link>
        <Link to={"/name/name2"}>name2</Link>
      </header>
      <h1>최상위 컴포넌트 Router2</h1>
      <Routes>
        {/* *는 해당 컴포넌트 안에 또 Route가 있을 때 사용 */}
        {/* 경로 뒤에 /* 와일드 카드 사용 */}
        {/* 이 경로로 시작하는 하위 경로를 의미 */}
        {/* 즉, page/page1 또는 page/page2 등에 해당하는 컴포넌트를 <Page1>에서 보여줌 */}
        <Route path="/page/*" element={<Page1 />} />
        {/* Route의 element 안에서 직접 중첩 <Routes>를 정의하는 것도 가능 */}
        {/* 이 방식은 페이지 구조가 간단할 때 유용하게 사용할 수 있다. */}
        <Route
          path="/name/*"
          element={
            // 중첩 라우팅
            <Routes>
              <Route path="/name1" element={<h1>손원영</h1>} />
              <Route path="/name2" element={<h1>이동윤</h1>} />
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default Router2;
