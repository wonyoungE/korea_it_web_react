import { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function Router1() {
  /**
   * React Router Dom
   * 리액트 => SPA(Single Page Application)
   * 페이지 이동(라우팅)을 구현할 수 있게 해주는 라이브러리
   * 페이지의 주소나 링크를 클릭했을 때 페이지 전체를 새로고침 하지 않고
   * 주소에 맞는 특정 컴포넌트만 보여주어 마치 여러 페이지가 있는 것처럼 동작하는 것
   */

  const [count, setCount] = useState(0);
  // useNavigate는 페이지를 이동시키는 함수를 제공하는 Hook
  // 버튼 클릭처럼 특정 로직이 실행된 후에 페이지를 이동시키고 싶을 때 사용
  const navigate = useNavigate();

  const layout = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;
  const header = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    background-color: #93b4f1;
  `;

  const countBox = css`
    display: flex;
  `;

  const main = (color) => css`
    width: 100%;
    height: 800px;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  `;

  const footer = css`
    width: 100%;
    height: 80px;
    background-color: #d3e0d3;
    position: absolute;
    bottom: 0;
  `;

  return (
    <div css={layout}>
      <header css={header}>
        {/* a태그 클릭 시 브라우저가 페이지 전체를 새로고침 */}
        {/* SPA의 장점이 의미가 없어지고 상태도 초기화 됨 */}
        <a href={"/color/red"}>레드</a>
        <a href={"/color/blue"}>블루</a>
        <a href={"/color/orange"}>오렌지</a>
        {/* **************************************************************** */}
        {/* Link 컴포넌트는 페이지를 새로고침하지 않고 화면의 내용만 부드럽게 교체 */}
        {/* count 초기화 안 됨, 컴포넌트를 바꿔낀 것 */}
        {/* 링크로 페이지 전환 시 Link 컴포넌트 */}
        <Link to={"/color/red"}>레드(Link)</Link>
        <Link to={"/color/blue"}>블루(Link)</Link>
        <Link to={"/color/orange"}>오렌지(Link)</Link>
        {/* **************************************************************** */}
        {/* 클릭 이벤트로 페이지 전환 시 useNavigate */}
        {/* 아니면 특정 로직 수행 후 페이지 전환이 일어나야할 때 useNavigate */}
        <button onClick={() => navigate("/color/red")}>빨강</button>
        <button onClick={() => navigate("/color/blue")}>파랑</button>
        <button onClick={() => navigate("/color/orange")}>주황</button>
        <div css={countBox}>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        </div>
      </header>
      {/* <Routes>는 여러 <Route>들을 감싸는 영역 */}
      {/* <Route>는 특정 경로(path)와 그 경로에서 보여줄 컴포넌트(element)를 이어주는 역할 */}
      {/* 브라우저의 주소창이 path와 일치하는 Route를 찾아 해당 컴포넌트를 화면에 띄워줌 */}
      {/* 단, 여러 Route중 path가 일치하는 것 하나만 띄워줌 */}
      <Routes>
        <Route
          path="/"
          element={<main css={main("white")}>메인 홈 화면</main>}
        />
        {/* path는 링크, element는 띄울 컴포넌트 */}
        <Route
          path="/color/red"
          element={<main css={main("red")}>RED 화면</main>}
        />
        <Route
          path="/color/blue"
          element={<main css={main("blue")}>BLUE 화면</main>}
        />
        <Route
          path="/color/orange"
          element={<main css={main("orange")}>ORANGE 화면</main>}
        />
      </Routes>
      <footer css={footer}>머리말 영역</footer>
    </div>
  );
}

export default Router1;
