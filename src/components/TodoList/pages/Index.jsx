import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
  const [todoList, setTodoList] = useState([]);
  return (
    <Layout>
      {/* Main은 Layout의 자식 요소 */}
      <Main todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default Index;
