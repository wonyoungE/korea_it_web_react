/** @jsxImportSource @emotion/react */
//
import Header from "../Header/Header";
import * as s from "./styles"; // s

// Layout에서 props 속성으로 자식 요소를 갖고올 수 있따
function Layout({ children }) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header />
        {/* 가져와서 알맞은 위치에 두기 */}
        {children}
      </div>
    </div>
  );
}

export default Layout;
