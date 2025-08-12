import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
  const [inputValue, setInputValue] = useState("");
  // 맨 처음에 과일 다 나오게 할 것임
  const [filteredFruit, setFilteredFruit] = useState(fruits);

  // 입력창에 실시간으로 바뀌는 거..
  // a가 입력되면 a들어간 과일 다 li태그로 나오게
  // filter -> fruit.contains({})
  // 내가 한 방법 => 이렇게 되면 inputValue가 set이 될 필요가 없음..
  // 그래서 이 방법은 좀 아니다
  //   const onChangeHandler = (e) => {
  //     // 대소문자 구분 않기 위해서 소문자로 변환
  //     const search = e.target.value.toLowerCase();
  //     // 과일도 싹 다 소문자로 변환해서
  //     const newFilteredList = fruits.filter((fruit) =>
  //       fruit.toLowerCase().includes(search)
  //     );
  //     // 필터링 된 결과를 상태 변경 -> 화면 재렌더링
  //     // setFilteredFruit(
  //     //   fruits.filter((fruit) => fruit.toLowerCase().includes(search))
  //     // );
  //     setFilteredFruit(newFilteredList);
  //   };

  // useEffect로 해보기
  // useEffect는 inputValue가 상태변경될 때마다 실행
  // 흐름 : 1. input에 사용자가 입력한다 2. inputValue의 상태가 변경된다 3. inputValue를 바라보고 있는 useEffect가 실행된다
  useEffect(() => {
    const newFilterFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(inputValue)
    );
    setFilteredFruit(newFilterFruits);
    return () => {
      setFilteredFruit(fruits);
    };
  }, [inputValue]);

  return (
    <div>
      <h2>검색어를 입력하세요!</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          // input 값이 바뀔 때마다 상태 변경
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <ul>
        <div>검색 결과</div>
        {filteredFruit.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;

// input 하나 만들고 ul하나 만들고 input에 과일 이름을 검색해서 필터를 거친 뒤에 li로 출력
// 최초에는 전체 과일 보여주고 내가 입력을 할 때마다 즉시 filter를 거쳐서 li로 보여주기
// 대소문자 구분 ㄴㄴ
