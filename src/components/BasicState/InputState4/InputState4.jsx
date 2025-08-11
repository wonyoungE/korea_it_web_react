import { useState } from "react";

// 많이 쓰이는 방법
function InputState4() {
  const inputValueEmpty = {
    productName: "",
    price: "",
    amount: "",
  };

  // 상품이 여러개, 배열에 대한 상태, 기본은 빈 배열
  // 배열 돌려서 행 많이 만들 것
  const [products, setProducts] = useState([]);
  // input에 대한 상태, 기본 빈 값
  const [inputValue, setInputValue] = useState(inputValueEmpty);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // 함수형 업데이트
    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onClickHandler = () => {
    // setProducts((prev) => {
    //     // newArray에는 prev가 참조하는 메모리 주소가 할당되는 거기 때문에
    //     // 원본에 수정하는 게 됨 => 메모리 주소 자체가 바뀌는 게 아니라서 리액트가 감지 x
    //     const newArray = prev;
    //     newArray.push(inputValue);
    //     return newArray;
    // });
    // push는 원본 배열을 직접 수정하기 때문에 리액트의 불변성 위배
    // 리액트는 상태의 주소값이 바뀌어야 변화를 감지
    // push는 주소값을 바꾸지 않기 때문에 재렌더링이 일어나지 않거나 예기치 않은 버그가 발생할 수 있다
    setProducts((prev) => [...prev, inputValue]);
    setInputValue(inputValueEmpty);
  };

  return (
    <div>
      <div>
        {/* 입력부 */}
        {/* label과 input -> id로 연결 */}
        <label htmlFor="productName">상품명</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={inputValue.productName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">가격</label>
        <input
          type="text"
          id="amount"
          name="price"
          value={inputValue.price}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">수량</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={inputValue.amount}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button onClick={onClickHandler}>확인</button>
      </div>
      {/* 출력 */}
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {/* products 배열을 순회하며 각 상품 객체를 tr태그로 변환 */}
          {/* index -> 반복되는 거 최상위에 key를 넣어줘야 함 */}
          {/* 고유한 값을 갖고 있어야 재렌더링할 때 편함 */}
          {/* db에서 가져오면 해당 데이터 id 넣어주면 됨 */}
          {/* 지금은 없으니까 그냥 index로 대신 ㄱ */}
          {/* map: 배열에 있는 요소 하나하나에 무엇인가를 적용하는 것 */}
          {products.map((product, index) => (
            // 리액트에서 목록을 렌더링할 때는 각 항목을 구분할 수 있는 고유한 key를 반드시 제공해야 함
            // key는 리액트가 어떤 항목이 변경, 추가, 삭제되었는지 효율적으로 파악하는 데 사용
            // 실제 DB에서의 id를 사용하는 것이 좋지만 없다면 index로 사용해도 좋음
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InputState4;
