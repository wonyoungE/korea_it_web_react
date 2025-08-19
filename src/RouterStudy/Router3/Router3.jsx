import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Router3() {
  // useLocation은 현재 url의 다양한 정보를 담고 있는 location 객체 반환
  // ex) pathname, state, ...
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("경로 이동함!", location.pathname); // 현재 주소 값 가져올 수 있음
    if (location.pathname === "/location/2") {
      // navigate의 첫번째 인자 = 주소값, 두번째 인자 = state
      navigate("/location/3", {
        // state는 URL에는 보이지 않지만 이동한 페이지에서 location.state로 값을 받을 수 있음
        // 로그인 후 이전 페이지로 돌려 보내거나, 데이터를 숨겨서 전달할 때 유용
        // ex) 장바구니에서 결제하려했는데 로그인하래.... 로그인하고 다시 장바구니로 가거나 상품창으로 보낼 때
        // 페이지 이동 간에 데이터 넘길 수 있음
        state: {
          name: "손원영",
          age: 26,
        },
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    // location.state는 navigate 함수를 통해 전달된 숨겨진 데이터를 담고 있다
    //
    console.log("location state => ", location.state);
  }, [location.state]);

  useEffect(() => {
    console.log("쿼리 파라미터 변경됨!");
    // search에는 ?부터 쿼리스트링 담겨있음
    // 한글 보고싶으면 decodeURI()
    console.log("location search => ", decodeURI(location.search));
    // 키 밸류만 갖고오고싶으면? => Router4에서..
  }, [location.search]);

  const backBtnHandler = () => {
    navigate(-1); // 바로 전에 있던 페이지로 뒤로가기 가능
  };

  return (
    <div>
      <Link to={"/location/1"}>location1</Link>
      <Link to={"/location/2"}>location2</Link>
      <Link to={"/location/3"}>location3-1</Link>
      {/* 리액트에서도 쿼리파라미터 받아볼 수 있음 */}
      <Link to={"/location/3?name=손원영"}>location3-2</Link>
      <Link to={"/location/3?name=이동윤"}>location3-3</Link>
      <button onClick={backBtnHandler}>뒤로가기</button>
      <Routes>
        <Route path="/location/1" element={<h1>location1</h1>} />
        <Route path="/location/2" element={<h1>location2</h1>} />
        <Route path="/location/3" element={<h1>location3</h1>} />
      </Routes>
    </div>
  );
}

export default Router3;
