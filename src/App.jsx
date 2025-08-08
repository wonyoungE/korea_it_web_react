import "./App.css";
import BasicJsx from "./components/BasicJsx/BasicJsx";
import BasicReact from "./components/BasicReact/BasicReact";
import BasicProps from "./components/BasicProps/BasicProps";
import CountState from "./components/BasicState/CountState/CountState";
import Calculator from "./components/Caculator/Calculator";

// 함수
// App()은 main.jsx가 root div에 넣어줬움
function App() {
  return (
    <>
      {/* <BasicReact /> */}
      {/* <BasicJsx /> */}
      {/* <BasicProps /> */}
      <CountState/>
      {/* <Calculator></Calculator> */}
    </>
  );
}

export default App;
