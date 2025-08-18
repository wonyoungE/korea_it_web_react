/** @jsxImportSource @emotion/react */
//
import { IoSearch } from "react-icons/io5";
import * as s from "./styles"; // s
import { useEffect, useState } from "react";

function Header({ filter, setFilter, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const filterOnChangeHandler = (e) => {
    setFilter(e.target.id);
  };

  // 타이핑할 때마다 검색할 거 아님 **
  const searchInputOnchangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };

  // setSearchText는 검색 버튼 눌렀을 때!!
  const searchBtnOnClickHandler = () => {
    setSearchText(searchInputValue);
  };

  return (
    <>
      <div css={s.container}>
        <input
          type="text"
          css={s.searchInput}
          value={searchInputValue}
          onChange={searchInputOnchangeHandler}
        />
        <button css={s.searchButton} onClick={searchBtnOnClickHandler}>
          <IoSearch />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input
          type="radio"
          id="all"
          checked={filter == "all"}
          name="filter"
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="all">전체</label>
        <input
          type="radio"
          id="complete"
          checked={filter == "complete"}
          name="filter"
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="complete">완료</label>
        <input
          type="radio"
          id="incomplete"
          checked={filter == "incomplete"}
          name="filter"
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="incomplete">미완료</label>
      </div>
    </>
  );
}

export default Header;
