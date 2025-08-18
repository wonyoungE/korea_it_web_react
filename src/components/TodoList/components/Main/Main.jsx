/** @jsxImportSource @emotion/react */
//
import { useEffect, useState } from "react";
import * as s from "./styles"; // s
import { IoIosTrash } from "react-icons/io";

function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) {
      // 13번 == Enter
      return;
    }

    if (inputValue.trim().length === 0) {
      return;
    }

    setTodoList((prev) => {
      // 삭제할 수도 있으니까 prev.length로 id를 구하기 보단 마지막 요소의 id
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      const newTodo = {
        id: lastId + 1,
        isComplete: false,
        content: inputValue,
      };
      // return [...prev, newTodo];
      return prev.concat(newTodo);
    });

    setInputValue("");
  };

  const deleteOnClickHandler = (todoId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const checkBoxOnChangeHandler = (e) => {
    const todoId = parseInt(e.target.value);
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo${todo.id}`}
                value={todo.id}
                checked={todo.isComplete}
                onChange={checkBoxOnChangeHandler}
              />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                <div
                  css={s.trashBox}
                  // 매개변수가 있기 때문에 익명 함수
                  // 익명 함수로 하지 않을 시 그냥 호출해벎.. .
                  onClick={() => deleteOnClickHandler(todo.id)}
                >
                  <IoIosTrash />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          value={inputValue}
          placeholder="할 일을 입력하세요"
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;
