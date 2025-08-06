import Props1 from "./Props1/Props1";
import Props2 from "./Props2/Props2";
import Props3 from "./Props3/Props3";

function BasicProps() {
  return (
    <div>
      {/* 키:밸류 객체 형태로 넘겨줌 */}
      <Props1 a={"data1"} b={"data2"} />
      <Props2 a={"data3"} b={"data4"} c={"data5"} d={"data6"} />
      {/* <Props3 ch1={<div>자식1</div>} /> */}
      {/* Props3에서 children으로 가져다쓸 수 있음 */}
      {/* <div>자식2</div>은 Props3의 자식 요소라고 생각할 수 있음! */}
      <Props3>
        <div>자식2</div>
      </Props3>
    </div>
  );
}

export default BasicProps;
