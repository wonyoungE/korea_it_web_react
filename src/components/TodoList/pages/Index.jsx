import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
  // 새로고침했을 때 useState의 상태가 빈 배열로 초기화됐을 거임..
  // 그래서 useEffect에서 useState와 localStorage의 상태가 다르니 빈 배열이 set 됨.. => 새로고침하면 로컬스토리지의 todoList가 비어있음;;
  // 어케 해결?
  // 1)
  // 내 방법 => 로컬스토리지에 값있으면 그대로 갖고오고 없으면 빈 배열 만들고
  // 이렇게 빈 배열로 만들어주면 밑에서 localStorage에서 비교해도 똑같다~ 이 말
  // 이렇게 쓰면 생기는 문제점 : 프로젝트의 규모가 커지면 로컬스토리지에서 get을 할 때 부하가 일어날 수 있음 -> 렌더링이 일어날 때마다 계속 get을 해서..
  // // 이걸 해결하려면 함수로 만들어서 딱 한 번만 실행할 수 있는데
  // const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem("todoList"))
  //     ? JSON.parse(localStorage.getItem("todoList"))
  //     : []
  // );
  // 2) 그렇다면 최초에 한 번만 실행되게 하면 되지 않을까?
  // 지연 초기화: 최초 마운트될 때 한 번만 실행됨(재렌더링시 실행x)
  const [todoList, setTodoList] = useState(() => {
    const localStorageTodoList = localStorage.getItem("todoList");
    return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
  });
  // const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // 이렇게 해결 => 수업
  // 결국 todoList의 초기 상태가 문제!!
  // 그렇다면 useState에서 초기값을 갖고올 때 바로 해결할 수 있지 않나??
  // 얘는 최초 렌더링 시 한 번만 실행함 (deps 없음)
  // useEffect(() => {
  //   let localStorageTodoList = localStorage.getItem("todoList");
  //   if (!localStorageTodoList) {
  //     // 로컬 스토리지에 아무것도 없는 상황을 가정
  //     localStorage.set("todoList", JSON.stringify([]));
  //     localStorageTodoList = [];
  //     setTodoList(localStorageTodoList);
  //   } else {
  //     // 로컬스토리지에 존재함
  //     setTodoList(JSON.parse(localStorageTodoList));
  //   }
  // }, []);

  useEffect(() => {
    // 로컬 스토리지에 저장되어있는 todoList랑 내가 상태로 갖고 있는 todoList가 다르면 로컬스토리지 업데이트
    let localStorageTodoList = localStorage.getItem("todoList");
    const todoListJson = JSON.stringify(todoList);

    if (localStorageTodoList !== todoListJson) {
      localStorage.setItem("todoList", todoListJson);
    }
  }, [todoList]);

  // 만약에 todoList가 너무 커서 렌더링할 때마다 filter가 실행되는 게 부담이 된다면?
  // useMemo로 최적화 가능 => useEffect처럼 특정 상태가 변경될 때마다만 실행시킬 수 있다.
  // 이렇게 하면 todoList, filter, searchText가 바뀔 때에만 다시 계산되고 나머지 재렌더링 때는 이전 값을 재사용함
  // useMemo 사용 안하고 그냥 변수에 할당할 때 => filter()가 배열 반환
  // useMemo 사용해서 할당할 때 => 내가 만든 함수(화살표 함수) 안에서 실행되는 코드
  // 화살표 함수는 {}(블록)을 쓰면 암묵적 return이 안됨
  // 즉, 아무것도 return 하지 않으면 기본값인 undefined가 return됨
  const filteredTodoList = useMemo(() => {
    return todoList
      .filter((todo) => {
        if (filter === "all") {
          return true; // 전체 다 가져오기
        } else if (filter === "complete") {
          return todo.isComplete; // todo에 isComplete가 true인 애들만 return
        } else if (filter === "incomplete") {
          return !todo.isComplete; // todo에 isComplete가 false인 애들만 return
        }
      }) // 필터 거친 후에 searchText도 거쳐야 함 => 메서드 체이닝
      .filter((todo) => {
        if (searchText.trim().length == 0) {
          return true; // 검색 단어가 없으면 전체 리턴
        } else {
          // 아니면 포함된 애들만 데려오기
          return todo.content.includes(searchText);
        }
      });
  }, [filter, searchText, todoList]);

  return (
    <Layout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
      {/* Main은 Layout의 자식 요소 */}
      {/* 얘가 나중에 main이 아니라 다른 걸로 바뀔 수도 있는 거임 */}
      {/* 예를 들어 쇼핑몰의 메인 페이지 -> 상품을 눌렀을 때 상세 페이지로 이동한다 치면 밑에 있는 main 컴포넌트가 언마운트 되고 다른 컴포넌트가 마운트될 수 있는 거 */}
      {/* 필터된 todoList를 넘겨줄 거임 어차피 all이면 전체 다 넘겨줌 */}
      <Main todoList={filteredTodoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default Index;
